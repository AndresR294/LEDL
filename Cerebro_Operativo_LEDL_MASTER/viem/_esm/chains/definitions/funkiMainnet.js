import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/op-stack/chainConfig.js';
import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
const sourceId = 1; // mainnet
export const funkiMainnet = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 33979,
    name: 'Funki',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-mainnet.funkichain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Funki Mainnet Explorer',
            url: 'https://funkiscan.io',
        },
    },
    contracts: {
        ...chainConfig.contracts,
    },
    sourceId,
});
//# sourceMappingURL=funkiMainnet.js.map