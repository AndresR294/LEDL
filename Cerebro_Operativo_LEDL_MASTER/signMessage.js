"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signMessage = signMessage;
const parseAccount_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../accounts/utils/parseAccount.js");
const getEip712Domain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/public/getEip712Domain.js");
const signTypedData_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/wallet/signTypedData.js");
const account_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../errors/account.js");
const getAction_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/getAction.js");
const toPrefixedMessage_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/signature/toPrefixedMessage.js");
async function signMessage(client, parameters) {
    const { account: account_ = client.account, factory, factoryData, message, verifier, } = parameters;
    if (!account_)
        throw new account_js_1.AccountNotFoundError({
            docsPath: '/experimental/erc7739/signMessage',
        });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const { salt: _, ...domain } = await (async () => {
        if (parameters.verifierDomain)
            return parameters.verifierDomain;
        const { domain } = await (0, getAction_js_1.getAction)(client, getEip712Domain_js_1.getEip712Domain, 'getEip712Domain')({
            address: verifier,
            factory,
            factoryData,
        });
        return domain;
    })();
    return (0, getAction_js_1.getAction)(client, signTypedData_js_1.signTypedData, 'signTypedData')({
        account,
        domain,
        types: {
            PersonalSign: [{ name: 'prefixed', type: 'bytes' }],
        },
        primaryType: 'PersonalSign',
        message: {
            prefixed: (0, toPrefixedMessage_js_1.toPrefixedMessage)(message),
        },
    });
}
//# sourceMappingURL=signMessage.js.map