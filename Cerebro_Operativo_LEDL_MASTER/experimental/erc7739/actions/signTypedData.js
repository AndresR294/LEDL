"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTypedData = signTypedData;
const parseAccount_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../accounts/utils/parseAccount.js");
const getEip712Domain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/public/getEip712Domain.js");
const signTypedData_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/wallet/signTypedData.js");
const account_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../errors/account.js");
const getAction_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/getAction.js");
const wrapTypedDataSignature_js_1 = require("../utils/wrapTypedDataSignature.js");
async function signTypedData(client, parameters) {
    const { account: account_ = client.account, domain, factory, factoryData, message, primaryType, types, verifier, } = parameters;
    if (!account_)
        throw new account_js_1.AccountNotFoundError({
            docsPath: '/experimental/erc7739/signTypedData',
        });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const { domain: verifierDomain } = await (async () => {
        if (parameters.verifierDomain)
            return {
                domain: parameters.verifierDomain,
            };
        return (0, getAction_js_1.getAction)(client, getEip712Domain_js_1.getEip712Domain, 'getEip712Domain')({
            address: verifier,
            factory,
            factoryData,
        });
    })();
    const signature = await (0, getAction_js_1.getAction)(client, signTypedData_js_1.signTypedData, 'signTypedData')({
        account,
        domain,
        types: {
            ...types,
            TypedDataSign: [
                { name: 'contents', type: primaryType },
                { name: 'name', type: 'string' },
                { name: 'version', type: 'string' },
                { name: 'chainId', type: 'uint256' },
                { name: 'verifyingContract', type: 'address' },
                { name: 'salt', type: 'bytes32' },
            ],
        },
        primaryType: 'TypedDataSign',
        message: {
            contents: message,
            ...verifierDomain,
        },
    });
    return (0, wrapTypedDataSignature_js_1.wrapTypedDataSignature)({
        domain,
        message,
        primaryType,
        signature,
        types,
    });
}
//# sourceMappingURL=signTypedData.js.map