"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tupleCV = void 0;
const constants_1 = require("../constants");
const utils_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils");
function tupleCV(data) {
    for (const key in data) {
        if (!(0, utils_1.isClarityName)(key)) {
            throw new Error(`"${key}" is not a valid Clarity name`);
        }
    }
    return { type: constants_1.ClarityType.Tuple, value: data };
}
exports.tupleCV = tupleCV;
//# sourceMappingURL=tupleCV.js.map