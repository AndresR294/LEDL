"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTransactionDepositedLogs = extractTransactionDepositedLogs;
const parseEventLogs_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/parseEventLogs.js");
const abis_js_1 = require("../abis.js");
function extractTransactionDepositedLogs({ logs, }) {
    return (0, parseEventLogs_js_1.parseEventLogs)({
        abi: abis_js_1.portalAbi,
        eventName: 'TransactionDeposited',
        logs,
    });
}
//# sourceMappingURL=extractTransactionDepositedLogs.js.map