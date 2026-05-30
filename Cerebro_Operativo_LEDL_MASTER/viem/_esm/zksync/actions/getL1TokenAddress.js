import { readContract } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/public/readContract.js';
import { isAddressEqual } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/index.js';
import { l2SharedBridgeAbi } from '../constants/abis.js';
import { legacyEthAddress } from '../constants/address.js';
import { getDefaultBridgeAddresses } from './getDefaultBridgeAddresses.js';
/**
 * Returns the L1 token address equivalent for a L2 token address as they are not equal.
 * ETH address is set to zero address.
 *
 * @remarks Only works for tokens bridged on default ZKsync Era bridges.
 *
 * @param client - Client to use
 * @param parameters - {@link GetL1TokenAddressParameters}
 * @returns The L1 token address equivalent for a L2 token address.
 *
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { zksync } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: zksync,
 *   transport: http(),
 * })
 *
 * const address = await getL1TokenAddress(client, {token: '0x...'});
 */
export async function getL1TokenAddress(client, parameters) {
    const { token } = parameters;
    if (isAddressEqual(token, legacyEthAddress))
        return legacyEthAddress;
    const bridgeAddress = (await getDefaultBridgeAddresses(client)).sharedL2;
    return await readContract(client, {
        address: bridgeAddress,
        abi: l2SharedBridgeAbi,
        functionName: 'l1TokenAddress',
        args: [token],
    });
}
//# sourceMappingURL=getL1TokenAddress.js.map