"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFungiblePostCondition = getFungiblePostCondition;
exports.getStxPostCondition = getStxPostCondition;
const transactions_1 = require("@stacks/transactions");
function getFungiblePostCondition(amount, condition, accountAddress, tokenAddress, tokenName) {
    const [assetAddress, assetContractName] = (0, transactions_1.parseContractId)(tokenAddress);
    if (!assetAddress || !assetContractName) {
        throw new Error(`Unable to parse stx token ${tokenAddress}`);
    }
    return {
        type: "ft-postcondition",
        address: accountAddress,
        condition,
        asset: `${assetAddress}.${assetContractName}::${tokenName}`,
        amount,
    };
}
function getStxPostCondition(amount, condition, accountAddress) {
    return {
        type: "stx-postcondition",
        address: accountAddress,
        condition,
        amount,
    };
}
//# sourceMappingURL=post-conditions.js.map