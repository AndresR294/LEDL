import { numberToHex } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js';
/**
 * Mine a specified number of blocks.
 *
 * - Docs: https://viem.sh/docs/actions/test/mine
 *
 * @param client - Client to use
 * @param parameters – {@link MineParameters}
 *
 * @example
 * import { createTestClient, http } from 'viem'
 * import { foundry } from 'viem/chains'
 * import { mine } from 'viem/test'
 *
 * const client = createTestClient({
 *   mode: 'anvil',
 *   chain: 'foundry',
 *   transport: http(),
 * })
 * await mine(client, { blocks: 1 })
 */
export async function mine(client, { blocks, interval }) {
    if (client.mode === 'ganache')
        await client.request({
            method: 'evm_mine',
            params: [{ blocks: numberToHex(blocks) }],
        });
    else
        await client.request({
            method: `${client.mode}_mine`,
            params: [numberToHex(blocks), numberToHex(interval || 0)],
        });
}
//# sourceMappingURL=mine.js.map