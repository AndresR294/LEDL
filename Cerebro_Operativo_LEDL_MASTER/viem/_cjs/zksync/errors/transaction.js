"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEip712TransactionError = void 0;
const base_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/base.js");
class InvalidEip712TransactionError extends base_js_1.BaseError {
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
exports.InvalidEip712TransactionError = InvalidEip712TransactionError;
//# sourceMappingURL=transaction.js.map