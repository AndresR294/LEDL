"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getL1BatchBlockRange = getL1BatchBlockRange;
const fromHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/fromHex.js");
async function getL1BatchBlockRange(client, parameters) {
    const [number_1, number_2] = await client.request({
        method: 'zks_getL1BatchBlockRange',
        params: [parameters.l1BatchNumber],
    });
    return [(0, fromHex_js_1.hexToNumber)(number_1), (0, fromHex_js_1.hexToNumber)(number_2)];
}
//# sourceMappingURL=getL1BatchBlockRange.js.map