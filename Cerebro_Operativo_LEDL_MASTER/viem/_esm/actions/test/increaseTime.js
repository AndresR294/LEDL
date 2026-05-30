import { numberToHex } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js';
/**
 * Jump forward in time by the given amount of time, in seconds.
 *
 * - Docs: https://viem.sh/docs/actions/test/increaseTime
 *
 * @param client - Client to use
 * @param parameters – {@link IncreaseTimeParameters}
 *
 * @example
 * import { createTestClient, http } from 'viem'
 * import { foundry } from 'viem/chains'
 * import { increaseTime } from 'viem/test'
 *
 * const client = createTestClient({
 *   mode: 'anvil',
 *   chain: 'foundry',
 *   transport: http(),
 * })
 * await increaseTime(client, {
 *   seconds: 420,
 * })
 */
export async function increaseTime(client, { seconds }) {
    return await client.request({
        method: 'evm_increaseTime',
        params: [numberToHex(seconds)],
    });
}
//# sourceMappingURL=increaseTime.js.map