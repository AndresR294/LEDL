"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eip5792Actions = eip5792Actions;
const getCallsStatus_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/wallet/getCallsStatus.js");
const getCapabilities_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/wallet/getCapabilities.js");
const sendCalls_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/wallet/sendCalls.js");
const showCallsStatus_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/wallet/showCallsStatus.js");
const waitForCallsStatus_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/wallet/waitForCallsStatus.js");
const writeContracts_js_1 = require("../actions/writeContracts.js");
function eip5792Actions() {
    return (client) => {
        return {
            getCallsStatus: (parameters) => (0, getCallsStatus_js_1.getCallsStatus)(client, parameters),
            getCapabilities: ((parameters) => (0, getCapabilities_js_1.getCapabilities)(client, parameters)),
            sendCalls: (parameters) => (0, sendCalls_js_1.sendCalls)(client, parameters),
            showCallsStatus: (parameters) => (0, showCallsStatus_js_1.showCallsStatus)(client, parameters),
            waitForCallsStatus: (parameters) => (0, waitForCallsStatus_js_1.waitForCallsStatus)(client, parameters),
            writeContracts: (parameters) => (0, writeContracts_js_1.writeContracts)(client, parameters),
        };
    };
}
//# sourceMappingURL=eip5792.js.map