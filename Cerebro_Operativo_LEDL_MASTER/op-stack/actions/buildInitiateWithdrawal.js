"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildInitiateWithdrawal = buildInitiateWithdrawal;
const parseAccount_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/accounts/utils/parseAccount.js");
const prepareTransactionRequest_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js");
async function buildInitiateWithdrawal(client, args) {
    const { account: account_, chain = client.chain, gas, data, to, value } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    const request = await (0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, {
        account: null,
        chain,
        gas,
        data,
        parameters: ['gas'],
        to,
        value,
    });
    return {
        account,
        request: {
            data: request.data,
            gas: request.gas,
            to: request.to,
            value: request.value,
        },
    };
}
//# sourceMappingURL=buildInitiateWithdrawal.js.map