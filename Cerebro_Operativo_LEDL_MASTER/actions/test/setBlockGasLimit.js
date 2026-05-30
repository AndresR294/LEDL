"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBlockGasLimit = setBlockGasLimit;
const toHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js");
async function setBlockGasLimit(client, { gasLimit }) {
    await client.request({
        method: 'evm_setBlockGasLimit',
        params: [(0, toHex_js_1.numberToHex)(gasLimit)],
    });
}
//# sourceMappingURL=setBlockGasLimit.js.map