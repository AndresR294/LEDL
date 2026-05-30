"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSiweNonce = generateSiweNonce;
const uid_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/uid.js");
function generateSiweNonce() {
    return (0, uid_js_1.uid)(96);
}
//# sourceMappingURL=generateSiweNonce.js.map