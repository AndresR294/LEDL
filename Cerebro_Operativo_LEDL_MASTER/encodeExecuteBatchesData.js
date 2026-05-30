"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeExecuteBatchesData = encodeExecuteBatchesData;
const AbiParameters = require("ox/AbiParameters");
const encodeFunctionData_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/abi/encodeFunctionData.js");
const constants_js_1 = require("../constants.js");
const encodeCalls_js_1 = require("./encodeCalls.js");
function encodeExecuteBatchesData(parameters) {
    const { batches } = parameters;
    const encodedBatches = AbiParameters.encode(AbiParameters.from('bytes[]'), [
        batches.map((b) => {
            const batch = b;
            return (0, encodeCalls_js_1.encodeCalls)(batch.calls, batch.opData);
        }),
    ]);
    return (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi: constants_js_1.abi,
        functionName: 'execute',
        args: [constants_js_1.executionMode.batchOfBatches, encodedBatches],
    });
}
//# sourceMappingURL=encodeExecuteBatchesData.js.map