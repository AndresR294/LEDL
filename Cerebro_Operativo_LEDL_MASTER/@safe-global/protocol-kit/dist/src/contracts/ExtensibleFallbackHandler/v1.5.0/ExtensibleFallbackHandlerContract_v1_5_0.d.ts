import ExtensibleFallbackHandlerBaseContract from '../../../contracts/ExtensibleFallbackHandler/ExtensibleFallbackHandlerBaseContract';
import SafeProvider from '../../../SafeProvider';
import { DeploymentType } from '../../../types';
import { ExtensibleFallbackHandlerContract_v1_5_0_Abi, ExtensibleFallbackHandlerContract_v1_5_0_Contract, ExtensibleFallbackHandlerContract_v1_5_0_Function, SafeContractFunction } from '@safe-global/types-kit';
/**
 * ExtensibleFallbackHandlerContract_v1_5_0 is the implementation specific to the ExtensibleFallbackHandler contract version 1.5.0.
 *
 * This class specializes in handling interactions with the ExtensibleFallbackHandler contract version 1.5.0 using Ethers.js v6.
 *
 * @extends ExtensibleFallbackHandlerBaseContract<ExtensibleFallbackHandlerContract_v1_5_0_Abi> - Inherits from ExtensibleFallbackHandlerBaseContract with ABI specific to ExtensibleFallbackHandler contract version 1.5.0.
 * @implements ExtensibleFallbackHandlerContract_v1_5_0_Contract - Implements the interface specific to ExtensibleFallbackHandler contract version 1.5.0.
 */
declare class ExtensibleFallbackHandlerContract_v1_5_0 extends ExtensibleFallbackHandlerBaseContract<ExtensibleFallbackHandlerContract_v1_5_0_Abi> implements ExtensibleFallbackHandlerContract_v1_5_0_Contract {
    /**
     * Constructs an instance of ExtensibleFallbackHandlerContract_v1_5_0
     *
     * @param chainId - The chain ID where the contract resides.
     * @param safeProvider - An instance of SafeProvider.
     * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the ExtensibleFallbackHandler deployments based on the chainId and safeVersion.
     * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.5.0 is used.
     * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
     */
    constructor(chainId: bigint, safeProvider: SafeProvider, customContractAddress?: string, customContractAbi?: ExtensibleFallbackHandlerContract_v1_5_0_Abi, deploymentType?: DeploymentType);
    /**
     * @param args - Array[safe, domainSeparator]
     * @returns Array[verifier]
     */
    domainVerifiers: ExtensibleFallbackHandlerContract_v1_5_0_Function<'domainVerifiers'>;
    /**
     * @param args - Array[_hash, signature]
     * @returns Array[magic]
     */
    isValidSignature: ExtensibleFallbackHandlerContract_v1_5_0_Function<'isValidSignature'>;
    /**
     * @param args - Array[safe, interfaceId]
     * @returns Array[isSupported]
     */
    safeInterfaces: ExtensibleFallbackHandlerContract_v1_5_0_Function<'safeInterfaces'>;
    /**
     * @param args - Array[safe, selector]
     * @returns Array[handler]
     */
    safeMethods: ExtensibleFallbackHandlerContract_v1_5_0_Function<'safeMethods'>;
    /**
     * @param args - Array[interfaceId]
     * @returns Array[isSupported]
     */
    supportsInterface: ExtensibleFallbackHandlerContract_v1_5_0_Function<'supportsInterface'>;
    /**
     * @param args - Array[operator, from, tokenId, data]
     * @returns Array[bytes4]
     */
    onERC721Received: ExtensibleFallbackHandlerContract_v1_5_0_Function<'onERC721Received'>;
    /**
     * @param args - Array[operator, from, id, value, data]
     * @returns Array[bytes4]
     */
    onERC1155Received: ExtensibleFallbackHandlerContract_v1_5_0_Function<'onERC1155Received'>;
    /**
     * @param args - Array[operator, from, ids, values, data]
     * @returns Array[bytes4]
     */
    onERC1155BatchReceived: ExtensibleFallbackHandlerContract_v1_5_0_Function<'onERC1155BatchReceived'>;
    /**
     * @param args - Array[_interfaceId, handlerWithSelectors]
     */
    addSupportedInterfaceBatch: SafeContractFunction<ExtensibleFallbackHandlerContract_v1_5_0_Abi, 'addSupportedInterfaceBatch'>;
    /**
     * @param args - Array[_interfaceId, selectors]
     */
    removeSupportedInterfaceBatch: SafeContractFunction<ExtensibleFallbackHandlerContract_v1_5_0_Abi, 'removeSupportedInterfaceBatch'>;
    /**
     * @param args - Array[domainSeparator, newVerifier]
     */
    setDomainVerifier: SafeContractFunction<ExtensibleFallbackHandlerContract_v1_5_0_Abi, 'setDomainVerifier'>;
    /**
     * @param args - Array[selector, newMethod]
     */
    setSafeMethod: SafeContractFunction<ExtensibleFallbackHandlerContract_v1_5_0_Abi, 'setSafeMethod'>;
    /**
     * @param args - Array[interfaceId, supported]
     */
    setSupportedInterface: SafeContractFunction<ExtensibleFallbackHandlerContract_v1_5_0_Abi, 'setSupportedInterface'>;
}
export default ExtensibleFallbackHandlerContract_v1_5_0;
//# sourceMappingURL=ExtensibleFallbackHandlerContract_v1_5_0.d.ts.map