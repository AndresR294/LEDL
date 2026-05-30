import { toAccount } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/accounts/toAccount.js';
import { keccak256 } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/index.js';
import { hashMessage } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/signature/hashMessage.js';
import { hashTypedData } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/signature/hashTypedData.js';
import { serializeTransaction } from '../serializers.js';
/**
 * Creates a [ZKsync Smart Account](https://docs.zksync.io/build/developer-reference/account-abstraction/building-smart-accounts)
 * from a Contract Address and a custom sign function.
 */
export function toSmartAccount(parameters) {
    const { address, sign } = parameters;
    const account = toAccount({
        address,
        sign,
        async signMessage({ message }) {
            return sign({
                hash: hashMessage(message),
            });
        },
        async signTransaction(transaction) {
            const signableTransaction = {
                ...transaction,
                from: this.address,
            };
            return serializeTransaction({
                ...signableTransaction,
                customSignature: await sign({
                    hash: keccak256(serializeTransaction(signableTransaction)),
                }),
            });
        },
        async signTypedData(typedData) {
            return sign({
                hash: hashTypedData(typedData),
            });
        },
    });
    return {
        ...account,
        source: 'smartAccountZksync',
    };
}
//# sourceMappingURL=toSmartAccount.js.map