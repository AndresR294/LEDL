import JSONRequest from '../jsonrequest.js';
import { decodeJSON } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/encoding.js';
import { AccountApplicationResponse } from './models/types.js';
export default class AccountApplicationInformation extends JSONRequest {
    constructor(c, account, applicationID) {
        super(c);
        this.account = account.toString();
        this.applicationID = BigInt(applicationID);
    }
    path() {
        return `/v2/accounts/${this.account}/applications/${this.applicationID}`;
    }
    // eslint-disable-next-line class-methods-use-this
    prepare(response) {
        return decodeJSON(response.getJSONText(), AccountApplicationResponse);
    }
}
//# sourceMappingURL=accountApplicationInformation.js.map