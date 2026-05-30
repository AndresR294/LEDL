import { BaseError } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/base.js';
export class TokenIsEthError extends BaseError {
    constructor() {
        super(['Token is an ETH token.', '', 'ETH token cannot be retrieved.'].join('\n'), { name: 'TokenIsEthError' });
    }
}
//# sourceMappingURL=token-is-eth.js.map