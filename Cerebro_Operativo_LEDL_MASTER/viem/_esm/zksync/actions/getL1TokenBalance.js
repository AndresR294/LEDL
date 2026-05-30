import { parseAccount } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/accounts/utils/parseAccount.js';
import { readContract } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/index.js';
import { erc20Abi } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/abis.js';
import { TokenIsEthError, } from '../errors/token-is-eth.js';
import { isEth } from '../utils/isEth.js';
export async function getL1TokenBalance(client, parameters) {
    const { account: account_ = client.account, blockTag, blockNumber, token, } = parameters;
    if (isEth(token))
        throw new TokenIsEthError();
    const account = account_ ? parseAccount(account_) : client.account;
    return await readContract(client, {
        abi: erc20Abi,
        address: token,
        functionName: 'balanceOf',
        args: [account.address],
        blockNumber: blockNumber,
        blockTag: blockTag,
    });
}
//# sourceMappingURL=getL1TokenBalance.js.map