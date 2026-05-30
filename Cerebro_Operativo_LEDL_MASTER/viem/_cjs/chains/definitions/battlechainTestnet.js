"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.battlechainTestnet = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
const chainConfig_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/zksync/chainConfig.js");
exports.battlechainTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 627,
    name: 'BattleChain Testnet',
    network: 'battlechain-testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet.battlechain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'BattleChain Explorer',
            url: 'https://explorer.testnet.battlechain.com',
            blockExplorerApi: 'https://block-explorer-api.testnet.battlechain.com/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=battlechainTestnet.js.map