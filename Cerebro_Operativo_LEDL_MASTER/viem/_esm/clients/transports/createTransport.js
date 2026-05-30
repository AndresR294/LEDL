import { buildRequest } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/buildRequest.js';
import { uid as uid_ } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/uid.js';
/**
 * @description Creates an transport intended to be used with a client.
 */
export function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type, }, value) {
    const uid = uid_();
    return {
        config: {
            key,
            methods,
            name,
            request,
            retryCount,
            retryDelay,
            timeout,
            type,
        },
        request: buildRequest(request, { methods, retryCount, retryDelay, uid }),
        value,
    };
}
//# sourceMappingURL=createTransport.js.map