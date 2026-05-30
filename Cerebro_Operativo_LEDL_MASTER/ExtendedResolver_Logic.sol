// SPDX-License-Identifier: LEDL-1.0
pragma solidity ^0.8.0;

interface ExtendedResolver {
    function resolve(bytes calldata name, bytes calldata data) external view returns(bytes memory);
}

contract EnsDeLizResolver is ExtendedResolver {
    error OffchainLookup(address sender, string[] urls, bytes callData, bytes4 callbackFunction, bytes extraData);

    function resolve(bytes calldata name, bytes calldata data) external view override returns(bytes memory) {
        string[] memory urls = new string[](1);
        urls[0] = "https://gateway.ensdeliz.io/audit/{sender}/{data}.json";
        
        revert OffchainLookup(
            address(this),
            urls,
            data,
            EnsDeLizResolver.resolveCallback.selector,
            abi.encode(name)
        );
    }
}
