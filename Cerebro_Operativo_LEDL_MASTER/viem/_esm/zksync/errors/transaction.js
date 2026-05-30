import { BaseError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/base.js';
export class InvalidEip712TransactionError extends BaseError {
    constructor() {
        super([
            'Transaction is not an EIP712 transaction.',
            '',
            'Transaction must:',
            '  - include `type: "eip712"`',
            '  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`',
        ].join('\n'), { name: 'InvalidEip712TransactionError' });
    }
}
//# sourceMappingURL=transaction.js.map