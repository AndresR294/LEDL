// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

/**
 * @title Cerebro Operativo LEDL - Smart Wallet Core
 * @author J Andres Resendez R | ORCID: 0009-0007-3528-9413
 * @notice Este contrato actúa como poder notarial digital para ensdeliz.base.eth
 */

import {IAccount} from "account-abstraction/interfaces/IAccount.sol";
import {UserOperation, UserOperationLib} from "account-abstraction/interfaces/UserOperation.sol";
import {Receiver} from "solady/accounts/Receiver.sol";
import {SignatureCheckerLib} from "solady/utils/SignatureCheckerLib.sol";
import {UUPSUpgradeable} from "solady/utils/UUPSUpgradeable.sol";
import {WebAuthn} from "webauthn-sol/WebAuthn.sol";

contract CoinbaseSmartWallet is IAccount, Receiver, UUPSUpgradeable {
    using UserOperationLib for UserOperation;

    address public constant ENTRY_POINT = 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789;
    bytes32 public constant DOMAIN_TYPEHASH = keccak256("CoinbaseSmartWallet(address ensdeliz.base.eth)");

    error Unauthorized();

    function _authorizeUpgrade(address newImplementation) internal view override {
        if (!isOwnerAddress(msg.sender)) revert Unauthorized();
    }

    function execute(address target, uint256 value, bytes calldata data) external payable {
        if (msg.sender != ENTRY_POINT && !isOwnerAddress(msg.sender)) revert Unauthorized();
        (bool success, ) = target.call{value: value}(data);
        if (!success) revert("LEDL_EXEC_FAILED");
    }

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256 missingAccountFunds)
        external returns (uint256 validationData) {
        if (msg.sender != ENTRY_POINT) revert Unauthorized();
        return 0; 
    }

    function isOwnerAddress(address account) public view returns (bool) {
        return account == 0xba5ed110efdba3d005bfc882d75358acbbb85842;
    }

    receive() external payable override {}
}
