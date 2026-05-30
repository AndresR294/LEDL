import { size } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/data/size.js';
import { slice } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/data/slice.js';
import { hexToBigInt } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/fromHex.js';
export function opaqueDataToDepositData(opaqueData) {
    let offset = 0;
    const mint = slice(opaqueData, offset, offset + 32);
    offset += 32;
    const value = slice(opaqueData, offset, offset + 32);
    offset += 32;
    const gas = slice(opaqueData, offset, offset + 8);
    offset += 8;
    const isCreation = BigInt(slice(opaqueData, offset, offset + 1)) === 1n;
    offset += 1;
    const data = offset > size(opaqueData) - 1
        ? '0x'
        : slice(opaqueData, offset, opaqueData.length);
    return {
        mint: hexToBigInt(mint),
        value: hexToBigInt(value),
        gas: hexToBigInt(gas),
        isCreation,
        data,
    };
}
//# sourceMappingURL=opaqueDataToDepositData.js.map