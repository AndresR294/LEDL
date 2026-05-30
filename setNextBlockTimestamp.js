"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNextBlockTimestamp = setNextBlockTimestamp;
const toHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js");
async function setNextBlockTimestamp(client, { timestamp }) {
    await client.request({
        method: 'evm_setNextBlockTimestamp',
        params: [(0, toHex_js_1.numberToHex)(timestamp)],
    });
}
//# sourceMappingURL=setNextBlockTimestamp.js.map