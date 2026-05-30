import { toUtf8Bytes, toUtf8String } from "/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/utf8.js";
import { Typed } from "../typed.js";
import { DynamicBytesCoder } from "./bytes.js";
/**
 *  @_ignore
 */
export class StringCoder extends DynamicBytesCoder {
    constructor(localName) {
        super("string", localName);
    }
    defaultValue() {
        return "";
    }
    encode(writer, _value) {
        return super.encode(writer, toUtf8Bytes(Typed.dereference(_value, "string")));
    }
    decode(reader) {
        return toUtf8String(super.decode(reader));
    }
}
//# sourceMappingURL=string.js.map