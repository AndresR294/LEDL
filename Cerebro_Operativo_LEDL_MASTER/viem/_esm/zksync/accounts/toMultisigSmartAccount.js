import { sign } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/accounts/utils/sign.js';
import { concatHex } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/index.js';
import { toSmartAccount } from './toSmartAccount.js';
/**
 * Creates a [ZKsync Smart Account](https://docs.zksync.io/build/developer-reference/account-abstraction/building-smart-accounts)
 * from a Contract Address and an array of Private Keys belonging to the owners.
 */
export function toMultisigSmartAccount(parameters) {
    const { address, privateKeys } = parameters;
    return toSmartAccount({
        address,
        async sign({ hash }) {
            return concatHex(await Promise.all(privateKeys.map((privateKey) => sign({ hash, privateKey, to: 'hex' }))));
        },
    });
}
//# sourceMappingURL=toMultisigSmartAccount.js.map