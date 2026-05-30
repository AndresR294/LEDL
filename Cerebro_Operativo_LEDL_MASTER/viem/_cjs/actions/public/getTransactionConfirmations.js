"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionConfirmations = getTransactionConfirmations;
const getAction_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/getAction.js");
const getBlockNumber_js_1 = require("./getBlockNumber.js");
const getTransaction_js_1 = require("./getTransaction.js");
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
    const [blockNumber, transaction] = await Promise.all([
        (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({}),
        hash
            ? (0, getAction_js_1.getAction)(client, getTransaction_js_1.getTransaction, 'getTransaction')({ hash })
            : undefined,
    ]);
    const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
    if (!transactionBlockNumber)
        return 0n;
    return blockNumber - transactionBlockNumber + 1n;
}
//# sourceMappingURL=getTransactionConfirmations.js.map