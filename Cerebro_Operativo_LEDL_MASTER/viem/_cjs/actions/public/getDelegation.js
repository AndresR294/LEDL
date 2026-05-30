"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDelegation = getDelegation;
const getAddress_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/address/getAddress.js");
const size_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/data/size.js");
const slice_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/data/slice.js");
const getCode_js_1 = require("./getCode.js");
async function getDelegation(client, { address, blockNumber, blockTag = 'latest' }) {
    const code = await (0, getCode_js_1.getCode)(client, {
        address,
        ...(blockNumber !== undefined ? { blockNumber } : { blockTag }),
    });
    if (!code)
        return undefined;
    if ((0, size_js_1.size)(code) !== 23)
        return undefined;
    if (!code.startsWith('0xef0100'))
        return undefined;
    return (0, getAddress_js_1.getAddress)((0, slice_js_1.slice)(code, 3, 23));
}
//# sourceMappingURL=getDelegation.js.map