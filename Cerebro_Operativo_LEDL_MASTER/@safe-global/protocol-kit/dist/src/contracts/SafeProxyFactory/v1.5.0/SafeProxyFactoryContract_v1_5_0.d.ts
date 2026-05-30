import SafeProxyFactoryBaseContract from '../../../contracts/SafeProxyFactory/SafeProxyFactoryBaseContract';
import { DeploymentType } from '../../../types';
import { SafeProxyFactoryContract_v1_5_0_Abi, SafeProxyFactoryContract_v1_5_0_Contract, SafeProxyFactoryContract_v1_5_0_Function } from '@safe-global/types-kit';
import SafeProvider from '../../../SafeProvider';
/**
 * SafeProxyFactoryContract_v1_5_0  is the implementation specific to the Safe Proxy Factory contract version 1.5.0.
 *
 * This class specializes in handling interactions with the Safe Proxy Factory contract version 1.5.0 using Ethers.js v6.
 *
 * @extends SafeProxyFactoryBaseContract<SafeProxyFactoryContract_v1_5_0_Abi> - Inherits from SafeProxyFactoryBaseContract with ABI specific to Safe Proxy Factory contract version 1.5.0.
 * @implements SafeProxyFactoryContract_v1_5_0_Contract - Implements the interface specific to Safe Proxy Factory contract version 1.5.0.
 */
declare class SafeProxyFactoryContract_v1_5_0 extends SafeProxyFactoryBaseContract<SafeProxyFactoryContract_v1_5_0_Abi> implements SafeProxyFactoryContract_v1_5_0_Contract {
    /**
     * Constructs an instance of SafeProxyFactoryContract_v1_5_0
     *
     * @param chainId - The chain ID where the contract resides.
     * @param safeProvider - An instance of SafeProvider.
     * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
     * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.5.0 is used.
     * @param deploymentType - Optional deployment type for the contract. If not provided, the first deployment retrieved from the safe-deployments array will be used.
     */
    constructor(chainId: bigint, safeProvider: SafeProvider, customContractAddress?: string, customContractAbi?: SafeProxyFactoryContract_v1_5_0_Abi, deploymentType?: DeploymentType);
    /**
     * Returns the ID of the chain the contract is currently deployed on.
     * @returns Array[chainId]
     */
    getChainId: SafeProxyFactoryContract_v1_5_0_Function<'getChainId'>;
    /**
     * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
     * @returns Array[creationCode]
     */
    proxyCreationCode: SafeProxyFactoryContract_v1_5_0_Function<'proxyCreationCode'>;
    /**
     * Deploys a new chain-specific proxy with singleton and salt. Optionally executes an initializer call to a new proxy.
     * @param args - Array[singleton, initializer, saltNonce]
     * @returns Array[proxy]
     */
    createChainSpecificProxyWithNonce: SafeProxyFactoryContract_v1_5_0_Function<'createChainSpecificProxyWithNonce'>;
    /**
     * Deploys a new chain-specific proxy with singleton and salt. Optionally executes an initializer call to a new proxy.
     * @param args - Array[singleton, initializer, saltNonce]
     * @returns Array[proxy]
     */
    createChainSpecificProxyWithNonceL2: SafeProxyFactoryContract_v1_5_0_Function<'createChainSpecificProxyWithNonceL2'>;
    /**
     * Deploys a new proxy with singleton and salt. Optionally executes an initializer call to a new proxy.
     * @param args - Array[singleton, initializer, saltNonce]
     * @returns Array[proxy]
     */
    createProxyWithNonce: SafeProxyFactoryContract_v1_5_0_Function<'createProxyWithNonce'>;
    /**
     * Deploys a new proxy with singleton and salt. Optionally executes an initializer call to a new proxy.
     * @param args - Array[singleton, initializer, saltNonce]
     * @returns Array[proxy]
     */
    createProxyWithNonceL2: SafeProxyFactoryContract_v1_5_0_Function<'createProxyWithNonceL2'>;
}
export default SafeProxyFactoryContract_v1_5_0;
//# sourceMappingURL=SafeProxyFactoryContract_v1_5_0.d.ts.map