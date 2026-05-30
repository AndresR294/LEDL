import { getChainId, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/public/getChainId.js';
import { estimateUserOperationGas, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/bundler/estimateUserOperationGas.js';
import { getSupportedEntryPoints, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/bundler/getSupportedEntryPoints.js';
import { getUserOperation, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/bundler/getUserOperation.js';
import { getUserOperationReceipt, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/bundler/getUserOperationReceipt.js';
import { prepareUserOperation, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/bundler/prepareUserOperation.js';
import { sendUserOperation, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/bundler/sendUserOperation.js';
import { waitForUserOperationReceipt, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/bundler/waitForUserOperationReceipt.js';
export function bundlerActions(client) {
    return {
        estimateUserOperationGas: (parameters) => estimateUserOperationGas(client, parameters),
        getChainId: () => getChainId(client),
        getSupportedEntryPoints: () => getSupportedEntryPoints(client),
        getUserOperation: (parameters) => getUserOperation(client, parameters),
        getUserOperationReceipt: (parameters) => getUserOperationReceipt(client, parameters),
        prepareUserOperation: (parameters) => prepareUserOperation(client, parameters),
        sendUserOperation: (parameters) => sendUserOperation(client, parameters),
        waitForUserOperationReceipt: (parameters) => waitForUserOperationReceipt(client, parameters),
    };
}
//# sourceMappingURL=bundler.js.map