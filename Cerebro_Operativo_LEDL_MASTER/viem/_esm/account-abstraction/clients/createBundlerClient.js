import { createClient, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/clients/createClient.js';
import { bundlerActions } from './decorators/bundler.js';
export function createBundlerClient(parameters) {
    const { client: client_, dataSuffix, key = 'bundler', name = 'Bundler Client', paymaster, paymasterContext, transport, userOperation, } = parameters;
    const client = Object.assign(createClient({
        ...parameters,
        chain: parameters.chain ?? client_?.chain,
        key,
        name,
        transport,
        type: 'bundlerClient',
    }), {
        client: client_,
        dataSuffix: dataSuffix ?? client_?.dataSuffix,
        paymaster,
        paymasterContext,
        userOperation,
    });
    return client.extend(bundlerActions);
}
//# sourceMappingURL=createBundlerClient.js.map