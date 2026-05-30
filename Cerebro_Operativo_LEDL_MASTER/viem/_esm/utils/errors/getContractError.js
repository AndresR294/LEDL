import { AbiDecodingZeroDataError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/abi.js';
import { BaseError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/base.js';
import { ContractFunctionExecutionError, ContractFunctionRevertedError, ContractFunctionZeroDataError, RawContractError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/contract.js';
import { RpcRequestError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/request.js';
import { InternalRpcError, InvalidInputRpcError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/rpc.js';
const EXECUTION_REVERTED_ERROR_CODE = 3;
export function getContractError(err, { abi, address, args, docsPath, functionName, sender, }) {
    const error = (err instanceof RawContractError
        ? err
        : err instanceof BaseError
            ? err.walk((err) => 'data' in err) || err.walk()
            : {});
    const { code, data, details, message, shortMessage } = error;
    const cause = (() => {
        if (err instanceof AbiDecodingZeroDataError)
            return new ContractFunctionZeroDataError({ functionName, cause: err });
        if (([EXECUTION_REVERTED_ERROR_CODE, InternalRpcError.code].includes(code) &&
            (data || details || message || shortMessage)) ||
            (code === InvalidInputRpcError.code &&
                details === 'execution reverted' &&
                data)) {
            return new ContractFunctionRevertedError({
                abi,
                data: typeof data === 'object' ? data.data : data,
                functionName,
                message: error instanceof RpcRequestError
                    ? details
                    : (shortMessage ?? message),
                cause: err,
            });
        }
        return err;
    })();
    return new ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender,
    });
}
//# sourceMappingURL=getContractError.js.map