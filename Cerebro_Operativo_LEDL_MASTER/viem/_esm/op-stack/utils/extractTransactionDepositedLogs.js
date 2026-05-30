import { parseEventLogs, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/parseEventLogs.js';
import { portalAbi } from '../abis.js';
export function extractTransactionDepositedLogs({ logs, }) {
    return parseEventLogs({
        abi: portalAbi,
        eventName: 'TransactionDeposited',
        logs,
    });
}
//# sourceMappingURL=extractTransactionDepositedLogs.js.map