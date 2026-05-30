"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTransaction = signTransaction;
const keccak256_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/hash/keccak256.js");
const serializeTransaction_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js");
const sign_js_1 = require("./sign.js");
async function signTransaction(parameters) {
    const { privateKey, transaction, serializer = serializeTransaction_js_1.serializeTransaction, } = parameters;
    const signableTransaction = (() => {
        if (transaction.type === 'eip4844')
            return {
                ...transaction,
                sidecars: false,
            };
        return transaction;
    })();
    const signature = await (0, sign_js_1.sign)({
        hash: (0, keccak256_js_1.keccak256)(await serializer(signableTransaction)),
        privateKey,
    });
    return (await serializer(transaction, signature));
}
//# sourceMappingURL=signTransaction.js.map