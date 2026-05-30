import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/op-stack/chainConfig.js';
import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const dchainTestnet = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 2713017997578000,
    name: 'Dchain Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: [
                'https://dchaintestnet-2713017997578000-1.jsonrpc.testnet.sagarpc.io',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'Dchain Explorer',
            url: 'https://dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io',
            apiUrl: 'https://api-dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io/api',
        },
    },
    contracts: {
        ...chainConfig.contracts,
    },
    testnet: true,
});
//# sourceMappingURL=dchainTestnet.js.map