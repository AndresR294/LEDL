import { hexToBigInt } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/fromHex.js';
export async function getGasPerPubdata(client) {
    const result = await client.request({
        method: 'zks_gasPerPubdata',
    }, {
        dedupe: true,
    });
    return hexToBigInt(result);
}
//# sourceMappingURL=getGasPerPubdata.js.map