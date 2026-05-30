import { formatLog } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/formatters/log.js';
import { formatTransactionReceipt } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/formatters/transactionReceipt.js';
export function formatUserOperationReceipt(parameters) {
    const receipt = { ...parameters };
    if (parameters.actualGasCost)
        receipt.actualGasCost = BigInt(parameters.actualGasCost);
    if (parameters.actualGasUsed)
        receipt.actualGasUsed = BigInt(parameters.actualGasUsed);
    if (parameters.logs)
        receipt.logs = parameters.logs.map((log) => formatLog(log));
    if (parameters.receipt)
        receipt.receipt = formatTransactionReceipt(receipt.receipt);
    return receipt;
}
//# sourceMappingURL=userOperationReceipt.js.map