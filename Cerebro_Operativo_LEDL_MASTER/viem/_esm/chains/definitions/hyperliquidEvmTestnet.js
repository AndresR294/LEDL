import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const hyperliquidEvmTestnet = /*#__PURE__*/ defineChain({
    id: 998,
    name: 'Hyperliquid EVM Testnet',
    nativeCurrency: { name: 'HYPE', symbol: 'HYPE', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.hyperliquid-testnet.xyz/evm'],
        },
    },
    testnet: true,
});
//# sourceMappingURL=hyperliquidEvmTestnet.js.map