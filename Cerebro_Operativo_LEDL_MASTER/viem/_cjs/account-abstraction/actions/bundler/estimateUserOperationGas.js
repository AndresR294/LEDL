"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimateUserOperationGas = estimateUserOperationGas;
const parseAccount_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../accounts/utils/parseAccount.js");
const account_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../errors/account.js");
const getAction_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/getAction.js");
const stateOverride_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/stateOverride.js");
const getUserOperationError_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/errors/getUserOperationError.js");
const userOperationGas_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/formatters/userOperationGas.js");
const userOperationRequest_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/formatters/userOperationRequest.js");
const prepareUserOperation_js_1 = require("./prepareUserOperation.js");
async function estimateUserOperationGas(client, parameters) {
    const { account: account_ = client.account, entryPointAddress, stateOverride, } = parameters;
    if (!account_ && !parameters.sender)
        throw new account_js_1.AccountNotFoundError();
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    const rpcStateOverride = (0, stateOverride_js_1.serializeStateOverride)(stateOverride);
    const request = account
        ? await (0, getAction_js_1.getAction)(client, prepareUserOperation_js_1.prepareUserOperation, 'prepareUserOperation')({
            ...parameters,
            parameters: [
                'authorization',
                'factory',
                'nonce',
                'paymaster',
                'signature',
            ],
        })
        : parameters;
    try {
        const params = [
            (0, userOperationRequest_js_1.formatUserOperationRequest)(request),
            (entryPointAddress ?? account?.entryPoint?.address),
        ];
        const result = await client.request({
            method: 'eth_estimateUserOperationGas',
            params: rpcStateOverride ? [...params, rpcStateOverride] : [...params],
        });
        return (0, userOperationGas_js_1.formatUserOperationGas)(result);
    }
    catch (error) {
        const calls = parameters.calls;
        throw (0, getUserOperationError_js_1.getUserOperationError)(error, {
            ...request,
            ...(calls ? { calls } : {}),
        });
    }
}
//# sourceMappingURL=estimateUserOperationGas.js.map