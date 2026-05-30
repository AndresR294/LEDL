"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainId = getChainId;
const fromHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/fromHex.js");
async function getChainId(client) {
    const chainIdHex = await client.request({
        method: 'eth_chainId',
    }, { dedupe: true });
    return (0, fromHex_js_1.hexToNumber)(chainIdHex);
}
//# sourceMappingURL=getChainId.js.map