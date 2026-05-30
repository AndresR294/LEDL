import { bytesToBase64 } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/binarydata.js';
import { decodeJSON } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../encoding/encoding.js';
import JSONRequest from '../jsonrequest.js';
import { Box } from './models/types.js';
export default class LookupApplicationBoxByIDandName extends JSONRequest {
    /**
     * Returns information about indexed application boxes.
     *
     * #### Example
     * ```typescript
     * const boxName = Buffer.from("foo");
     * const boxResponse = await indexerClient
     *        .LookupApplicationBoxByIDandName(1234, boxName)
     *        .do();
     * const boxValue = boxResponse.value;
     * ```
     *
     * [Response data schema details](https://developer.algorand.org/docs/rest-apis/indexer/#get-v2applicationsapplication-idbox)
     * @oaram index - application index.
     * @category GET
     */
    constructor(c, index, boxName) {
        super(c);
        this.index = BigInt(index);
        // Encode query in base64 format and append the encoding prefix.
        const encodedName = bytesToBase64(boxName);
        this.query.name = encodeURI(`b64:${encodedName}`);
    }
    /**
     * @returns `/v2/applications/${index}/box`
     */
    path() {
        return `/v2/applications/${this.index}/box`;
    }
    // eslint-disable-next-line class-methods-use-this
    prepare(response) {
        return decodeJSON(response.getJSONText(), Box);
    }
}
//# sourceMappingURL=lookupApplicationBoxByIDandName.js.map