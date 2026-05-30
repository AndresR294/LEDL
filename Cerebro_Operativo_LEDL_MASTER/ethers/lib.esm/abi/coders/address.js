import { getAddress } from "/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/address/index.js";
import { toBeHex } from "/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/maths.js";
import { Typed } from "../typed.js";
import { Coder } from "./abstract-coder.js";
/**
 *  @_ignore
 */
export class AddressCoder extends Coder {
    constructor(localName) {
        super("address", "address", localName, false);
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000";
    }
    encode(writer, _value) {
        let value = Typed.dereference(_value, "string");
        try {
            value = getAddress(value);
        }
        catch (error) {
            return this._throwError(error.message, _value);
        }
        return writer.writeValue(value);
    }
    decode(reader) {
        return getAddress(toBeHex(reader.readValue(), 20));
    }
}
//# sourceMappingURL=address.js.map