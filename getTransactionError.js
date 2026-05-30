"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionError = getTransactionError;
const node_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/node.js");
const transaction_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/transaction.js");
const getNodeError_js_1 = require("./getNodeError.js");
function getTransactionError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError)
            return err;
        return cause;
    })();
    return new transaction_js_1.TransactionExecutionError(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getTransactionError.js.map