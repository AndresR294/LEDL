"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultRawYieldTransactionBuilder = void 0;
const calculation_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/calculation");
const constants_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/calculation/constants");
const utils_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/utils");
const index_1 = require("./index");
class DefaultRawYieldTransactionBuilder {
    api;
    nodeRpcUrlsConfig;
    params;
    tokenService;
    constructor(api, nodeRpcUrlsConfig, params, tokenService) {
        this.api = api;
        this.nodeRpcUrlsConfig = nodeRpcUrlsConfig;
        this.params = params;
        this.tokenService = tokenService;
    }
    async approve(approveData, provider) {
        return this.tokenService.buildRawTransactionApprove({
            ...approveData,
            spender: approveData.token.yieldAddress,
        }, provider);
    }
    async deposit(params, provider) {
        (0, utils_1.validateAmountGtZero)(params.amount);
        (0, utils_1.validateAmountDecimals)("amount", params.amount, params.token.decimals);
        (0, utils_1.validateAmountGtZero)(params.minVirtualAmount);
        (0, utils_1.validateAmountDecimals)("minVirtualAmount", params.minVirtualAmount, 3);
        params.amount = (0, calculation_1.convertFloatAmountToInt)(params.amount, params.token.decimals).toFixed();
        params.minVirtualAmount = (0, calculation_1.convertFloatAmountToInt)(params.minVirtualAmount, 3).toFixed();
        return (0, index_1.getChainYieldService)(params.token.chainSymbol, this.api, this.nodeRpcUrlsConfig, params.owner, provider).buildRawTransactionDeposit(params);
    }
    async withdraw(params, provider) {
        (0, utils_1.validateAmountGtZero)(params.amount);
        (0, utils_1.validateAmountDecimals)("amount", params.amount, constants_1.SYSTEM_PRECISION);
        params.amount = (0, calculation_1.convertFloatAmountToInt)(params.amount, constants_1.SYSTEM_PRECISION).toFixed();
        return (0, index_1.getChainYieldService)(params.token.chainSymbol, this.api, this.nodeRpcUrlsConfig, params.owner, provider).buildRawTransactionWithdraw(params);
    }
}
exports.DefaultRawYieldTransactionBuilder = DefaultRawYieldTransactionBuilder;
//# sourceMappingURL=raw-yield-transaction-builder.js.map