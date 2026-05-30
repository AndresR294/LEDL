import { solidityError, solidityPanic } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/solidity.js';
import { AbiDecodingZeroDataError, AbiErrorSignatureNotFoundError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/abi.js';
import { slice } from '../data/slice.js';
import { toFunctionSelector, } from '../hash/toFunctionSelector.js';
import { decodeAbiParameters, } from './decodeAbiParameters.js';
import { formatAbiItem } from './formatAbiItem.js';
export function decodeErrorResult(parameters) {
    const { abi, data, cause } = parameters;
    const signature = slice(data, 0, 4);
    if (signature === '0x')
        throw new AbiDecodingZeroDataError({ cause });
    const abi_ = [...(abi || []), solidityError, solidityPanic];
    const abiItem = abi_.find((x) => x.type === 'error' && signature === toFunctionSelector(formatAbiItem(x)));
    if (!abiItem)
        throw new AbiErrorSignatureNotFoundError(signature, {
            docsPath: '/docs/contract/decodeErrorResult',
            cause,
        });
    return {
        abiItem,
        args: 'inputs' in abiItem && abiItem.inputs && abiItem.inputs.length > 0
            ? decodeAbiParameters(abiItem.inputs, slice(data, 4))
            : undefined,
        errorName: abiItem.name,
    };
}
//# sourceMappingURL=decodeErrorResult.js.map