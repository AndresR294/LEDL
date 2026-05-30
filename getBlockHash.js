import JSONRequest from '../jsonrequest.js';
import { decodeJSON } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/encoding.js';
import { BlockHashResponse } from './models/types.js';
export default class GetBlockHash extends JSONRequest {
    constructor(c, roundNumber) {
        super(c);
        this.round = BigInt(roundNumber);
    }
    path() {
        return `/v2/blocks/${this.round}/hash`;
    }
    // eslint-disable-next-line class-methods-use-this
    prepare(response) {
        return decodeJSON(response.getJSONText(), BlockHashResponse);
    }
}
//# sourceMappingURL=getBlockHash.js.map