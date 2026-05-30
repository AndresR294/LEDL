"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getL1BaseFee = getL1BaseFee;
const readContract_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/actions/public/readContract.js");
const getChainContractAddress_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js");
const abis_js_1 = require("../abis.js");
const contracts_js_1 = require("../contracts.js");
async function getL1BaseFee(client, args) {
    const { chain = client.chain, gasPriceOracleAddress: gasPriceOracleAddress_, } = args || {};
    const gasPriceOracleAddress = (() => {
        if (gasPriceOracleAddress_)
            return gasPriceOracleAddress_;
        if (chain)
            return (0, getChainContractAddress_js_1.getChainContractAddress)({
                chain,
                contract: 'gasPriceOracle',
            });
        return contracts_js_1.contracts.gasPriceOracle.address;
    })();
    return (0, readContract_js_1.readContract)(client, {
        abi: abis_js_1.gasPriceOracleAbi,
        address: gasPriceOracleAddress,
        functionName: 'l1BaseFee',
    });
}
//# sourceMappingURL=getL1BaseFee.js.map