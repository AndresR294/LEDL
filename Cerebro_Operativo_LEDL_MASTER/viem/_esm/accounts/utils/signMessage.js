import { hashMessage, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/signature/hashMessage.js';
import { sign } from './sign.js';
/**
 * @description Calculates an Ethereum-specific signature in [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191):
 * `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`.
 *
 * @returns The signature.
 */
export async function signMessage({ message, privateKey, }) {
    return await sign({ hash: hashMessage(message), privateKey, to: 'hex' });
}
//# sourceMappingURL=signMessage.js.map