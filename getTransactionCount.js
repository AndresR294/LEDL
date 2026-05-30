"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionCount = getTransactionCount;
const fromHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/fromHex.js");
const toHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js");
async function getTransactionCount(client, { address, blockTag = 'latest', blockNumber }) {
    const count = await client.request({
        method: 'eth_getTransactionCount',
        params: [
            address,
            typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : blockTag,
        ],
    }, {
        dedupe: Boolean(blockNumber),
    });
    return (0, fromHex_js_1.hexToNumber)(count);
}
//# sourceMappingURL=getTransactionCount.js.map