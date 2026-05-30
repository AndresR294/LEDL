import { fillTransaction, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/public/fillTransaction.js';
import { getChainId, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/public/getChainId.js';
import { addChain, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/addChain.js';
import { deployContract, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/deployContract.js';
import { getAddresses, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/getAddresses.js';
import { getCallsStatus, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/getCallsStatus.js';
import { getCapabilities, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/getCapabilities.js';
import { getPermissions, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/getPermissions.js';
import { prepareAuthorization, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/prepareAuthorization.js';
import { prepareTransactionRequest, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js';
import { requestAddresses, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/requestAddresses.js';
import { requestPermissions, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/requestPermissions.js';
import { sendCalls, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/sendCalls.js';
import { sendCallsSync, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/sendCallsSync.js';
import { sendRawTransaction, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js';
import { sendRawTransactionSync, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/sendRawTransactionSync.js';
import { sendTransaction, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/sendTransaction.js';
import { sendTransactionSync, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/sendTransactionSync.js';
import { showCallsStatus, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/showCallsStatus.js';
import { signAuthorization, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/signAuthorization.js';
import { signMessage, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/signMessage.js';
import { signTransaction, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/signTransaction.js';
import { signTypedData, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/signTypedData.js';
import { switchChain, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/switchChain.js';
import { waitForCallsStatus, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/waitForCallsStatus.js';
import { watchAsset, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/watchAsset.js';
import { writeContract, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/writeContract.js';
import { writeContractSync, } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/wallet/writeContractSync.js';
export function walletActions(client) {
    return {
        addChain: (args) => addChain(client, args),
        deployContract: (args) => deployContract(client, args),
        fillTransaction: (args) => fillTransaction(client, args),
        getAddresses: () => getAddresses(client),
        getCallsStatus: (args) => getCallsStatus(client, args),
        getCapabilities: (args) => getCapabilities(client, args),
        getChainId: () => getChainId(client),
        getPermissions: () => getPermissions(client),
        prepareAuthorization: (args) => prepareAuthorization(client, args),
        prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
        requestAddresses: () => requestAddresses(client),
        requestPermissions: (args) => requestPermissions(client, args),
        sendCalls: (args) => sendCalls(client, args),
        sendCallsSync: (args) => sendCallsSync(client, args),
        sendRawTransaction: (args) => sendRawTransaction(client, args),
        sendRawTransactionSync: (args) => sendRawTransactionSync(client, args),
        sendTransaction: (args) => sendTransaction(client, args),
        sendTransactionSync: (args) => sendTransactionSync(client, args),
        showCallsStatus: (args) => showCallsStatus(client, args),
        signAuthorization: (args) => signAuthorization(client, args),
        signMessage: (args) => signMessage(client, args),
        signTransaction: (args) => signTransaction(client, args),
        signTypedData: (args) => signTypedData(client, args),
        switchChain: (args) => switchChain(client, args),
        waitForCallsStatus: (args) => waitForCallsStatus(client, args),
        watchAsset: (args) => watchAsset(client, args),
        writeContract: (args) => writeContract(client, args),
        writeContractSync: (args) => writeContractSync(client, args),
    };
}
//# sourceMappingURL=wallet.js.map