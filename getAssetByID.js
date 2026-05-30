import JSONRequest from '../jsonrequest.js';
import { decodeJSON } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/encoding.js';
import { Asset } from './models/types.js';
export default class GetAssetByID extends JSONRequest {
    constructor(c, index) {
        super(c);
        this.index = BigInt(index);
    }
    path() {
        return `/v2/assets/${this.index}`;
    }
    // eslint-disable-next-line class-methods-use-this
    prepare(response) {
        return decodeJSON(response.getJSONText(), Asset);
    }
}
//# sourceMappingURL=getAssetByID.js.map