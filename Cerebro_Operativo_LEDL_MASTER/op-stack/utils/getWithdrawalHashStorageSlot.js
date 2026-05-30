"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWithdrawalHashStorageSlot = getWithdrawalHashStorageSlot;
const encodeAbiParameters_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js");
const keccak256_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/hash/keccak256.js");
function getWithdrawalHashStorageSlot({ withdrawalHash, }) {
    const data = (0, encodeAbiParameters_js_1.encodeAbiParameters)([{ type: 'bytes32' }, { type: 'uint256' }], [withdrawalHash, 0n]);
    return (0, keccak256_js_1.keccak256)(data);
}
//# sourceMappingURL=getWithdrawalHashStorageSlot.js.map