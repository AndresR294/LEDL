import { hashTypedData, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/signature/hashTypedData.js';
import { sign } from './sign.js';
/**
 * @description Signs typed data and calculates an Ethereum-specific signature in [https://eips.ethereum.org/EIPS/eip-712](https://eips.ethereum.org/EIPS/eip-712):
 * `sign(keccak256("\x19\x01" ‖ domainSeparator ‖ hashStruct(message)))`.
 *
 * @returns The signature.
 */
export async function signTypedData(parameters) {
    const { privateKey, ...typedData } = parameters;
    return await sign({
        hash: hashTypedData(typedData),
        privateKey,
        to: 'hex',
    });
}
//# sourceMappingURL=signTypedData.js.map