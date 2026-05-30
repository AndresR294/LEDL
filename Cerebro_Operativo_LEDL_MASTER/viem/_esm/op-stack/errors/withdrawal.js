import { BaseError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/base.js';
export class GameNotFoundError extends BaseError {
    constructor() {
        super('Dispute game not found.', { name: 'GameNotFoundError' });
    }
}
export class ReceiptContainsNoWithdrawalsError extends BaseError {
    constructor({ hash }) {
        super(`The provided transaction receipt with hash "${hash}" contains no withdrawals.`, { name: 'ReceiptContainsNoWithdrawalsError' });
    }
}
//# sourceMappingURL=withdrawal.js.map