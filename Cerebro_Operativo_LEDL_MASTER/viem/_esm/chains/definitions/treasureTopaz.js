import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/zksync/chainConfig.js';
export const treasureTopaz = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 978_658,
    name: 'Treasure Topaz Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MAGIC',
        symbol: 'MAGIC',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.topaz.treasure.lol'],
            webSocket: ['wss://rpc.topaz.treasure.lol/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Treasure Topaz Block Explorer',
            url: 'https://topaz.treasurescan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
            blockCreated: 108112,
        },
    },
    testnet: true,
});
//# sourceMappingURL=treasureTopaz.js.map