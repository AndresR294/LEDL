import { ChainMismatchError, ChainNotFoundError, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/chain.js';
export function assertCurrentChain({ chain, currentChainId, }) {
    if (!chain)
        throw new ChainNotFoundError();
    if (currentChainId !== chain.id)
        throw new ChainMismatchError({ chain, currentChainId });
}
//# sourceMappingURL=assertCurrentChain.js.map