import { BaseError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../errors/base.js';
import { ContractFunctionExecutionError, ContractFunctionRevertedError, ContractFunctionZeroDataError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../errors/contract.js';
import { decodeErrorResult } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/abi/decodeErrorResult.js';
import { ExecutionRevertedError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/bundler.js';
import { UserOperationExecutionError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/userOperation.js';
import { getBundlerError, } from './getBundlerError.js';
export function getUserOperationError(err, { calls, docsPath, ...args }) {
    const cause = (() => {
        const cause = getBundlerError(err, args);
        if (calls && cause instanceof ExecutionRevertedError) {
            const revertData = getRevertData(cause);
            const contractCalls = calls?.filter((call) => call.abi);
            if (revertData && contractCalls.length > 0)
                return getContractError({ calls: contractCalls, revertData });
        }
        return cause;
    })();
    return new UserOperationExecutionError(cause, {
        docsPath,
        ...args,
    });
}
/////////////////////////////////////////////////////////////////////////////////
function getRevertData(error) {
    let revertData;
    error.walk((e) => {
        const error = e;
        if (typeof error.data === 'string' ||
            typeof error.data?.revertData === 'string' ||
            (!(error instanceof BaseError) && typeof error.message === 'string')) {
            const match = (error.data?.revertData ||
                error.data ||
                error.message).match?.(/(0x[A-Za-z0-9]*)/);
            if (match) {
                revertData = match[1];
                return true;
            }
        }
        return false;
    });
    return revertData;
}
function getContractError(parameters) {
    const { calls, revertData } = parameters;
    const { abi, functionName, args, to } = (() => {
        const contractCalls = calls?.filter((call) => Boolean(call.abi));
        if (contractCalls.length === 1)
            return contractCalls[0];
        const compatContractCalls = contractCalls.filter((call) => {
            try {
                return Boolean(decodeErrorResult({
                    abi: call.abi,
                    data: revertData,
                }));
            }
            catch {
                return false;
            }
        });
        if (compatContractCalls.length === 1)
            return compatContractCalls[0];
        return {
            abi: [],
            functionName: contractCalls.reduce((acc, call) => `${acc ? `${acc} | ` : ''}${call.functionName}`, ''),
            args: undefined,
            to: undefined,
        };
    })();
    const cause = (() => {
        if (revertData === '0x')
            return new ContractFunctionZeroDataError({ functionName });
        return new ContractFunctionRevertedError({
            abi,
            data: revertData,
            functionName,
        });
    })();
    return new ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: to,
        functionName,
    });
}
//# sourceMappingURL=getUserOperationError.js.map