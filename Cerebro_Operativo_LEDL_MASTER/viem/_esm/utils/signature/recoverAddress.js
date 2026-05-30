import { publicKeyToAddress } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js';
import { recoverPublicKey } from './recoverPublicKey.js';
export async function recoverAddress({ hash, signature, }) {
    return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}
//# sourceMappingURL=recoverAddress.js.map