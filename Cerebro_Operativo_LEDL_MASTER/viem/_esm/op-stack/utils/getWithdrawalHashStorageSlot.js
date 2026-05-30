import { encodeAbiParameters, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js';
import { keccak256, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/hash/keccak256.js';
export function getWithdrawalHashStorageSlot({ withdrawalHash, }) {
    const data = encodeAbiParameters([{ type: 'bytes32' }, { type: 'uint256' }], [withdrawalHash, 0n]);
    return keccak256(data);
}
//# sourceMappingURL=getWithdrawalHashStorageSlot.js.map