import JSONRequest from '../jsonrequest.js';
import { decodeJSON } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/encoding.js';
import { AccountAssetResponse } from './models/types.js';
export default class AccountAssetInformation extends JSONRequest {
    constructor(c, account, assetID) {
        super(c);
        this.account = account.toString();
        this.assetID = BigInt(assetID);
    }
    path() {
        return `/v2/accounts/${this.account}/assets/${this.assetID}`;
    }
    // eslint-disable-next-line class-methods-use-this
    prepare(response) {
        return decodeJSON(response.getJSONText(), AccountAssetResponse);
    }
}
//# sourceMappingURL=accountAssetInformation.js.map