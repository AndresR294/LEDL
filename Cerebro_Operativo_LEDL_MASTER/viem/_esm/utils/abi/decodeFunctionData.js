import { AbiFunctionSignatureNotFoundError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/abi.js';
import { slice } from '../data/slice.js';
import { toFunctionSelector, } from '../hash/toFunctionSelector.js';
import { decodeAbiParameters, } from './decodeAbiParameters.js';
import { formatAbiItem } from './formatAbiItem.js';
export function decodeFunctionData(parameters) {
    const { abi, data } = parameters;
    const signature = slice(data, 0, 4);
    const description = abi.find((x) => x.type === 'function' &&
        signature === toFunctionSelector(formatAbiItem(x)));
    if (!description)
        throw new AbiFunctionSignatureNotFoundError(signature, {
            docsPath: '/docs/contract/decodeFunctionData',
        });
    return {
        functionName: description.name,
        args: ('inputs' in description &&
            description.inputs &&
            description.inputs.length > 0
            ? decodeAbiParameters(description.inputs, slice(data, 4))
            : undefined),
    };
}
//# sourceMappingURL=decodeFunctionData.js.map