"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashTypedData = hashTypedData;
const hashTypedData_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/signature/hashTypedData.js");
function hashTypedData(parameters) {
    const { domain, message, primaryType, types, verifierDomain } = parameters;
    return (0, hashTypedData_js_1.hashTypedData)({
        domain: domain,
        types: {
            ...types,
            TypedDataSign: [
                { name: 'contents', type: primaryType },
                { name: 'name', type: 'string' },
                { name: 'version', type: 'string' },
                { name: 'chainId', type: 'uint256' },
                { name: 'verifyingContract', type: 'address' },
                { name: 'salt', type: 'bytes32' },
            ],
        },
        primaryType: 'TypedDataSign',
        message: {
            contents: message,
            ...verifierDomain,
        },
    });
}
//# sourceMappingURL=hashTypedData.js.map