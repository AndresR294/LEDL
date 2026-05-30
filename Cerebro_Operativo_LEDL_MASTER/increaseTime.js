"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.increaseTime = increaseTime;
const toHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js");
async function increaseTime(client, { seconds }) {
    return await client.request({
        method: 'evm_increaseTime',
        params: [(0, toHex_js_1.numberToHex)(seconds)],
    });
}
//# sourceMappingURL=increaseTime.js.map