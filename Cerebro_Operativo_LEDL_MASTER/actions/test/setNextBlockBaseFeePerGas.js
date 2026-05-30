"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNextBlockBaseFeePerGas = setNextBlockBaseFeePerGas;
const toHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js");
async function setNextBlockBaseFeePerGas(client, { baseFeePerGas }) {
    await client.request({
        method: `${client.mode}_setNextBlockBaseFeePerGas`,
        params: [(0, toHex_js_1.numberToHex)(baseFeePerGas)],
    });
}
//# sourceMappingURL=setNextBlockBaseFeePerGas.js.map