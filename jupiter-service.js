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
exports.JupiterService = void 0;
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const axios_1 = __importStar(require("axios"));
const big_js_1 = require("big.js");
const chains_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../chains");
const exceptions_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../exceptions");
const models_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../models");
const calculation_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/calculation");
const compute_budget_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/sol/compute-budget");
const JUP_ADD_INDEX = 1.1;
const JUP_SLIPPAGE_INDEX = 1.01;
class JupiterService {
    api;
    jupiterUrl;
    apiKeyHeader;
    maxAccounts;
    constructor(api, jupiterParams) {
        this.api = api;
        this.jupiterUrl = jupiterParams.jupiterUrl.replace(/\/$/, ""); // trim last "/" if exist
        this.apiKeyHeader = jupiterParams.jupiterApiKeyHeader;
        this.maxAccounts = jupiterParams.jupiterMaxAccounts;
    }
    async buildJupAndUpdateTxSendParams(params, solTxSendParams) {
        const txFeeParams = (0, compute_budget_1.normalizeSolanaTxFeeParams)(params.txFeeParams?.solana);
        try {
            const { tx, solTxSendUpdatedParams } = await this.processJup(solTxSendParams, params, txFeeParams, true);
            return { jupTx: tx, solTxSendParams: { ...solTxSendParams, ...solTxSendUpdatedParams } };
        }
        catch (error) {
            if (error instanceof exceptions_1.AmountNotEnoughError) {
                throw error;
            }
            try {
                const { tx, solTxSendUpdatedParams } = await this.processJup(solTxSendParams, params, txFeeParams, false);
                return { jupTx: tx, solTxSendParams: { ...solTxSendParams, ...solTxSendUpdatedParams } };
            }
            catch (e) {
                if (e instanceof exceptions_1.SdkRootError) {
                    throw e;
                }
                if (e instanceof Error && e.message) {
                    throw new exceptions_1.JupiterError(`Some error occurred during creation Jupiter swap transaction. ${e.message}`);
                }
                throw new exceptions_1.JupiterError("Some error occurred during creation Jupiter swap transaction");
            }
        }
    }
    async processJup(solTxSendParams, params, txFeeParams, exactOut) {
        const { fee, extraGas, gasFeePaymentMethod, sourceNativeTokenPrice } = await this.convertStableCoinFeeAndExtraGasToNativeCurrency(params.sourceToken, solTxSendParams);
        let amountToProcess = exactOut ? (0, big_js_1.Big)(fee) : (0, big_js_1.Big)(solTxSendParams.fee);
        if (extraGas) {
            if (exactOut) {
                amountToProcess = amountToProcess.plus(extraGas);
            }
            else if (solTxSendParams.extraGas) {
                amountToProcess = amountToProcess.plus(solTxSendParams.extraGas);
            }
        }
        if (txFeeParams?.payTxFeeWithStablecoinSwap) {
            const feeTx = 5000;
            const txAccountCreation = 2296800 + 1224960;
            const totalFee = feeTx + txAccountCreation;
            if (exactOut) {
                amountToProcess = amountToProcess.plus(totalFee);
            }
            else {
                if (!sourceNativeTokenPrice) {
                    throw new exceptions_1.SdkError("sourceNativeTokenPrice is undefined.");
                }
                const totalFeeInStable = (0, big_js_1.Big)(totalFee)
                    .mul(sourceNativeTokenPrice)
                    .div((0, big_js_1.Big)(10).pow(chains_1.Chains.getChainDecimalsByType(models_1.ChainType.SOLANA) - params.sourceToken.decimals))
                    .toFixed(0);
                amountToProcess = amountToProcess.plus(totalFeeInStable);
            }
        }
        if (!exactOut) {
            amountToProcess = amountToProcess.mul(JUP_ADD_INDEX);
        }
        const { tx, amountIn } = await this.getJupiterSwapTx(params.fromAccountAddress, params.sourceToken.tokenAddress, amountToProcess.toFixed(0), exactOut);
        let newAmount;
        if (exactOut) {
            if (!amountIn) {
                throw new exceptions_1.JupiterError("Cannot get inAmount");
            }
            newAmount = (0, big_js_1.Big)(solTxSendParams.amount)
                .minus((0, big_js_1.Big)(amountIn).mul(JUP_SLIPPAGE_INDEX).toFixed(0, big_js_1.Big.roundUp))
                .toFixed(0);
        }
        else {
            newAmount = (0, big_js_1.Big)(solTxSendParams.amount).minus(amountToProcess).toFixed(0);
        }
        if ((0, big_js_1.Big)(newAmount).lte(0)) {
            throw new exceptions_1.AmountNotEnoughError(`Amount not enough to pay fee, ${(0, calculation_1.convertIntAmountToFloat)((0, big_js_1.Big)(newAmount).minus(1).neg(), params.sourceToken.decimals).toFixed()} ${params.sourceToken.symbol} is missing`);
        }
        return {
            tx: tx,
            solTxSendUpdatedParams: {
                amount: newAmount,
                fee: fee,
                extraGas: extraGas,
                gasFeePaymentMethod: gasFeePaymentMethod,
            },
        };
    }
    async convertStableCoinFeeAndExtraGasToNativeCurrency(sourceToken, solTxSendParams) {
        if (solTxSendParams.gasFeePaymentMethod == models_1.FeePaymentMethod.WITH_STABLECOIN) {
            const sourceNativeTokenPrice = (await this.api.getReceiveTransactionCost({
                sourceChainId: solTxSendParams.fromChainId,
                destinationChainId: solTxSendParams.toChainId,
                messenger: solTxSendParams.messenger,
                sourceToken: sourceToken.tokenAddress,
            })).sourceNativeTokenPrice;
            const fee = (0, big_js_1.Big)(solTxSendParams.fee)
                .div(sourceNativeTokenPrice)
                .mul((0, big_js_1.Big)(10).pow(chains_1.Chains.getChainDecimalsByType(models_1.ChainType.SOLANA) - sourceToken.decimals))
                .toFixed(0);
            let extraGas;
            if (solTxSendParams.extraGas) {
                extraGas = (0, big_js_1.Big)(solTxSendParams.extraGas)
                    .div(sourceNativeTokenPrice)
                    .mul((0, big_js_1.Big)(10).pow(chains_1.Chains.getChainDecimalsByType(models_1.ChainType.SOLANA) - sourceToken.decimals))
                    .toFixed(0);
            }
            return { fee, extraGas, gasFeePaymentMethod: models_1.FeePaymentMethod.WITH_NATIVE_CURRENCY, sourceNativeTokenPrice };
        }
        return {
            fee: solTxSendParams.fee,
            extraGas: solTxSendParams.extraGas,
            gasFeePaymentMethod: models_1.FeePaymentMethod.WITH_NATIVE_CURRENCY,
        };
    }
    async getJupiterSwapTx(userAddress, stableTokenAddress, amount, exactOut) {
        let quoteResponse;
        try {
            const swapMode = exactOut ? "ExactOut" : "ExactIn";
            let url = `${this.jupiterUrl}/quote?inputMint=${stableTokenAddress}&outputMint=${spl_token_1.NATIVE_MINT.toString()}&amount=${amount}&swapMode=${swapMode}&slippageBps=100&onlyDirectRoutes=true`;
            if (this.maxAccounts) {
                url += `&maxAccounts=${this.maxAccounts}`;
            }
            quoteResponse = await axios_1.default.get(url, {
                headers: this.apiKeyHeader ? { "x-api-key": this.apiKeyHeader } : undefined,
            });
        }
        catch (err) {
            if (err instanceof axios_1.AxiosError && err.response && err.response.data && err.response.data.error) {
                throw new exceptions_1.JupiterError(err.response.data.error);
            }
            throw new exceptions_1.JupiterError("Cannot get route");
        }
        let inAmount;
        if (exactOut && quoteResponse?.data?.inAmount) {
            inAmount = quoteResponse.data.inAmount;
        }
        else if (exactOut) {
            throw new exceptions_1.JupiterError("Cannot get inAmount");
        }
        let transactionResponse;
        try {
            transactionResponse = await axios_1.default.post(`${this.jupiterUrl}/swap`, {
                quoteResponse: quoteResponse.data,
                userPublicKey: userAddress,
                wrapAndUnwrapSol: true,
            }, {
                headers: this.apiKeyHeader ? { "x-api-key": this.apiKeyHeader } : undefined,
            });
        }
        catch (err) {
            if (err instanceof axios_1.AxiosError && err.response && err.response.data && err.response.data.error) {
                throw new exceptions_1.JupiterError(err.response.data.error);
            }
            throw new exceptions_1.JupiterError("Cannot get swap transaction");
        }
        let swapTransaction;
        if (transactionResponse?.data?.swapTransaction) {
            swapTransaction = transactionResponse.data.swapTransaction;
        }
        else {
            throw new exceptions_1.JupiterError("Cannot get swap transaction");
        }
        const swapTransactionBuf = Buffer.from(swapTransaction, "base64");
        const tx = web3_js_1.VersionedTransaction.deserialize(swapTransactionBuf);
        return exactOut ? { tx, amountIn: inAmount } : { tx };
    }
}
exports.JupiterService = JupiterService;
//# sourceMappingURL=jupiter-service.js.map