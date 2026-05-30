import { secp256k1 } from '@noble/curves/secp256k1';
import { bytesToHex, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js';
import { publicKeyToAddress, } from './publicKeyToAddress.js';
/**
 * @description Converts an ECDSA private key to an address.
 *
 * @param privateKey The private key to convert.
 *
 * @returns The address.
 */
export function privateKeyToAddress(privateKey) {
    const publicKey = bytesToHex(secp256k1.getPublicKey(privateKey.slice(2), false));
    return publicKeyToAddress(publicKey);
}
//# sourceMappingURL=privateKeyToAddress.js.map