import { AbiConstructorNotFoundError, AbiConstructorParamsNotFoundError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/abi.js';
import { decodeAbiParameters, } from './decodeAbiParameters.js';
const docsPath = '/docs/contract/decodeDeployData';
export function decodeDeployData(parameters) {
    const { abi, bytecode, data } = parameters;
    if (data === bytecode)
        return { bytecode };
    const description = abi.find((x) => 'type' in x && x.type === 'constructor');
    if (!description)
        throw new AbiConstructorNotFoundError({ docsPath });
    if (!('inputs' in description))
        throw new AbiConstructorParamsNotFoundError({ docsPath });
    if (!description.inputs || description.inputs.length === 0)
        throw new AbiConstructorParamsNotFoundError({ docsPath });
    const args = decodeAbiParameters(description.inputs, `0x${data.replace(bytecode, '')}`);
    return { args, bytecode };
}
//# sourceMappingURL=decodeDeployData.js.map