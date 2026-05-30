"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployContract = deployContract;
const encodeDeployData_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/encodeDeployData.js");
const sendTransaction_js_1 = require("./sendTransaction.js");
function deployContract(walletClient, parameters) {
    const { abi, args, bytecode, ...request } = parameters;
    const calldata = (0, encodeDeployData_js_1.encodeDeployData)({ abi, args, bytecode });
    return (0, sendTransaction_js_1.sendTransaction)(walletClient, {
        ...request,
        ...(request.authorizationList ? { to: null } : {}),
        data: calldata,
    });
}
//# sourceMappingURL=deployContract.js.map