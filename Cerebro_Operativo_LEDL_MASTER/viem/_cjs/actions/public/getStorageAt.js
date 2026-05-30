"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStorageAt = getStorageAt;
const formatBlockParameter_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/block/formatBlockParameter.js");
async function getStorageAt(client, { address, blockHash, blockNumber, blockTag = 'latest', requireCanonical, slot, }) {
    const block = (0, formatBlockParameter_js_1.formatBlockParameter)({
        blockHash,
        blockNumber,
        blockTag,
        requireCanonical,
    });
    const data = await client.request({
        method: 'eth_getStorageAt',
        params: [address, slot, block],
    });
    return data;
}
//# sourceMappingURL=getStorageAt.js.map