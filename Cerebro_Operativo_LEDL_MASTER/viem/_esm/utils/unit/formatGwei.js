import { gweiUnits } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/unit.js';
import { formatUnits } from './formatUnits.js';
/**
 * Converts numerical wei to a string representation of gwei.
 *
 * - Docs: https://viem.sh/docs/utilities/formatGwei
 *
 * @example
 * import { formatGwei } from 'viem'
 *
 * formatGwei(1000000000n)
 * // '1'
 */
export function formatGwei(wei, unit = 'wei') {
    return formatUnits(wei, gweiUnits[unit]);
}
//# sourceMappingURL=formatGwei.js.map