import { encodeFunctionData, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/abi/encodeFunctionData.js';
import { bytesToHex } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/encoding/toHex.js';
import { paymasterAbi } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/abis.js';
export function getGeneralPaymasterInput(parameters) {
    const { innerInput } = parameters;
    const innerInputHex = typeof innerInput === 'string' ? innerInput : bytesToHex(innerInput);
    return encodeFunctionData({
        abi: paymasterAbi,
        functionName: 'general',
        args: [innerInputHex],
    });
}
//# sourceMappingURL=getGeneralPaymasterInput.js.map