import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bitrock = /*#__PURE__*/ defineChain({
    id: 7171,
    name: 'Bitrock Mainnet',
    nativeCurrency: { name: 'BROCK', symbol: 'BROCK', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://brockrpc.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Bitrock Explorer',
            url: 'https://explorer.bit-rock.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=bitrock.js.map