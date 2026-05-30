import { UntypedSchema } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/encoding/schema/index.js';
export class UntypedValue {
    constructor(data) {
        this.data = data;
    }
    // eslint-disable-next-line class-methods-use-this
    getEncodingSchema() {
        return UntypedValue.encodingSchema;
    }
    toEncodingData() {
        return this.data;
    }
    static fromEncodingData(data) {
        return new UntypedValue(data);
    }
}
UntypedValue.encodingSchema = new UntypedSchema();
//# sourceMappingURL=untypedmodel.js.map