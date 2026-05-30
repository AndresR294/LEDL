import { getTransactionReceipt } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../actions/index.js';
import { isAddressEqual } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/index.js';
import { l1MessengerAddress } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/address.js';
/** @internal */
export async function getWithdrawalL2ToL1Log(client, parameters) {
    const { hash, index = 0 } = parameters;
    const receipt = (await getTransactionReceipt(client, {
        hash,
    }));
    const messages = Array.from(receipt.l2ToL1Logs.entries()).filter(([, log]) => isAddressEqual(log.sender, l1MessengerAddress));
    const [l2ToL1LogIndex, l2ToL1Log] = messages[index];
    return {
        l2ToL1LogIndex,
        l2ToL1Log,
    };
}
//# sourceMappingURL=getWithdrawalL2ToL1Log.js.map