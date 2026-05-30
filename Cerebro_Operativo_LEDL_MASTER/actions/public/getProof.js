"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProof = getProof;
const formatBlockParameter_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/block/formatBlockParameter.js");
const proof_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/formatters/proof.js");
async function getProof(client, { address, blockHash, blockNumber, blockTag = 'latest', requireCanonical, storageKeys, }) {
    const block = (0, formatBlockParameter_js_1.formatBlockParameter)({
        blockHash,
        blockNumber,
        blockTag,
        requireCanonical,
    });
    const proof = await client.request({
        method: 'eth_getProof',
        params: [address, storageKeys, block],
    });
    return (0, proof_js_1.formatProof)(proof);
}
//# sourceMappingURL=getProof.js.map