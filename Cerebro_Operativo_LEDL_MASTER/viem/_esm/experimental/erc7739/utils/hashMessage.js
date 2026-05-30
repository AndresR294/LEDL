import { hashTypedData } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/index.js';
import { toPrefixedMessage, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/signature/toPrefixedMessage.js';
/**
 * Generates a signable hash for a ERC-7739 personal sign message.
 *
 * @example
 * ```ts
 * const hash = hashMessage({
 *   message: 'hello world',
 *   verifierDomain: {
 *     name: 'Smart Account',
 *     version: '1',
 *     verifyingContract: '0x1234567890abcdef1234567890abcdef12345678',
 *     chainId: 1,
 *   },
 * })
 * ```
 */
export function hashMessage(parameters) {
    const { message, verifierDomain: { salt: _, ...domain }, } = parameters;
    return hashTypedData({
        domain,
        types: {
            PersonalSign: [{ name: 'prefixed', type: 'bytes' }],
        },
        primaryType: 'PersonalSign',
        message: {
            prefixed: toPrefixedMessage(message),
        },
    });
}
//# sourceMappingURL=hashMessage.js.map