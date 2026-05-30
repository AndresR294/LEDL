import { numberToHex } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js';
/**
 * Sets the next block's timestamp.
 *
 * - Docs: https://viem.sh/docs/actions/test/setNextBlockTimestamp
 *
 * @param client - Client to use
 * @param parameters – {@link SetNextBlockTimestampParameters}
 *
 * @example
 * import { createTestClient, http } from 'viem'
 * import { foundry } from 'viem/chains'
 * import { setNextBlockTimestamp } from 'viem/test'
 *
 * const client = createTestClient({
 *   mode: 'anvil',
 *   chain: 'foundry',
 *   transport: http(),
 * })
 * await setNextBlockTimestamp(client, { timestamp: 1671744314n })
 */
export async function setNextBlockTimestamp(client, { timestamp }) {
    await client.request({
        method: 'evm_setNextBlockTimestamp',
        params: [numberToHex(timestamp)],
    });
}
//# sourceMappingURL=setNextBlockTimestamp.js.map