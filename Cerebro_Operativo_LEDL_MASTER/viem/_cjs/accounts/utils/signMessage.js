"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signMessage = signMessage;
const hashMessage_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/signature/hashMessage.js");
const sign_js_1 = require("./sign.js");
async function signMessage({ message, privateKey, }) {
    return await (0, sign_js_1.sign)({ hash: (0, hashMessage_js_1.hashMessage)(message), privateKey, to: 'hex' });
}
//# sourceMappingURL=signMessage.js.map