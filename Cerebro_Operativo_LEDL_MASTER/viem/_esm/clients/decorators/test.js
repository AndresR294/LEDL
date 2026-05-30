import { dropTransaction, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/dropTransaction.js';
import { dumpState, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/dumpState.js';
import { getAutomine, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/getAutomine.js';
import { getTxpoolContent, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/getTxpoolContent.js';
import { getTxpoolStatus, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/getTxpoolStatus.js';
import { impersonateAccount, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/impersonateAccount.js';
import { increaseTime, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/increaseTime.js';
import { inspectTxpool, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/inspectTxpool.js';
import { loadState, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/loadState.js';
import { mine } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/mine.js';
import { removeBlockTimestampInterval } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/removeBlockTimestampInterval.js';
import { reset } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/reset.js';
import { revert } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/revert.js';
import { sendUnsignedTransaction, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/sendUnsignedTransaction.js';
import { setAutomine } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setAutomine.js';
import { setBalance, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setBalance.js';
import { setBlockGasLimit, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setBlockGasLimit.js';
import { setBlockTimestampInterval, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setBlockTimestampInterval.js';
import { setCode } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setCode.js';
import { setCoinbase, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setCoinbase.js';
import { setIntervalMining, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setIntervalMining.js';
import { setLoggingEnabled } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setLoggingEnabled.js';
import { setMinGasPrice, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setMinGasPrice.js';
import { setNextBlockBaseFeePerGas, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setNextBlockBaseFeePerGas.js';
import { setNextBlockTimestamp, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setNextBlockTimestamp.js';
import { setNonce, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setNonce.js';
import { setRpcUrl } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setRpcUrl.js';
import { setStorageAt, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/setStorageAt.js';
import { snapshot } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/snapshot.js';
import { stopImpersonatingAccount, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/test/stopImpersonatingAccount.js';
export function testActions({ mode, }) {
    return (client_) => {
        const client = client_.extend(() => ({
            mode,
        }));
        return {
            dropTransaction: (args) => dropTransaction(client, args),
            dumpState: () => dumpState(client),
            getAutomine: () => getAutomine(client),
            getTxpoolContent: () => getTxpoolContent(client),
            getTxpoolStatus: () => getTxpoolStatus(client),
            impersonateAccount: (args) => impersonateAccount(client, args),
            increaseTime: (args) => increaseTime(client, args),
            inspectTxpool: () => inspectTxpool(client),
            loadState: (args) => loadState(client, args),
            mine: (args) => mine(client, args),
            removeBlockTimestampInterval: () => removeBlockTimestampInterval(client),
            reset: (args) => reset(client, args),
            revert: (args) => revert(client, args),
            sendUnsignedTransaction: (args) => sendUnsignedTransaction(client, args),
            setAutomine: (args) => setAutomine(client, args),
            setBalance: (args) => setBalance(client, args),
            setBlockGasLimit: (args) => setBlockGasLimit(client, args),
            setBlockTimestampInterval: (args) => setBlockTimestampInterval(client, args),
            setCode: (args) => setCode(client, args),
            setCoinbase: (args) => setCoinbase(client, args),
            setIntervalMining: (args) => setIntervalMining(client, args),
            setLoggingEnabled: (args) => setLoggingEnabled(client, args),
            setMinGasPrice: (args) => setMinGasPrice(client, args),
            setNextBlockBaseFeePerGas: (args) => setNextBlockBaseFeePerGas(client, args),
            setNextBlockTimestamp: (args) => setNextBlockTimestamp(client, args),
            setNonce: (args) => setNonce(client, args),
            setRpcUrl: (args) => setRpcUrl(client, args),
            setStorageAt: (args) => setStorageAt(client, args),
            snapshot: () => snapshot(client),
            stopImpersonatingAccount: (args) => stopImpersonatingAccount(client, args),
        };
    };
}
//# sourceMappingURL=test.js.map