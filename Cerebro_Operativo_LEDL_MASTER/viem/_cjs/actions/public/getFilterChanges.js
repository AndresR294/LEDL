"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterChanges = getFilterChanges;
const parseEventLogs_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/parseEventLogs.js");
const log_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/formatters/log.js");
async function getFilterChanges(_client, { filter, }) {
    const strict = 'strict' in filter && filter.strict;
    const logs = await filter.request({
        method: 'eth_getFilterChanges',
        params: [filter.id],
    });
    if (typeof logs[0] === 'string')
        return logs;
    const formattedLogs = logs.map((log) => (0, log_js_1.formatLog)(log));
    if (!('abi' in filter) || !filter.abi)
        return formattedLogs;
    return (0, parseEventLogs_js_1.parseEventLogs)({
        abi: filter.abi,
        logs: formattedLogs,
        strict,
    });
}
//# sourceMappingURL=getFilterChanges.js.map