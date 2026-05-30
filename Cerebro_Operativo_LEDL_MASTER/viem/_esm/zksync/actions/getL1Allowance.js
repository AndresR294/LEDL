import { parseAccount } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/accounts/utils/parseAccount.js';
import { readContract } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/public/readContract.js';
import { erc20Abi } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/abis.js';
export async function getL1Allowance(client, parameters) {
    const { token, bridgeAddress, blockTag, account: account_ } = parameters;
    const account = account_ ? parseAccount(account_) : client.account;
    return await readContract(client, {
        abi: erc20Abi,
        address: token,
        functionName: 'allowance',
        args: [account.address, bridgeAddress],
        blockTag: blockTag,
    });
}
//# sourceMappingURL=getL1Allowance.js.map