"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallError = getCallError;
const contract_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/contract.js");
const node_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/node.js");
const getNodeError_js_1 = require("./getNodeError.js");
function getCallError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError)
            return err;
        return cause;
    })();
    return new contract_js_1.CallExecutionError(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getCallError.js.map