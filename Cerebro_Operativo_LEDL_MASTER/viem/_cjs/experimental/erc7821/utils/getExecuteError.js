"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExecuteError = getExecuteError;
const AbiError = require("ox/AbiError");
const decodeErrorResult_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/abi/decodeErrorResult.js");
const getContractError_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/errors/getContractError.js");
const errors_js_1 = require("../errors.js");
function getExecuteError(e, parameters) {
    const error = e.walk((e) => 'data' in e);
    if (!error?.data)
        return e;
    if (error.data ===
        AbiError.getSelector(AbiError.from('error FnSelectorNotRecognized()')))
        return new errors_js_1.FunctionSelectorNotRecognizedError();
    let matched = null;
    for (const c of parameters.calls) {
        const call = c;
        if (!call.abi)
            continue;
        try {
            const matches = Boolean((0, decodeErrorResult_js_1.decodeErrorResult)({
                abi: call.abi,
                data: error.data,
            }));
            if (!matches)
                continue;
            matched = call;
        }
        catch { }
    }
    if (matched)
        return (0, getContractError_js_1.getContractError)(error, {
            abi: matched.abi,
            address: matched.to,
            args: matched.args,
            functionName: matched.functionName,
        });
    return e;
}
//# sourceMappingURL=getExecuteError.js.map