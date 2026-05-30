import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const zenchainTestnet = /*#__PURE__*/ defineChain({
    id: 8408,
    name: 'ZenChain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ZTC',
        symbol: 'ZTC',
    },
    rpcUrls: {
        default: {
            http: ['https://zenchain-testnet.api.onfinality.io/public'],
            webSocket: ['wss://zenchain-testnet.api.onfinality.io/public-ws'],
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 230019,
        },
    },
    blockExplorers: {
        default: {
            name: 'Zentrace',
            url: 'https://zentrace.io',
        },
    },
    testnet: true,
});
//# sourceMappingURL=zenchainTestnet.js.map