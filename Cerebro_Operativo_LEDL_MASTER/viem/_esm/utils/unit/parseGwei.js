import { gweiUnits } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/constants/unit.js';
import { parseUnits } from './parseUnits.js';
/**
 * Converts a string representation of gwei to numerical wei.
 *
 * - Docs: https://viem.sh/docs/utilities/parseGwei
 *
 * @example
 * import { parseGwei } from 'viem'
 *
 * parseGwei('420')
 * // 420000000000n
 */
export function parseGwei(ether, unit = 'wei') {
    return parseUnits(ether, gweiUnits[unit]);
}
//# sourceMappingURL=parseGwei.js.map