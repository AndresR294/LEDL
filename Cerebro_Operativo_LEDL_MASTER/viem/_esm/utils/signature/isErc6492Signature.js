import { erc6492MagicBytes } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/bytes.js';
import { sliceHex } from '../data/slice.js';
/** Whether or not the signature is an ERC-6492 formatted signature. */
export function isErc6492Signature(signature) {
    return sliceHex(signature, -32) === erc6492MagicBytes;
}
//# sourceMappingURL=isErc6492Signature.js.map