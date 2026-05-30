"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymasterClient = createPaymasterClient;
const createClient_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/clients/createClient.js");
const paymaster_js_1 = require("./decorators/paymaster.js");
function createPaymasterClient(parameters) {
    const { key = 'bundler', name = 'Bundler Client', transport } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        transport,
        type: 'PaymasterClient',
    });
    return client.extend(paymaster_js_1.paymasterActions);
}
//# sourceMappingURL=createPaymasterClient.js.map