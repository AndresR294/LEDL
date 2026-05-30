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
exports.BridgeTxService = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const core_api_model_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../client/core-api/core-api.model");
const exceptions_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../exceptions");
const models_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../models");
const utils_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/utils");
const bridgeIdl = __importStar(require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/models/sol/types/bridge.json"));
const cctpBridgeIdl = __importStar(require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/models/sol/types/cctp_bridge.json"));
const cctpV2BridgeIdl = __importStar(require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/models/sol/types/cctp_v2_bridge.json"));
const sol_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/sol");
const accounts_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/sol/accounts");
const anchor_provider_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/sol/anchor-provider");
const compute_budget_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/sol/compute-budget");
const utils_2 = require("../utils");
const utils_3 = require("./utils");
const COMPUTE_UNIT_LIMIT = 1_000_000;
class BridgeTxService {
    solanaRpcUrl;
    params;
    api;
    chainType = models_1.ChainType.SOLANA;
    constructor(solanaRpcUrl, params, api) {
        this.solanaRpcUrl = solanaRpcUrl;
        this.params = params;
        this.api = api;
    }
    async buildRawTransactionSwap(params) {
        const txSwapParams = (0, utils_2.prepareTxSwapParams)(this.chainType, params);
        return await this.buildSwapTransaction(txSwapParams, params.sourceToken.poolAddress, params.destinationToken.poolAddress, params.txFeeParams);
    }
    async buildSwapTransaction(params, poolAddress, toPoolAddress, txFeeParams) {
        const { fromAccountAddress, amount, contractAddress, fromTokenAddress, toTokenAddress, toAccountAddress, minimumReceiveAmount, } = params;
        const account = fromAccountAddress;
        const bridgeAddress = contractAddress;
        const tokenAddress = fromTokenAddress;
        const receiveTokenAddress = toTokenAddress;
        const receivePoolAddress = toPoolAddress;
        const receiverOriginal = toAccountAddress;
        const userAccount = new web3_js_1.PublicKey(account);
        const provider = (0, anchor_provider_1.buildAnchorProvider)(this.solanaRpcUrl, userAccount.toString());
        const bridge = new anchor_1.Program({ ...bridgeIdl, address: bridgeAddress }, provider);
        const bridgeAuthority = await (0, accounts_1.getAuthorityAccount)(bridge.programId);
        const configAccount = await (0, accounts_1.getConfigAccount)(bridge.programId);
        const sendMint = new web3_js_1.PublicKey(tokenAddress);
        const sendBridgeToken = await (0, accounts_1.getBridgeTokenAccount)(sendMint, bridge.programId);
        const sendPool = new web3_js_1.PublicKey(poolAddress);
        const sendUserToken = (0, accounts_1.getAssociatedAccount)(userAccount, sendMint);
        const receiverAccount = new web3_js_1.PublicKey(receiverOriginal);
        const receiveMint = new web3_js_1.PublicKey(receiveTokenAddress);
        const receiveBridgeToken = await (0, accounts_1.getBridgeTokenAccount)(receiveMint, bridge.programId);
        const receivePool = new web3_js_1.PublicKey(receivePoolAddress);
        const receiveUserToken = (0, accounts_1.getAssociatedAccount)(receiverAccount, receiveMint);
        const preInstructions = [
            anchor_1.web3.ComputeBudgetProgram.setComputeUnitLimit({
                units: COMPUTE_UNIT_LIMIT,
            }),
        ];
        try {
            await (0, sol_1.getTokenAccountData)(receiveUserToken, provider);
        }
        catch (ignoreError) {
            const receiveUserToken = (0, spl_token_1.getAssociatedTokenAddressSync)(receiveMint, receiverAccount);
            const createReceiveUserTokenInstruction = (0, spl_token_1.createAssociatedTokenAccountInstruction)(userAccount, receiveUserToken, receiverAccount, receiveMint);
            preInstructions.push(createReceiveUserTokenInstruction);
        }
        const transaction = await bridge.methods
            .swap(new anchor_1.BN(amount), new anchor_1.BN(minimumReceiveAmount || 0))
            .accountsPartial({
            payer: userAccount,
            config: configAccount,
            bridgeAuthority,
            user: userAccount,
            sendBridgeToken,
            sendMint,
            sendPool,
            sendUserToken,
            receiveBridgeToken,
            receiveMint,
            receivePool,
            receiveUserToken,
        })
            .preInstructions(preInstructions)
            .transaction();
        const connection = provider.connection;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transaction.feePayer = userAccount;
        await (0, compute_budget_1.addUnitLimitAndUnitPriceToTx)(transaction, txFeeParams, this.solanaRpcUrl);
        return await (0, utils_3.convertToVersionedTransaction)(transaction, connection, this.params.solanaLookUpTable);
    }
    async buildRawTransactionSend(params, solTxSendParams) {
        let swapAndBridgeTx;
        let requiredMessageSigner = undefined;
        switch (params.messenger) {
            case core_api_model_1.Messenger.ALLBRIDGE: {
                const swapAndBridgeSolData = await this.prepareSwapAndBridgeData(solTxSendParams);
                swapAndBridgeTx = await this.buildSwapAndBridgeAllbridgeTransaction(swapAndBridgeSolData);
                break;
            }
            case core_api_model_1.Messenger.WORMHOLE: {
                const swapAndBridgeSolData = await this.prepareSwapAndBridgeData(solTxSendParams);
                const { transaction, messageAccount } = await this.buildSwapAndBridgeWormholeTransaction(swapAndBridgeSolData);
                swapAndBridgeTx = transaction;
                requiredMessageSigner = messageAccount;
                break;
            }
            case core_api_model_1.Messenger.CCTP: {
                const swapAndBridgeSolData = await this.prepareSwapAndBridgeCctpData(solTxSendParams);
                const { transaction, messageSentEventDataKeypair } = await this.buildSwapAndBridgeCctpTransaction(params.destinationToken.chainSymbol, swapAndBridgeSolData);
                swapAndBridgeTx = transaction;
                requiredMessageSigner = messageSentEventDataKeypair;
                break;
            }
            case core_api_model_1.Messenger.CCTP_V2: {
                const swapAndBridgeSolData = await this.prepareSwapAndBridgeCctpV2Data(solTxSendParams);
                const { transaction, messageSentEventDataKeypair } = await this.buildSwapAndBridgeCctpV2Transaction(params.destinationToken.chainSymbol, swapAndBridgeSolData);
                swapAndBridgeTx = transaction;
                requiredMessageSigner = messageSentEventDataKeypair;
                break;
            }
            case core_api_model_1.Messenger.X_RESERVE:
                throw new exceptions_1.SdkError("Messenger xReserve is not supported yet.");
            case core_api_model_1.Messenger.OFT:
                throw new exceptions_1.OFTDoesNotSupportedError("Messenger OFT is not supported yet.");
            default: {
                return (0, utils_1.assertNever)(params.messenger, "Unhandled Messenger type");
            }
        }
        return { tx: swapAndBridgeTx, requiredMessageSigner };
    }
    getExtraGasInstruction(extraGas, userAccount, configAccount) {
        return anchor_1.web3.SystemProgram.transfer({
            fromPubkey: userAccount,
            toPubkey: configAccount,
            lamports: +extraGas,
        });
    }
    async prepareSwapAndBridgeData(txSendParams) {
        const { amount, contractAddress, fromChainId, fromAccountAddress, fromTokenAddress, toChainId, toAccountAddress, toTokenAddress, poolAddress, extraGas, } = txSendParams;
        const tokenAddress = fromTokenAddress;
        const account = fromAccountAddress;
        const destinationChainId = toChainId;
        const receiveTokenAddress = toTokenAddress;
        const receiverInBuffer32 = toAccountAddress;
        const bridgeAddress = contractAddress;
        const sourceChainId = fromChainId;
        const provider = (0, anchor_provider_1.buildAnchorProvider)(this.solanaRpcUrl, account);
        const bridge = new anchor_1.Program({ ...bridgeIdl, address: bridgeAddress }, provider);
        const nonce = Array.from((0, utils_2.getNonce)());
        const poolAccount = new web3_js_1.PublicKey(poolAddress);
        const vUsdAmount = await (0, sol_1.getVUsdAmount)(amount, bridge, poolAccount);
        const lockAccount = await (0, accounts_1.getLockAccount)(nonce, bridge.programId);
        const bridgeAuthority = await (0, accounts_1.getAuthorityAccount)(bridge.programId);
        const userToken = (0, accounts_1.getAssociatedAccount)(new web3_js_1.PublicKey(account), new web3_js_1.PublicKey(tokenAddress));
        const bridgeTokenAccount = await (0, accounts_1.getBridgeTokenAccount)(new web3_js_1.PublicKey(tokenAddress), bridge.programId);
        const chainBridgeAccount = await (0, accounts_1.getChainBridgeAccount)(destinationChainId, bridge.programId);
        const otherBridgeTokenAccount = await (0, accounts_1.getOtherChainTokenAccount)(destinationChainId, Buffer.from(receiveTokenAddress), bridge.programId);
        const configAccount = await (0, accounts_1.getConfigAccount)(bridge.programId);
        const configAccountInfo = await bridge.account.config.fetch(configAccount);
        const priceAccount = await (0, accounts_1.getPriceAccount)(destinationChainId, configAccountInfo.gasOracleProgramId);
        const thisGasPriceAccount = await (0, accounts_1.getPriceAccount)(sourceChainId, configAccountInfo.gasOracleProgramId);
        const message = (0, sol_1.getMessage)({
            amount: vUsdAmount,
            recipient: Buffer.from(receiverInBuffer32),
            nonce: Buffer.from(nonce),
            receiveToken: Buffer.from(receiveTokenAddress),
            destinationChainId,
            sourceChainId,
            chainBridge: (await (0, accounts_1.getAuthorityAccount)(bridge.programId)).toBuffer(),
        });
        const swapAndBridgeData = {};
        swapAndBridgeData.bridge = bridge;
        swapAndBridgeData.amount = new anchor_1.BN(amount);
        swapAndBridgeData.vusdAmount = new anchor_1.BN(vUsdAmount);
        swapAndBridgeData.nonce = nonce;
        swapAndBridgeData.recipient = Array.from(receiverInBuffer32);
        swapAndBridgeData.receiveToken = Array.from(receiveTokenAddress);
        swapAndBridgeData.poolAccount = poolAccount;
        swapAndBridgeData.lockAccount = lockAccount;
        swapAndBridgeData.bridgeAuthority = bridgeAuthority;
        swapAndBridgeData.userToken = userToken;
        swapAndBridgeData.bridgeTokenAccount = bridgeTokenAccount;
        swapAndBridgeData.chainBridgeAccount = chainBridgeAccount;
        swapAndBridgeData.otherBridgeTokenAccount = otherBridgeTokenAccount;
        swapAndBridgeData.userAccount = new web3_js_1.PublicKey(account);
        swapAndBridgeData.destinationChainId = destinationChainId;
        swapAndBridgeData.mint = new web3_js_1.PublicKey(tokenAddress);
        swapAndBridgeData.config = configAccount;
        swapAndBridgeData.configAccountInfo = configAccountInfo;
        swapAndBridgeData.gasPrice = priceAccount;
        swapAndBridgeData.thisGasPrice = thisGasPriceAccount;
        swapAndBridgeData.message = message;
        if (extraGas) {
            swapAndBridgeData.extraGasInstruction = this.getExtraGasInstruction(extraGas, swapAndBridgeData.userAccount, configAccount);
        }
        return swapAndBridgeData;
    }
    async buildSwapAndBridgeAllbridgeTransaction(swapAndBridgeData) {
        const { bridge, vusdAmount, nonce, recipient, receiveToken, poolAccount, lockAccount, bridgeAuthority, userToken, bridgeTokenAccount, chainBridgeAccount, otherBridgeTokenAccount, userAccount, destinationChainId, mint, config, configAccountInfo, gasPrice, thisGasPrice, message, extraGasInstruction, } = swapAndBridgeData;
        const allbridgeMessengerProgramId = configAccountInfo.allbridgeMessengerProgramId;
        const messengerGasUsageAccount = await (0, accounts_1.getGasUsageAccount)(destinationChainId, allbridgeMessengerProgramId);
        const messengerConfig = await (0, accounts_1.getConfigAccount)(allbridgeMessengerProgramId);
        const sentMessageAccount = await (0, accounts_1.getSendMessageAccount)(message, allbridgeMessengerProgramId);
        const instructions = [];
        if (extraGasInstruction) {
            instructions.push(extraGasInstruction);
        }
        const transaction = await bridge.methods
            .swapAndBridge({
            vusdAmount,
            nonce,
            destinationChainId,
            recipient,
            receiveToken,
        })
            .accountsPartial({
            payer: userAccount,
            mint,
            user: userAccount,
            config,
            lock: lockAccount,
            pool: poolAccount,
            gasPrice,
            thisGasPrice,
            bridgeAuthority,
            userToken,
            bridgeToken: bridgeTokenAccount,
            chainBridge: chainBridgeAccount,
            messenger: allbridgeMessengerProgramId,
            messengerGasUsage: messengerGasUsageAccount,
            messengerConfig,
            sentMessageAccount,
            otherBridgeToken: otherBridgeTokenAccount,
        })
            .preInstructions([
            anchor_1.web3.ComputeBudgetProgram.setComputeUnitLimit({
                units: COMPUTE_UNIT_LIMIT,
            }),
        ])
            .postInstructions(instructions)
            .transaction();
        const connection = (0, anchor_provider_1.buildAnchorProvider)(this.solanaRpcUrl, userAccount.toString()).connection;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transaction.feePayer = userAccount;
        return await (0, utils_3.convertToVersionedTransaction)(transaction, connection, this.params.solanaLookUpTable);
    }
    async buildSwapAndBridgeWormholeTransaction(swapAndBridgeData) {
        const { bridge, vusdAmount, nonce, recipient, receiveToken, poolAccount, lockAccount, bridgeAuthority, userToken, bridgeTokenAccount, chainBridgeAccount, otherBridgeTokenAccount, userAccount, destinationChainId, mint, config, configAccountInfo, gasPrice, thisGasPrice, extraGasInstruction, } = swapAndBridgeData;
        const wormholeProgramId = this.params.wormholeMessengerProgramId;
        const [whBridgeAccount] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("Bridge")], new web3_js_1.PublicKey(wormholeProgramId));
        const [whFeeCollectorAccount] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("fee_collector")], new web3_js_1.PublicKey(wormholeProgramId));
        const [whSequenceAccount] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("Sequence"), bridgeAuthority.toBuffer()], new web3_js_1.PublicKey(wormholeProgramId));
        const messengerGasUsageAccount = await (0, accounts_1.getGasUsageAccount)(destinationChainId, configAccountInfo.wormholeMessengerProgramId);
        const wormholeMessengerConfigAccount = await (0, accounts_1.getConfigAccount)(configAccountInfo.wormholeMessengerProgramId);
        const messageAccount = web3_js_1.Keypair.generate();
        const provider = (0, anchor_provider_1.buildAnchorProvider)(this.solanaRpcUrl, userAccount.toString());
        const bridgeAccountInfo = await provider.connection.getAccountInfo(whBridgeAccount);
        if (bridgeAccountInfo == null) {
            throw new exceptions_1.SdkError("Cannot fetch wormhole bridge account info");
        }
        const feeLamports = new anchor_1.BN(bridgeAccountInfo.data.slice(16, 24), "le").toString();
        const feeInstruction = web3_js_1.SystemProgram.transfer({
            fromPubkey: userAccount,
            toPubkey: whFeeCollectorAccount,
            lamports: +feeLamports,
        });
        const instructions = [];
        if (extraGasInstruction) {
            instructions.push(extraGasInstruction);
        }
        const accounts = {
            payer: userAccount,
            mint,
            user: userAccount,
            config,
            lock: lockAccount,
            pool: poolAccount,
            gasPrice,
            thisGasPrice,
            bridgeAuthority,
            userToken,
            bridgeToken: bridgeTokenAccount,
            chainBridge: chainBridgeAccount,
            otherBridgeToken: otherBridgeTokenAccount,
            messengerGasUsage: messengerGasUsageAccount,
            wormholeProgram: wormholeProgramId,
            bridge: whBridgeAccount,
            message: messageAccount.publicKey,
            wormholeMessenger: configAccountInfo.wormholeMessengerProgramId,
            sequence: whSequenceAccount,
            feeCollector: whFeeCollectorAccount,
            wormholeMessengerConfig: wormholeMessengerConfigAccount,
            clock: anchor_1.web3.SYSVAR_CLOCK_PUBKEY,
        };
        const transaction = await bridge.methods
            .swapAndBridgeWormhole({
            vusdAmount,
            nonce: nonce,
            destinationChainId,
            recipient,
            receiveToken,
        })
            .accounts(accounts)
            .preInstructions([
            anchor_1.web3.ComputeBudgetProgram.setComputeUnitLimit({
                units: COMPUTE_UNIT_LIMIT,
            }),
            feeInstruction,
        ])
            .postInstructions(instructions)
            .signers([messageAccount])
            .transaction();
        transaction.recentBlockhash = (await provider.connection.getLatestBlockhash()).blockhash;
        transaction.feePayer = userAccount;
        return {
            transaction: await (0, utils_3.convertToVersionedTransaction)(transaction, provider.connection, this.params.solanaLookUpTable),
            messageAccount,
        };
    }
    async prepareSwapAndBridgeCctpData(txSendParams) {
        const { contractAddress, amount, fromAccountAddress, fromTokenAddress, toChainId, toAccountAddress, toTokenAddress, extraGas, } = txSendParams;
        const cctpAddress = contractAddress;
        if (!cctpAddress) {
            throw new exceptions_1.CCTPDoesNotSupportedError("Such route does not support CCTP protocol");
        }
        const CHAIN_ID = 4;
        const account = fromAccountAddress;
        const receiveTokenAddress = toTokenAddress;
        const receiverInBuffer32 = toAccountAddress;
        const provider = (0, anchor_provider_1.buildAnchorProvider)(this.solanaRpcUrl, account);
        const cctpBridge = new anchor_1.Program({ ...cctpBridgeIdl, address: cctpAddress }, provider);
        const mint = new web3_js_1.PublicKey(fromTokenAddress);
        const cctpBridgeAccount = await (0, accounts_1.getCctpBridgeAccount)(mint, cctpBridge.programId);
        const userAccount = new web3_js_1.PublicKey(account);
        const configAccountInfo = await cctpBridge.account.cctpBridge.fetch(cctpBridgeAccount);
        const swapAndBridgeData = {};
        swapAndBridgeData.cctpBridge = cctpBridge;
        swapAndBridgeData.cctpBridgeAccount = cctpBridgeAccount;
        swapAndBridgeData.cctpAddressAccount = new web3_js_1.PublicKey(cctpAddress);
        swapAndBridgeData.amount = new anchor_1.BN(amount);
        swapAndBridgeData.recipient = Array.from(receiverInBuffer32);
        swapAndBridgeData.receiveToken = Array.from(receiveTokenAddress);
        swapAndBridgeData.userToken = (0, accounts_1.getAssociatedAccount)(userAccount, mint);
        swapAndBridgeData.bridgeAuthority = await (0, accounts_1.getCctpAuthorityAccount)(cctpBridgeAccount, cctpBridge.programId);
        swapAndBridgeData.bridgeTokenAccount = await (0, accounts_1.getCctpBridgeTokenAccount)(mint, cctpBridge.programId);
        swapAndBridgeData.chainBridgeAccount = await (0, accounts_1.getChainBridgeAccount)(toChainId, cctpBridge.programId);
        swapAndBridgeData.userAccount = userAccount;
        swapAndBridgeData.destinationChainId = toChainId;
        swapAndBridgeData.mint = mint;
        swapAndBridgeData.gasPrice = await (0, accounts_1.getPriceAccount)(toChainId, configAccountInfo.gasOracleProgramId);
        swapAndBridgeData.thisGasPrice = await (0, accounts_1.getPriceAccount)(CHAIN_ID, configAccountInfo.gasOracleProgramId);
        swapAndBridgeData.provider = provider;
        if (extraGas) {
            swapAndBridgeData.extraGasInstruction = this.getExtraGasInstruction(extraGas, swapAndBridgeData.userAccount, cctpBridgeAccount);
        }
        return swapAndBridgeData;
    }
    async buildSwapAndBridgeCctpTransaction(destinationChainSymbol, swapAndBridgeData) {
        const { cctpBridge, cctpBridgeAccount, amount, recipient, receiveToken, bridgeAuthority, userToken, bridgeTokenAccount, chainBridgeAccount, userAccount, destinationChainId, mint, gasPrice, thisGasPrice, extraGasInstruction, provider, } = swapAndBridgeData;
        const domain = this.params.cctpParams.cctpDomains[destinationChainSymbol];
        const cctpTransmitterProgramIdAddress = this.params.cctpParams.cctpTransmitterProgramId;
        const cctpTokenMessengerMinterAddress = this.params.cctpParams.cctpTokenMessengerMinter;
        if (domain == undefined || !cctpTransmitterProgramIdAddress || !cctpTokenMessengerMinterAddress) {
            throw new exceptions_1.SdkError("CCTP is not configured");
        }
        const cctpTransmitterProgramId = new web3_js_1.PublicKey(cctpTransmitterProgramIdAddress);
        const cctpTokenMessengerMinter = new web3_js_1.PublicKey(cctpTokenMessengerMinterAddress);
        const { messageTransmitterAccount, tokenMessenger, tokenMessengerEventAuthority, tokenMinter, localToken, remoteTokenMessengerKey, authorityPda, } = (0, accounts_1.getCctpAccounts)(domain, mint, cctpTransmitterProgramId, cctpTokenMessengerMinter);
        const instructions = [];
        if (extraGasInstruction) {
            instructions.push(extraGasInstruction);
        }
        const messageSentEventDataKeypair = web3_js_1.Keypair.generate();
        const lockAccount = (0, accounts_1.getCctpLockAccount)(cctpBridge.programId, messageSentEventDataKeypair.publicKey);
        const tx = await cctpBridge.methods
            .bridge({
            amount,
            destinationChainId,
            recipient,
            receiveToken,
        })
            .accountsPartial({
            mint: mint,
            user: userAccount,
            cctpBridge: cctpBridgeAccount,
            payer: userAccount,
            messageSentEventData: messageSentEventDataKeypair.publicKey,
            lock: lockAccount,
            cctpMessenger: cctpTokenMessengerMinter,
            messageTransmitterProgram: cctpTransmitterProgramId,
            messageTransmitterAccount: messageTransmitterAccount,
            tokenMessenger: tokenMessenger,
            tokenMinter: tokenMinter,
            localToken: localToken,
            remoteTokenMessengerKey: remoteTokenMessengerKey,
            authorityPda: authorityPda,
            eventAuthority: tokenMessengerEventAuthority,
            bridgeToken: bridgeTokenAccount,
            gasPrice: gasPrice,
            thisGasPrice: thisGasPrice,
            chainBridge: chainBridgeAccount,
            userToken,
            bridgeAuthority: bridgeAuthority,
        })
            .preInstructions([
            anchor_1.web3.ComputeBudgetProgram.setComputeUnitLimit({
                units: 2000000,
            }),
        ])
            .postInstructions(instructions)
            .transaction();
        const connection = provider.connection;
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        tx.feePayer = userAccount;
        return {
            transaction: await (0, utils_3.convertToVersionedTransaction)(tx, connection, this.params.solanaLookUpTable),
            messageSentEventDataKeypair,
        };
    }
    async prepareSwapAndBridgeCctpV2Data(txSendParams) {
        const { contractAddress, amount, fromAccountAddress, fromTokenAddress, toChainId, toAccountAddress, toTokenAddress, extraGas, } = txSendParams;
        const cctpV2BridgeAddress = contractAddress;
        if (!cctpV2BridgeAddress) {
            throw new exceptions_1.CCTPDoesNotSupportedError("The route does not support CCTPv2 protocol");
        }
        const CHAIN_ID = 4;
        const account = fromAccountAddress;
        const receiveTokenAddress = toTokenAddress;
        const receiverInBuffer32 = toAccountAddress;
        const provider = (0, anchor_provider_1.buildAnchorProvider)(this.solanaRpcUrl, account);
        const cctpBridge = new anchor_1.Program({ ...cctpV2BridgeIdl, address: cctpV2BridgeAddress }, provider);
        const mint = new web3_js_1.PublicKey(fromTokenAddress);
        const cctpBridgeConfigAccount = (0, accounts_1.getCctpV2BridgeConfigAccount)(mint, cctpBridge.programId);
        const userAccount = new web3_js_1.PublicKey(account);
        const configAccountInfo = await cctpBridge.account.config.fetch(cctpBridgeConfigAccount);
        const swapAndBridgeData = {};
        swapAndBridgeData.cctpBridge = cctpBridge;
        swapAndBridgeData.amount = new anchor_1.BN(amount);
        swapAndBridgeData.recipient = Array.from(receiverInBuffer32);
        swapAndBridgeData.receiveToken = Array.from(receiveTokenAddress);
        swapAndBridgeData.userToken = (0, accounts_1.getAssociatedAccount)(userAccount, mint);
        swapAndBridgeData.chainBridgeAccount = await (0, accounts_1.getChainBridgeAccount)(toChainId, cctpBridge.programId);
        swapAndBridgeData.userAccount = userAccount;
        swapAndBridgeData.destinationChainId = toChainId;
        swapAndBridgeData.mint = mint;
        swapAndBridgeData.gasPrice = await (0, accounts_1.getPriceAccount)(toChainId, configAccountInfo.gasOracleProgramId);
        swapAndBridgeData.thisGasPrice = await (0, accounts_1.getPriceAccount)(CHAIN_ID, configAccountInfo.gasOracleProgramId);
        swapAndBridgeData.provider = provider;
        if (extraGas) {
            swapAndBridgeData.extraGasInstruction = this.getExtraGasInstruction(extraGas, swapAndBridgeData.userAccount, cctpBridgeConfigAccount);
        }
        return swapAndBridgeData;
    }
    async buildSwapAndBridgeCctpV2Transaction(destinationChainSymbol, swapAndBridgeData) {
        const { amount, cctpBridge: program, chainBridgeAccount, destinationChainId, extraGasInstruction, gasPrice, mint, provider, receiveToken, recipient, thisGasPrice, userAccount, userToken, } = swapAndBridgeData;
        const domain = this.params.cctpParams.cctpDomains[destinationChainSymbol];
        const cctpTransmitterProgramIdAddress = this.params.cctpParams.cctpV2TransmitterProgramId;
        const cctpTokenMessengerMinterAddress = this.params.cctpParams.cctpV2TokenMessengerMinter;
        if (domain == undefined || !cctpTransmitterProgramIdAddress || !cctpTokenMessengerMinterAddress) {
            throw new exceptions_1.SdkError("CCTPv2 is not configured");
        }
        const cctpTransmitterProgramId = new web3_js_1.PublicKey(cctpTransmitterProgramIdAddress);
        const cctpTokenMessengerMinter = new web3_js_1.PublicKey(cctpTokenMessengerMinterAddress);
        const { messageTransmitterAccount, tokenMessenger, tokenMessengerEventAuthority, tokenMinter, localToken, remoteTokenMessengerKey: remoteTokenMessenger, authorityPda, } = (0, accounts_1.getCctpAccounts)(domain, mint, cctpTransmitterProgramId, cctpTokenMessengerMinter);
        const instructions = [];
        if (extraGasInstruction) {
            instructions.push(extraGasInstruction);
        }
        const messageSentEventDataKeypair = web3_js_1.Keypair.generate();
        const tx = await program.methods
            .bridge({
            amount,
            destinationChainId,
            recipient,
            receiveToken,
        })
            .accounts({
            mint: mint,
            user: userAccount,
            messageSentEventData: messageSentEventDataKeypair.publicKey,
            tokenMessengerMinterProgram: cctpTokenMessengerMinter,
            messageTransmitterProgram: cctpTransmitterProgramId,
            messageTransmitterAccount: messageTransmitterAccount,
            tokenMessenger: tokenMessenger,
            tokenMinter: tokenMinter,
            localToken: localToken,
            remoteTokenMessenger: remoteTokenMessenger,
            authorityPda: authorityPda,
            eventAuthority: tokenMessengerEventAuthority,
            gasPrice: gasPrice,
            thisGasPrice: thisGasPrice,
            chainBridge: chainBridgeAccount,
            userToken,
        })
            .preInstructions([
            anchor_1.web3.ComputeBudgetProgram.setComputeUnitLimit({
                units: 2000000,
            }),
        ])
            .postInstructions(instructions)
            .transaction();
        const connection = provider.connection;
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        tx.feePayer = userAccount;
        return {
            transaction: await (0, utils_3.convertToVersionedTransaction)(tx, connection, this.params.solanaLookUpTable),
            messageSentEventDataKeypair,
        };
    }
}
exports.BridgeTxService = BridgeTxService;
//# sourceMappingURL=bridge-tx-service.js.map