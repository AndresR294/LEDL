"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayerWithTokenService = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const web3_js_1 = require("@solana/web3.js");
const chain_enums_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../chains/chain.enums");
const core_api_model_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../client/core-api/core-api.model");
const exceptions_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../exceptions");
const utils_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/utils");
const bridgeIdl = __importStar(require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/models/sol/types/bridge.json"));
const payerWithTokenIdl = __importStar(require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/models/sol/types/payer_with_token.json"));
const sol_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/sol");
const accounts_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/sol/accounts");
const anchor_provider_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/sol/anchor-provider");
const utils_2 = require("../utils");
const utils_3 = require("./utils");
const COMPUTE_UNIT_LIMIT = 1_000_000;
class PayerWithTokenService {
    solanaRpcUrl;
    params;
    api;
    chainType = chain_enums_1.ChainType.SOLANA;
    constructor(solanaRpcUrl, params, api) {
        this.solanaRpcUrl = solanaRpcUrl;
        this.params = params;
        this.api = api;
    }
    async buildRawTransactionSend(params, solTxSendParams) {
        switch (params.messenger) {
            case core_api_model_1.Messenger.ALLBRIDGE: {
                const swapAndBridgeData = await this.prepareSwapAndBridgeAllbridgeData(params, solTxSendParams);
                const tx = await this.buildSwapAndBridgeTx(swapAndBridgeData);
                return { tx };
            }
            case core_api_model_1.Messenger.WORMHOLE: {
                const swapAndBridgeData = await this.prepareSwapAndBridgeWormholeData(params, solTxSendParams);
                return await this.buildSwapAndBridgeWormholeTx(swapAndBridgeData);
            }
            case core_api_model_1.Messenger.CCTP: {
                const bridgeCctpData = await this.prepareBridgeCctpData(params, solTxSendParams);
                return this.buildBridgeCctpTx(bridgeCctpData);
            }
            case core_api_model_1.Messenger.CCTP_V2: {
                const bridgeCctpData = await this.prepareBridgeCctpData(params, solTxSendParams);
                return this.buildBridgeCctpV2Tx(bridgeCctpData);
            }
            case core_api_model_1.Messenger.X_RESERVE:
                throw new exceptions_1.SdkError("Messenger xReserve is not supported yet.");
            case core_api_model_1.Messenger.OFT:
                throw new exceptions_1.OFTDoesNotSupportedError("Messenger OFT is not supported yet.");
            default: {
                return (0, utils_1.assertNever)(params.messenger, "Unhandled Messenger type");
            }
        }
    }
    async prepareSwapAndBridgeBaseData(params, solTxSendParams) {
        const { fromChainId, fromAccountAddress, fromTokenAddress, poolAddress, toAccountAddress, toTokenAddress, toChainId, fee, extraGas = "0", } = solTxSendParams;
        const userAccount = new web3_js_1.PublicKey(fromAccountAddress);
        const recipient = Array.from(toAccountAddress);
        const recipientToken = Array.from(toTokenAddress);
        const maxFeeAmount = new anchor_1.BN(fee);
        const extraGasAmountInFeeToken = new anchor_1.BN(extraGas);
        const provider = (0, anchor_provider_1.buildAnchorProvider)(this.solanaRpcUrl, fromAccountAddress);
        const payerProgram = this.getPayerProgram(params, provider);
        const bridgeProgram = new anchor_1.Program({ ...bridgeIdl, address: params.sourceToken.bridgeAddress }, provider);
        const poolAccount = new web3_js_1.PublicKey(poolAddress);
        const bridgeConfigAccount = await (0, accounts_1.getConfigAccount)(bridgeProgram.programId);
        const bridgeConfigInfo = await bridgeProgram.account.config.fetch(bridgeConfigAccount);
        const mintAccount = new web3_js_1.PublicKey(fromTokenAddress);
        const feeTokenMintAccount = new web3_js_1.PublicKey(this.getAbrFeeTokenMintAddress(params));
        const userTokenAccount = (0, accounts_1.getAssociatedAccount)(userAccount, mintAccount);
        const userFeeTokenAccount = (0, accounts_1.getAssociatedAccount)(userAccount, feeTokenMintAccount);
        const gasPriceAccount = await (0, accounts_1.getPriceAccount)(toChainId, bridgeConfigInfo.gasOracleProgramId);
        const thisGasPriceAccount = await (0, accounts_1.getPriceAccount)(fromChainId, bridgeConfigInfo.gasOracleProgramId);
        return {
            provider,
            payerProgram,
            bridgeProgram,
            userAccount,
            recipient,
            recipientToken,
            recipientChain: toChainId,
            maxFeeAmount,
            extraGasAmountInFeeToken,
            mintAccount,
            feeTokenMintAccount,
            userTokenAccount,
            userFeeTokenAccount,
            gasPriceAccount,
            thisGasPriceAccount,
            poolAccount,
            bridgeConfigAccount,
            bridgeConfigInfo,
        };
    }
    getComputeUnitLimitInstruction() {
        return anchor_1.web3.ComputeBudgetProgram.setComputeUnitLimit({ units: COMPUTE_UNIT_LIMIT });
    }
    getPayerProgram(params, provider) {
        const payerAddress = params.sourceToken.abrPayer?.payerAddress;
        if (!payerAddress) {
            throw new exceptions_1.InvalidGasFeePaymentOptionError("Payer with token not supported yet for ABR tokens");
        }
        return new anchor_1.Program({ ...payerWithTokenIdl, address: payerAddress }, provider);
    }
    getAbrFeeTokenMintAddress(params) {
        const abrTokenAddress = params.sourceToken.abrPayer?.abrToken.tokenAddress;
        if (!abrTokenAddress) {
            throw new exceptions_1.InvalidGasFeePaymentOptionError("Payer with token not supported yet for ABR tokens");
        }
        return abrTokenAddress;
    }
    async prepareSwapAndBridgeCommonData(baseData, solTxSendParams) {
        const { amount, toChainId, toTokenAddress } = solTxSendParams;
        const { bridgeProgram, poolAccount, mintAccount } = baseData;
        const vUsdAmount = await (0, sol_1.getVUsdAmount)(amount, bridgeProgram, poolAccount);
        const nonce = Array.from((0, utils_2.getNonce)());
        const lockAccount = await (0, accounts_1.getLockAccount)(nonce, bridgeProgram.programId);
        const bridgeProgramId = bridgeProgram.programId;
        const chainBridgeAccount = await (0, accounts_1.getChainBridgeAccount)(toChainId, bridgeProgramId);
        const bridgeAuthorityAccount = await (0, accounts_1.getAuthorityAccount)(bridgeProgramId);
        const bridgeTokenAccount = await (0, accounts_1.getBridgeTokenAccount)(mintAccount, bridgeProgramId);
        const otherBridgeTokenAccount = await (0, accounts_1.getOtherChainTokenAccount)(toChainId, Buffer.from(toTokenAddress), bridgeProgramId);
        return {
            ...baseData,
            vusdAmount: new anchor_1.BN(vUsdAmount),
            nonce,
            lockAccount,
            chainBridgeAccount,
            bridgeProgramId,
            bridgeAuthorityAccount,
            bridgeTokenAccount,
            otherBridgeTokenAccount,
        };
    }
    getWormholeProgramAddresses(wormholeProgramId, bridgeAuthorityAccount) {
        const programId = new web3_js_1.PublicKey(wormholeProgramId);
        const [wormholeBridgeAccount] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("Bridge")], programId);
        const [wormholeSequenceAccount] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("Sequence"), bridgeAuthorityAccount.toBuffer()], programId);
        const [wormholeFeeCollectorAccount] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("fee_collector")], programId);
        return {
            wormholeBridgeAccount,
            wormholeSequenceAccount,
            wormholeFeeCollectorAccount,
        };
    }
    async getWormholeFeeInstruction(provider, wormholeBridgeAccount, userAccount, wormholeFeeCollectorAccount) {
        const bridgeAccountInfo = await provider.connection.getAccountInfo(wormholeBridgeAccount);
        if (bridgeAccountInfo == null) {
            throw new exceptions_1.SdkError("Cannot fetch wormhole bridge account info");
        }
        const feeLamports = new anchor_1.BN(bridgeAccountInfo.data.slice(16, 24), "le").toString();
        return web3_js_1.SystemProgram.transfer({
            fromPubkey: userAccount,
            toPubkey: wormholeFeeCollectorAccount,
            lamports: +feeLamports,
        });
    }
    async prepareSwapAndBridgeAllbridgeData(params, solTxSendParams) {
        const baseData = await this.prepareSwapAndBridgeBaseData(params, solTxSendParams);
        const commonData = await this.prepareSwapAndBridgeCommonData(baseData, solTxSendParams);
        const { recipient, recipientToken, recipientChain, bridgeConfigInfo } = baseData;
        const { vusdAmount, nonce, bridgeAuthorityAccount } = commonData;
        const { fromChainId, toChainId } = solTxSendParams;
        const message = (0, sol_1.getMessage)({
            amount: vusdAmount.toString(),
            recipient: Buffer.from(recipient),
            nonce: Buffer.from(nonce),
            receiveToken: Buffer.from(recipientToken),
            destinationChainId: recipientChain,
            sourceChainId: fromChainId,
            chainBridge: bridgeAuthorityAccount.toBuffer(),
        });
        const messengerProgramId = bridgeConfigInfo.allbridgeMessengerProgramId;
        const sentMessageAccount = await (0, accounts_1.getSendMessageAccount)(message, messengerProgramId);
        const messengerConfigAccount = await (0, accounts_1.getConfigAccount)(messengerProgramId);
        const messengerGasUsageAccount = await (0, accounts_1.getGasUsageAccount)(toChainId, messengerProgramId);
        return {
            ...commonData,
            sentMessageAccount,
            messengerProgramId,
            messengerConfigAccount,
            messengerGasUsageAccount,
        };
    }
    async prepareSwapAndBridgeWormholeData(params, solTxSendParams) {
        const baseData = await this.prepareSwapAndBridgeBaseData(params, solTxSendParams);
        const commonData = await this.prepareSwapAndBridgeCommonData(baseData, solTxSendParams);
        const { provider, userAccount, bridgeConfigInfo } = baseData;
        const { bridgeAuthorityAccount } = commonData;
        const { toChainId } = solTxSendParams;
        const wormholeMessengerAccount = bridgeConfigInfo.wormholeMessengerProgramId;
        const wormholeMessengerConfigAccount = await (0, accounts_1.getConfigAccount)(wormholeMessengerAccount);
        const messengerGasUsageAccount = await (0, accounts_1.getGasUsageAccount)(toChainId, wormholeMessengerAccount);
        const wormholeProgramId = this.params.wormholeMessengerProgramId;
        const { wormholeBridgeAccount, wormholeSequenceAccount, wormholeFeeCollectorAccount } = this.getWormholeProgramAddresses(wormholeProgramId, bridgeAuthorityAccount);
        const messageAccount = web3_js_1.Keypair.generate();
        const feeInstruction = await this.getWormholeFeeInstruction(provider, wormholeBridgeAccount, userAccount, wormholeFeeCollectorAccount);
        return {
            ...commonData,
            wormholeMessengerAccount,
            wormholeMessengerConfigAccount,
            wormholeProgramId,
            sequenceAccount: wormholeSequenceAccount,
            feeCollectorAccount: wormholeFeeCollectorAccount,
            messengerGasUsageAccount,
            messageAccount,
            wormholeBridgeAccount,
            feeInstruction,
        };
    }
    async prepareBridgeCctpData(params, solTxSendParams) {
        const baseData = await this.prepareSwapAndBridgeBaseData(params, solTxSendParams);
        const { mintAccount } = baseData;
        const { amount, toChainId } = solTxSendParams;
        const destinationChainSymbol = params.destinationToken.chainSymbol;
        const domain = this.params.cctpParams.cctpDomains[destinationChainSymbol];
        let cctpVersion;
        let cctpAddress;
        let cctpTransmitterProgramIdAddress;
        let cctpTokenMessengerMinterAddress;
        if (params.messenger === core_api_model_1.Messenger.CCTP) {
            cctpVersion = 1;
            cctpAddress = params.sourceToken.cctpAddress;
            cctpTransmitterProgramIdAddress = this.params.cctpParams.cctpTransmitterProgramId;
            cctpTokenMessengerMinterAddress = this.params.cctpParams.cctpTokenMessengerMinter;
        }
        else if (params.messenger === core_api_model_1.Messenger.CCTP_V2) {
            cctpVersion = 2;
            cctpAddress = params.sourceToken.cctpV2Address;
            cctpTransmitterProgramIdAddress = this.params.cctpParams.cctpV2TransmitterProgramId;
            cctpTokenMessengerMinterAddress = this.params.cctpParams.cctpV2TokenMessengerMinter;
        }
        if (domain == undefined || !cctpTransmitterProgramIdAddress || !cctpTokenMessengerMinterAddress) {
            throw new exceptions_1.SdkError(`CCTP ${cctpVersion} is not configured`);
        }
        if (!cctpAddress) {
            throw new exceptions_1.CCTPDoesNotSupportedError(`Such route does not support CCTP ${cctpVersion} protocol`);
        }
        const cctpBridgeProgramId = new web3_js_1.PublicKey(cctpAddress);
        const cctpBridgeConfigAccount = cctpVersion === 1
            ? await (0, accounts_1.getCctpBridgeAccount)(mintAccount, cctpBridgeProgramId)
            : (0, accounts_1.getCctpV2BridgeConfigAccount)(mintAccount, cctpBridgeProgramId);
        const chainBridgeAccount = await (0, accounts_1.getChainBridgeAccount)(toChainId, cctpBridgeProgramId);
        const cctpBridgeAuthorityAccount = await (0, accounts_1.getCctpAuthorityAccount)(cctpBridgeConfigAccount, cctpBridgeProgramId);
        const cctpBridgeTokenAccount = await (0, accounts_1.getBridgeTokenAccount)(mintAccount, cctpBridgeProgramId);
        const cctpTransmitterProgramId = new web3_js_1.PublicKey(cctpTransmitterProgramIdAddress);
        const cctpTokenMessengerMinter = new web3_js_1.PublicKey(cctpTokenMessengerMinterAddress);
        const { messageTransmitterAccount, tokenMessenger, tokenMessengerEventAuthority, tokenMinter, localToken, remoteTokenMessengerKey, authorityPda, } = (0, accounts_1.getCctpAccounts)(domain, mintAccount, cctpTransmitterProgramId, cctpTokenMessengerMinter);
        const messageSentEventDataKeypair = web3_js_1.Keypair.generate();
        const lockAccount = (0, accounts_1.getCctpLockAccount)(cctpBridgeProgramId, messageSentEventDataKeypair.publicKey);
        return {
            ...baseData,
            lockAccount,
            messageSentEventDataKeypair,
            amount: new anchor_1.BN(amount),
            chainBridgeAccount,
            cctpBridgeProgramId,
            cctpBridgeAuthorityAccount,
            cctpBridgeConfigAccount,
            cctpBridgeTokenAccount,
            cctpTokenMessengerMinter,
            cctpTransmitterProgramId,
            messageTransmitterAccount,
            tokenMessenger,
            tokenMessengerEventAuthority,
            tokenMinter,
            localToken,
            remoteTokenMessengerKey,
            authorityPda,
        };
    }
    async buildSwapAndBridgeTx(swapAndBridgeAllbridgeData) {
        const { provider, payerProgram, userAccount, vusdAmount, recipient, recipientChain, recipientToken, maxFeeAmount, extraGasAmountInFeeToken, nonce, lockAccount, chainBridgeAccount, bridgeProgramId, bridgeAuthorityAccount, bridgeTokenAccount, mintAccount, feeTokenMintAccount, userTokenAccount, userFeeTokenAccount, gasPriceAccount, thisGasPriceAccount, sentMessageAccount, messengerProgramId, messengerConfigAccount, messengerGasUsageAccount, bridgeConfigAccount, otherBridgeTokenAccount, poolAccount, } = swapAndBridgeAllbridgeData;
        const transaction = await payerProgram.methods
            .swapAndBridge({
            vusdAmount,
            recipient,
            recipientToken,
            maxFeeAmount,
            extraGasAmountInFeeToken,
            nonce,
            destinationChainId: recipientChain,
        })
            .accountsPartial({
            lock: lockAccount,
            chainBridge: chainBridgeAccount,
            bridge: bridgeProgramId,
            bridgeAuthority: bridgeAuthorityAccount,
            bridgeToken: bridgeTokenAccount,
            mint: mintAccount,
            feeTokenMint: feeTokenMintAccount,
            userTokenAccount,
            userFeeTokenAccount,
            gasPrice: gasPriceAccount,
            thisGasPrice: thisGasPriceAccount,
            sentMessageAccount,
            messenger: messengerProgramId,
            messengerConfig: messengerConfigAccount,
            messengerGasUsage: messengerGasUsageAccount,
            bridgeConfig: bridgeConfigAccount,
            otherBridgeToken: otherBridgeTokenAccount,
            pool: poolAccount,
        })
            .preInstructions([this.getComputeUnitLimitInstruction()])
            .transaction();
        return await this.finalizeTransaction(transaction, provider, userAccount);
    }
    async buildSwapAndBridgeWormholeTx(swapAndBridgeWormholeData) {
        const { provider, payerProgram, userAccount, vusdAmount, recipient, recipientChain, recipientToken, maxFeeAmount, extraGasAmountInFeeToken, nonce, lockAccount, chainBridgeAccount, bridgeProgramId, bridgeAuthorityAccount, bridgeTokenAccount, mintAccount, feeTokenMintAccount, userTokenAccount, userFeeTokenAccount, gasPriceAccount, thisGasPriceAccount, messengerGasUsageAccount, bridgeConfigAccount, otherBridgeTokenAccount, poolAccount, wormholeMessengerAccount, wormholeMessengerConfigAccount, wormholeProgramId, sequenceAccount, feeCollectorAccount, messageAccount, wormholeBridgeAccount, feeInstruction, } = swapAndBridgeWormholeData;
        const transaction = await payerProgram.methods
            .swapAndBridgeWormhole({
            vusdAmount,
            recipient,
            recipientToken,
            maxFeeAmount,
            extraGasAmountInFeeToken,
            nonce,
            destinationChainId: recipientChain,
        })
            .accounts({
            lock: lockAccount,
            chainBridge: chainBridgeAccount,
            bridge: bridgeProgramId,
            bridgeAuthority: bridgeAuthorityAccount,
            bridgeToken: bridgeTokenAccount,
            mint: mintAccount,
            feeTokenMint: feeTokenMintAccount,
            userTokenAccount,
            userFeeTokenAccount,
            gasPrice: gasPriceAccount,
            thisGasPrice: thisGasPriceAccount,
            messengerGasUsage: messengerGasUsageAccount,
            bridgeConfig: bridgeConfigAccount,
            otherBridgeToken: otherBridgeTokenAccount,
            pool: poolAccount,
            wormholeMessenger: wormholeMessengerAccount,
            wormholeMessengerConfig: wormholeMessengerConfigAccount,
            wormholeProgram: wormholeProgramId,
            sequence: sequenceAccount,
            feeCollector: feeCollectorAccount,
            message: messageAccount.publicKey,
            wormholeBridge: wormholeBridgeAccount,
            // user: user.publicKey,
        })
            .preInstructions([this.getComputeUnitLimitInstruction(), feeInstruction])
            .signers([messageAccount])
            .transaction();
        return {
            tx: await this.finalizeTransaction(transaction, provider, userAccount),
            requiredMessageSigner: messageAccount,
        };
    }
    async buildBridgeCctpTx(bridgeCctpData) {
        const { provider, payerProgram, amount, recipient, recipientToken, userAccount, recipientChain, maxFeeAmount, extraGasAmountInFeeToken, lockAccount, mintAccount, feeTokenMintAccount, userTokenAccount, userFeeTokenAccount, gasPriceAccount, thisGasPriceAccount, chainBridgeAccount, cctpBridgeProgramId, cctpBridgeAuthorityAccount, cctpBridgeConfigAccount, cctpBridgeTokenAccount, cctpTokenMessengerMinter, cctpTransmitterProgramId, messageTransmitterAccount, tokenMessenger, tokenMessengerEventAuthority, tokenMinter, localToken, remoteTokenMessengerKey, authorityPda, messageSentEventDataKeypair, } = bridgeCctpData;
        const transaction = await payerProgram.methods
            .bridgeCctp({
            amount,
            recipient,
            receiveToken: recipientToken,
            destinationChainId: recipientChain,
            maxFeeAmount,
            extraGasAmountInFeeToken,
        })
            .accounts({
            lock: lockAccount,
            messageSentEventData: messageSentEventDataKeypair.publicKey,
            mint: mintAccount,
            feeTokenMint: feeTokenMintAccount,
            userFeeTokenAccount,
            bridgeToken: cctpBridgeTokenAccount,
            cctpBridge: cctpBridgeProgramId,
            cctpBridgeConfig: cctpBridgeConfigAccount,
            cctpMessenger: cctpTokenMessengerMinter,
            messageTransmitterProgram: cctpTransmitterProgramId,
            messageTransmitterAccount: messageTransmitterAccount,
            tokenMessenger,
            tokenMinter,
            localToken,
            remoteTokenMessengerKey,
            authorityPda,
            eventAuthority: tokenMessengerEventAuthority,
            gasPrice: gasPriceAccount,
            thisGasPrice: thisGasPriceAccount,
            chainBridge: chainBridgeAccount,
            bridgeAuthority: cctpBridgeAuthorityAccount,
            userTokenAccount,
        })
            .preInstructions([this.getComputeUnitLimitInstruction()])
            .transaction();
        return {
            tx: await this.finalizeTransaction(transaction, provider, userAccount),
            requiredMessageSigner: messageSentEventDataKeypair,
        };
    }
    async buildBridgeCctpV2Tx(bridgeCctpData) {
        const { provider, payerProgram, amount, recipient, recipientToken, userAccount, recipientChain, maxFeeAmount, extraGasAmountInFeeToken, lockAccount, mintAccount, feeTokenMintAccount, userTokenAccount, userFeeTokenAccount, gasPriceAccount, thisGasPriceAccount, chainBridgeAccount, cctpBridgeProgramId, cctpBridgeAuthorityAccount, cctpBridgeConfigAccount, cctpBridgeTokenAccount, cctpTokenMessengerMinter, cctpTransmitterProgramId, messageTransmitterAccount, tokenMessenger, tokenMessengerEventAuthority, tokenMinter, localToken, remoteTokenMessengerKey, authorityPda, messageSentEventDataKeypair, } = bridgeCctpData;
        const transaction = await payerProgram.methods
            .bridgeCctpV2({
            amount,
            recipient,
            receiveToken: recipientToken,
            destinationChainId: recipientChain,
            maxFeeAmount,
            extraGasAmountInFeeToken,
        })
            .accounts({
            mint: mintAccount,
            feeTokenMint: feeTokenMintAccount,
            userFeeTokenAccount,
            bridgeToken: cctpBridgeTokenAccount,
            cctpBridge: cctpBridgeProgramId,
            tokenMessengerMinterProgram: cctpTokenMessengerMinter,
            messageTransmitterProgram: cctpTransmitterProgramId,
            messageTransmitterAccount: messageTransmitterAccount,
            tokenMessenger,
            tokenMinter,
            localToken,
            remoteTokenMessenger: remoteTokenMessengerKey,
            authorityPda,
            eventAuthority: tokenMessengerEventAuthority,
            messageSentEventData: messageSentEventDataKeypair.publicKey,
            lock: lockAccount,
            cctpBridgeConfig: cctpBridgeConfigAccount,
            gasPrice: gasPriceAccount,
            thisGasPrice: thisGasPriceAccount,
            chainBridge: chainBridgeAccount,
            bridgeAuthority: cctpBridgeAuthorityAccount,
            userTokenAccount,
        })
            .preInstructions([this.getComputeUnitLimitInstruction()])
            .transaction();
        return {
            tx: await this.finalizeTransaction(transaction, provider, userAccount),
            requiredMessageSigner: messageSentEventDataKeypair,
        };
    }
    async finalizeTransaction(transaction, provider, userAccount) {
        const connection = provider.connection;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transaction.feePayer = userAccount;
        return await (0, utils_3.convertToVersionedTransaction)(transaction, connection, this.params.solanaLookUpTable);
    }
}
exports.PayerWithTokenService = PayerWithTokenService;
//# sourceMappingURL=payer-with-token-service.js.map