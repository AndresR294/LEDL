import { getTransactionReceipt } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/index.js';
import { isAddressEqual, toFunctionHash } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/index.js';
import { l1MessengerAddress } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/address.js';
/** @internal */
export async function getWithdrawalLog(client, parameters) {
    const { hash, index = 0 } = parameters;
    const receipt = (await getTransactionReceipt(client, {
        hash,
    }));
    const log = receipt.logs.filter((log) => isAddressEqual(log.address, l1MessengerAddress) &&
        log.topics[0] === toFunctionHash('L1MessageSent(address,bytes32,bytes)'))[index];
    return {
        log,
        l1BatchTxId: receipt.l1BatchTxIndex,
    };
}
//# sourceMappingURL=getWithdrawalLog.js.map