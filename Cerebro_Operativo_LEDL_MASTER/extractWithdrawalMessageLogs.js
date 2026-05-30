"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractWithdrawalMessageLogs = extractWithdrawalMessageLogs;
const parseEventLogs_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/parseEventLogs.js");
const abis_js_1 = require("../abis.js");
function extractWithdrawalMessageLogs({ logs, }) {
    return (0, parseEventLogs_js_1.parseEventLogs)({
        abi: abis_js_1.l2ToL1MessagePasserAbi,
        eventName: 'MessagePassed',
        logs,
    });
}
//# sourceMappingURL=extractWithdrawalMessageLogs.js.map