"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWithdrawalLog = getWithdrawalLog;
const index_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/index.js");
const index_js_2 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/index.js");
const address_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/address.js");
async function getWithdrawalLog(client, parameters) {
    const { hash, index = 0 } = parameters;
    const receipt = (await (0, index_js_1.getTransactionReceipt)(client, {
        hash,
    }));
    const log = receipt.logs.filter((log) => (0, index_js_2.isAddressEqual)(log.address, address_js_1.l1MessengerAddress) &&
        log.topics[0] === (0, index_js_2.toFunctionHash)('L1MessageSent(address,bytes32,bytes)'))[index];
    return {
        log,
        l1BatchTxId: receipt.l1BatchTxIndex,
    };
}
//# sourceMappingURL=getWithdrawalLog.js.map