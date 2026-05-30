"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMessage = verifyMessage;
const getAction_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/getAction.js");
const hashMessage_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/signature/hashMessage.js");
const verifyHash_js_1 = require("./verifyHash.js");
async function verifyMessage(client, { address, message, factory, factoryData, signature, ...callRequest }) {
    const hash = (0, hashMessage_js_1.hashMessage)(message);
    return (0, getAction_js_1.getAction)(client, verifyHash_js_1.verifyHash, 'verifyHash')({
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest,
    });
}
//# sourceMappingURL=verifyMessage.js.map