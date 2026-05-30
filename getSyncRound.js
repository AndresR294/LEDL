import JSONRequest from '../jsonrequest.js';
import { decodeJSON } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/encoding.js';
import { GetSyncRoundResponse } from './models/types.js';
export default class GetSyncRound extends JSONRequest {
    // eslint-disable-next-line class-methods-use-this
    path() {
        return `/v2/ledger/sync`;
    }
    // eslint-disable-next-line class-methods-use-this
    prepare(response) {
        return decodeJSON(response.getJSONText(), GetSyncRoundResponse);
    }
}
//# sourceMappingURL=getSyncRound.js.map