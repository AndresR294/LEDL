"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpendPermission = useSpendPermission;
const viem_1 = require("viem");
const constants_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../spend-permissions/constants.js");
const serializeTransaction_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/serializeTransaction.js");
/**
 * Use a spend permission to spend tokens.
 *
 * @param apiClient - The API client to use.
 * @param address - The address of the account to use the spend permission on.
 * @param options - The options for the spend permission.
 *
 * @returns The transaction hash of the spend permission.
 */
async function useSpendPermission(apiClient, address, options) {
    const { spendPermission, value, network } = options;
    const result = await apiClient.sendEvmTransaction(address, {
        transaction: (0, serializeTransaction_js_1.serializeEIP1559Transaction)({
            to: constants_js_1.SPEND_PERMISSION_MANAGER_ADDRESS,
            data: (0, viem_1.encodeFunctionData)({
                abi: constants_js_1.SPEND_PERMISSION_MANAGER_ABI,
                functionName: "spend",
                args: [spendPermission, value],
            }),
        }),
        network: network,
    });
    return {
        transactionHash: result.transactionHash,
    };
}
//# sourceMappingURL=account.use.js.map