"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenName = getTokenName;
const exceptions_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../exceptions");
function getTokenName(token) {
    if (!token.originTokenAddress) {
        throw new exceptions_1.SdkError("STX token must contain 'originTokenAddress'");
    }
    const [_address, name] = token.originTokenAddress.split("::");
    if (!name) {
        throw new exceptions_1.SdkError("STX token must contain 'originTokenAddress' ends with '::<tokenName>'");
    }
    return name;
}
//# sourceMappingURL=get-token-name.js.map