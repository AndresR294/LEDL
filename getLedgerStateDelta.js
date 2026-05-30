import JSONRequest from '../jsonrequest.js';
import { decodeMsgpack } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/encoding.js';
import { LedgerStateDelta } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../types/statedelta.js';
export default class GetLedgerStateDelta extends JSONRequest {
    constructor(c, round) {
        super(c);
        this.round = BigInt(round);
        this.query = { format: 'msgpack' };
    }
    // eslint-disable-next-line class-methods-use-this
    path() {
        return `/v2/deltas/${this.round}`;
    }
    // eslint-disable-next-line class-methods-use-this
    prepare(response) {
        return decodeMsgpack(response.body, LedgerStateDelta);
    }
}
//# sourceMappingURL=getLedgerStateDelta.js.map