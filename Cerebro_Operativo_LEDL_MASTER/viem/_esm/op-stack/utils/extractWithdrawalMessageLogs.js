import { parseEventLogs, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/parseEventLogs.js';
import { l2ToL1MessagePasserAbi } from '../abis.js';
export function extractWithdrawalMessageLogs({ logs, }) {
    return parseEventLogs({
        abi: l2ToL1MessagePasserAbi,
        eventName: 'MessagePassed',
        logs,
    });
}
//# sourceMappingURL=extractWithdrawalMessageLogs.js.map