import { InvalidAddressError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/address.js';
import { BaseError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/base.js';
import { InvalidChainIdError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/chain.js';
import { isAddress } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/address/isAddress.js';
import { InvalidEip712TransactionError } from '../errors/transaction.js';
import { isEIP712Transaction } from './isEip712Transaction.js';
export function assertEip712Transaction(transaction) {
    const { chainId, to, from, paymaster, paymasterInput } = transaction;
    if (!isEIP712Transaction(transaction))
        throw new InvalidEip712TransactionError();
    if (!chainId || chainId <= 0)
        throw new InvalidChainIdError({ chainId });
    if (to && !isAddress(to))
        throw new InvalidAddressError({ address: to });
    if (from && !isAddress(from))
        throw new InvalidAddressError({ address: from });
    if (paymaster && !isAddress(paymaster))
        throw new InvalidAddressError({ address: paymaster });
    if (paymaster && !paymasterInput) {
        throw new BaseError('`paymasterInput` must be provided when `paymaster` is defined');
    }
    if (!paymaster && paymasterInput) {
        throw new BaseError('`paymaster` must be provided when `paymasterInput` is defined');
    }
}
//# sourceMappingURL=assertEip712Transaction.js.map