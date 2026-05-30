import { UnknownNodeError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/node.js';
import { TransactionExecutionError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/transaction.js';
import { getNodeError, } from './getNodeError.js';
export function getTransactionError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = getNodeError(err, args);
        if (cause instanceof UnknownNodeError)
            return err;
        return cause;
    })();
    return new TransactionExecutionError(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getTransactionError.js.map