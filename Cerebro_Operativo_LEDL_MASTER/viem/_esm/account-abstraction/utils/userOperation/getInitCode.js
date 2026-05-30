import { concat } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/data/concat.js';
export function getInitCode(userOperation, options = {}) {
    const { forHash } = options;
    const { authorization, factory, factoryData } = userOperation;
    if (forHash &&
        (factory === '0x7702' ||
            factory === '0x7702000000000000000000000000000000000000')) {
        if (!authorization)
            return '0x7702000000000000000000000000000000000000';
        return concat([authorization.address, factoryData ?? '0x']);
    }
    if (!factory)
        return '0x';
    return concat([factory, factoryData ?? '0x']);
}
//# sourceMappingURL=getInitCode.js.map