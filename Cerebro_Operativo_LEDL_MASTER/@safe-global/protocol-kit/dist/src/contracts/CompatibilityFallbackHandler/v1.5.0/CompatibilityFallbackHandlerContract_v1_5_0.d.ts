import CompatibilityFallbackHandlerBaseContract from '../../../contracts/CompatibilityFallbackHandler/CompatibilityFallbackHandlerBaseContract';
import SafeProvider from '../../../SafeProvider';
import { DeploymentType } from '../../../types';
import { CompatibilityFallbackHandlerContract_v1_5_0_Abi, CompatibilityFallbackHandlerContract_v1_5_0_Contract, CompatibilityFallbackHandlerContract_v1_5_0_Function } from '@safe-global/types-kit';
/**
 * CompatibilityFallbackHandlerContract_v1_5_0 is the implementation specific to the CompatibilityFallbackHandler contract version 1.5.0.
 *
 * This class specializes in handling interactions with the CompatibilityFallbackHandler contract version 1.5.0 using Ethers.js v6.
 *
 * @extends  CompatibilityFallbackHandlerBaseContract<CompatibilityFallbackHandlerContract_v1_5_0_Abi> - Inherits from  CompatibilityFallbackHandlerBaseContract with ABI specific to CompatibilityFallbackHandler contract version 1.5.0.
 * @implements CompatibilityFallbackHandlerContract_v1_5_0_Contract - Implements the interface specific to CompatibilityFallbackHandler contract version 1.5.0.
 */
declare class CompatibilityFallbackHandlerContract_v1_5_0 extends CompatibilityFallbackHandlerBaseContract<CompatibilityFallbackHandlerContract_v1_5_0_Abi> implements CompatibilityFallbackHandlerContract_v1_5_0_Contract {
    /**
     * Constructs an instance of CompatibilityFallbackHandlerContract_v1_5_0
     *
     * @param chainId - The chain ID where the contract resides.
     * @param safeProvider - An instance of SafeProvider.
     * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the CompatibilityFallbackHandler deployments based on the chainId and safeVersion.
     * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.5.0 is used.
     * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
     */
    constructor(chainId: bigint, safeProvider: SafeProvider, customContractAddress?: string, customContractAbi?: CompatibilityFallbackHandlerContract_v1_5_0_Abi, deploymentType?: DeploymentType);
    /**
     * New in v1.5.0: encodeTransactionData was moved from the Safe contract to CompatibilityFallbackHandler
     * to preserve backwards compatibility for existing integrations.
     * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, nonce]
     * @returns Array[encodedData]
     */
    encodeTransactionData: CompatibilityFallbackHandlerContract_v1_5_0_Function<'encodeTransactionData'>;
}
export default CompatibilityFallbackHandlerContract_v1_5_0;
//# sourceMappingURL=CompatibilityFallbackHandlerContract_v1_5_0.d.ts.map