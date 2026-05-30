import { CallExecutionError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/contract.js';
import { UnknownNodeError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/node.js';
import { getNodeError, } from './getNodeError.js';
export function getCallError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = getNodeError(err, args);
        if (cause instanceof UnknownNodeError)
            return err;
        return cause;
    })();
    return new CallExecutionError(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getCallError.js.map