"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPerPubdata = getGasPerPubdata;
const fromHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/fromHex.js");
async function getGasPerPubdata(client) {
    const result = await client.request({
        method: 'zks_gasPerPubdata',
    }, {
        dedupe: true,
    });
    return (0, fromHex_js_1.hexToBigInt)(result);
}
//# sourceMappingURL=getGasPerPubdata.js.map