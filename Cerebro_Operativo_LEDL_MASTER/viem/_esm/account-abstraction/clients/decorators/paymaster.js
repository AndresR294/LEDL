import { getPaymasterData, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/paymaster/getPaymasterData.js';
import { getPaymasterStubData, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/paymaster/getPaymasterStubData.js';
export function paymasterActions(client) {
    return {
        getPaymasterData: (parameters) => getPaymasterData(client, parameters),
        getPaymasterStubData: (parameters) => getPaymasterStubData(client, parameters),
    };
}
//# sourceMappingURL=paymaster.js.map