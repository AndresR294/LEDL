import { parseAccount } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/accounts/utils/parseAccount.js';
import { getChainId } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/public/getChainId.js';
import { prepareTransactionRequest } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js';
import { sendRawTransaction } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js';
import { AccountNotFoundError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/account.js';
import { assertCurrentChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js';
import { getTransactionError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/errors/getTransactionError.js';
import { getAction } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/getAction.js';
import { assertEip712Request } from '../utils/assertEip712Request.js';
import { signTransaction } from './signTransaction.js';
/**
 * Creates, signs, and sends a new EIP712 transaction to the network.
 *
 * @param client - Client to use
 * @param parameters - {@link SendEip712TransactionParameters}
 * @returns The [Transaction](https://viem.sh/docs/glossary/terms#transaction) hash. {@link SendTransactionReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { zksync } from 'viem/chains'
 * import { sendEip712Transaction } from 'viem/zksync'
 *
 * const client = createWalletClient({
 *   chain: zksync,
 *   transport: custom(window.ethereum),
 * })
 * const hash = await sendEip712Transaction(client, {
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *   value: 1000000000000000000n,
 * })
 *
 * @example
 * // Account Hoisting
 * import { createWalletClient, http } from 'viem'
 * import { privateKeyToAccount } from 'viem/accounts'
 * import { zksync } from 'viem/chains'
 * import { sendEip712Transaction } from 'viem/zksync'
 *
 * const client = createWalletClient({
 *   account: privateKeyToAccount('0x…'),
 *   chain: zksync,
 *   transport: http(),
 * })
 *
 * const hash = await sendEip712Transaction(client, {
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *   value: 1000000000000000000n,
 * })
 */
export async function sendEip712Transaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain } = parameters;
    const account = account_ ? parseAccount(account_) : client.account;
    if (!account)
        throw new AccountNotFoundError({
            docsPath: '/docs/actions/wallet/sendTransaction',
        });
    try {
        assertEip712Request(parameters);
        // Prepare the request for signing (assign appropriate fees, etc.)
        const request = await prepareTransactionRequest(client, {
            ...parameters,
            nonceManager: account.nonceManager,
            parameters: ['gas', 'nonce', 'fees'],
        });
        let chainId;
        if (chain !== null) {
            chainId = await getAction(client, getChainId, 'getChainId')({});
            assertCurrentChain({
                currentChainId: chainId,
                chain,
            });
        }
        const serializedTransaction = await signTransaction(client, {
            ...request,
            chainId,
        });
        return await getAction(client, sendRawTransaction, 'sendRawTransaction')({
            serializedTransaction,
        });
    }
    catch (err) {
        throw getTransactionError(err, {
            ...parameters,
            account,
            chain: chain,
        });
    }
}
//# sourceMappingURL=sendEip712Transaction.js.map