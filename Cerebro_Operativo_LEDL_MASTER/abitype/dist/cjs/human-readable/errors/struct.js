"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularReferenceError = void 0;
const errors_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors.js");
class CircularReferenceError extends errors_js_1.BaseError {
    constructor({ type }) {
        super('Circular reference detected.', {
            metaMessages: [`Struct "${type}" is a circular reference.`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
}
exports.CircularReferenceError = CircularReferenceError;
//# sourceMappingURL=struct.js.map