import { InvalidAddressError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/address.js';
import { isAddress } from './isAddress.js';
export function isAddressEqual(a, b) {
    if (!isAddress(a, { strict: false }))
        throw new InvalidAddressError({ address: a });
    if (!isAddress(b, { strict: false }))
        throw new InvalidAddressError({ address: b });
    return a.toLowerCase() === b.toLowerCase();
}
//# sourceMappingURL=isAddressEqual.js.map