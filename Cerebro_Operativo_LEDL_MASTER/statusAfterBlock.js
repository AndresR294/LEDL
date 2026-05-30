import JSONRequest from '../jsonrequest.js';
import { decodeJSON } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/encoding.js';
import { NodeStatusResponse } from './models/types.js';
export default class StatusAfterBlock extends JSONRequest {
    constructor(c, round) {
        super(c);
        this.round = BigInt(round);
    }
    path() {
        return `/v2/status/wait-for-block-after/${this.round}`;
    }
    // eslint-disable-next-line class-methods-use-this
    prepare(response) {
        return decodeJSON(response.getJSONText(), NodeStatusResponse);
    }
}
//# sourceMappingURL=statusAfterBlock.js.map