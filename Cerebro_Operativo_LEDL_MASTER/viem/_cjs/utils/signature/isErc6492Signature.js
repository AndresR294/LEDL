"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isErc6492Signature = isErc6492Signature;
const bytes_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/bytes.js");
const slice_js_1 = require("../data/slice.js");
function isErc6492Signature(signature) {
    return (0, slice_js_1.sliceHex)(signature, -32) === bytes_js_1.erc6492MagicBytes;
}
//# sourceMappingURL=isErc6492Signature.js.map