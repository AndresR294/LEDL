import JSONRequest from '../jsonrequest.js';
import { decodeJSON } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/encoding.js';
import { Account } from './models/types.js';
export default class AccountInformation extends JSONRequest {
    constructor(c, account) {
        super(c);
        this.account = account.toString();
    }
    path() {
        return `/v2/accounts/${this.account}`;
    }
    /**
     * Exclude assets and application data from results
     *
     * #### Example
     * ```typescript
     * const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
     * const accountInfo = await algodClient.accountInformation(address)
     *        .exclude('all')
     *        .do();
     * ```
     *
     * @param round
     * @category query
     */
    exclude(exclude) {
        this.query.exclude = exclude;
        return this;
    }
    // eslint-disable-next-line class-methods-use-this
    prepare(response) {
        return decodeJSON(response.getJSONText(), Account);
    }
}
//# sourceMappingURL=accountInformation.js.map