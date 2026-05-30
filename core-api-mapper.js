"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapChainDetailsResponseToChainDetailsMap = mapChainDetailsResponseToChainDetailsMap;
exports.mapChainDetailsResponseToPoolInfoMap = mapChainDetailsResponseToPoolInfoMap;
exports.mapPoolKeyToPoolKeyObject = mapPoolKeyToPoolKeyObject;
exports.mapPoolKeyObjectToPoolKey = mapPoolKeyObjectToPoolKey;
exports.mapChainDetailsMapToPoolKeyObjects = mapChainDetailsMapToPoolKeyObjects;
exports.mapPoolInfoResponseToPoolInfoMap = mapPoolInfoResponseToPoolInfoMap;
const chains_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/chains");
const calculation_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/calculation");
const core_api_model_1 = require("./core-api.model");
function mapChainDetailsResponseToChainDetailsMap(response) {
    return Object.entries(response).reduce((map, entry) => {
        const chainSymbol = entry[0];
        const chainDetailsDTO = entry[1];
        const chainDetails = mapChainDetailsFromDto(chainSymbol, chainDetailsDTO);
        if (chainDetails) {
            map[chainSymbol] = chainDetails;
        }
        return map;
    }, {});
}
function mapChainDetailsResponseToPoolInfoMap(response) {
    const poolInfoMap = {};
    for (const [chainSymbolValue, chainDetailsDTO] of Object.entries(response)) {
        const chainSymbol = chainSymbolValue;
        for (const token of chainDetailsDTO.tokens) {
            const poolKey = mapPoolKeyObjectToPoolKey({
                chainSymbol,
                poolAddress: token.poolAddress,
            });
            const imbalance = (0, calculation_1.calculatePoolInfoImbalance)(token.poolInfo);
            poolInfoMap[poolKey] = { ...token.poolInfo, imbalance };
        }
    }
    return poolInfoMap;
}
function mapTokenWithChainDetailsFromDto(chainDetails, dto) {
    const { name: chainName, ...chainDetailsWithoutName } = chainDetails;
    const { poolInfo: _poolInfo, ...dtoWithoutPoolInfo } = dto;
    return {
        ...dtoWithoutPoolInfo,
        ...chainDetailsWithoutName,
        chainName,
    };
}
function mapMessengerKeyDtoToMessenger(dto) {
    switch (dto) {
        case core_api_model_1.MessengerKeyDTO.ALLBRIDGE:
            return core_api_model_1.Messenger.ALLBRIDGE;
        case core_api_model_1.MessengerKeyDTO.WORMHOLE:
            return core_api_model_1.Messenger.WORMHOLE;
        case core_api_model_1.MessengerKeyDTO.CCTP:
            return core_api_model_1.Messenger.CCTP;
        case core_api_model_1.MessengerKeyDTO.CCTP_V2:
            return core_api_model_1.Messenger.CCTP_V2;
        case core_api_model_1.MessengerKeyDTO.OFT:
            return core_api_model_1.Messenger.OFT;
        case core_api_model_1.MessengerKeyDTO.X_RESERVE:
            return core_api_model_1.Messenger.X_RESERVE;
    }
}
function mapTransferTimeFromDto(dto) {
    return Object.entries(dto).reduce((result, [key, value]) => {
        result[key] = mapMessengerTransferTimeFromDto(value);
        return result;
    }, {});
}
function mapMessengerTransferTimeFromDto(dto) {
    return Object.entries(dto).reduce((messengerTransferTime, [key, value]) => {
        const messenger = mapMessengerKeyDtoToMessenger(key);
        if (messenger && value != null) {
            messengerTransferTime[messenger] = value;
        }
        return messengerTransferTime;
    }, {});
}
function mapChainDetailsFromDto(chainSymbol, dto) {
    const basicChainProperties = chains_1.Chains.getChainsProperties()[chainSymbol];
    if (!basicChainProperties) {
        return null;
    }
    const chainDetails = {
        ...basicChainProperties,
        allbridgeChainId: dto.chainId,
        bridgeId: dto.bridgeId,
        paddingUtilId: dto.paddingUtilId,
        bridgeAddress: dto.bridgeAddress,
        oftBridgeAddress: dto.oftBridgeAddress,
        yieldAddress: dto.yieldAddress,
        abrPayer: dto.abrPayer
            ? {
                payerAddress: dto.abrPayer.payerAddress,
                abrToken: {
                    chainSymbol: chainSymbol,
                    tokenAddress: dto.abrPayer.tokenAddress,
                    decimals: dto.abrPayer.tokenDecimals,
                },
                payerAvailability: mapAbrPayerAvailabilityFromDto(dto.abrPayer.payerAvailability),
            }
            : undefined,
        transferTime: mapTransferTimeFromDto(dto.transferTime),
        txCostAmount: dto.txCostAmount,
        confirmations: dto.confirmations,
        suiAddresses: dto.suiAddresses,
    };
    return {
        ...chainDetails,
        tokens: dto.tokens.map((tokenDto) => mapTokenWithChainDetailsFromDto(chainDetails, tokenDto)),
    };
}
function mapAbrPayerAvailabilityFromDto(dto) {
    if (!dto)
        return {};
    const out = {};
    for (const [dtoKey, isAvailable] of Object.entries(dto)) {
        if (!isAvailable)
            continue;
        const messengerEnumValue = dtoKeyToMessenger[dtoKey];
        if (!messengerEnumValue)
            continue;
        out[messengerEnumValue] = true;
    }
    return out;
}
// Build mapping from dto key ("allbridge") to Messenger enum value (1..5)
const dtoKeyToMessenger = Object.fromEntries(Object.entries(core_api_model_1.MessengerKeyDTO).map(([enumKey, dtoKey]) => {
    // enumKey: "ALLBRIDGE"
    // dtoKey:  "allbridge"
    return [dtoKey, core_api_model_1.Messenger[enumKey]];
}));
function mapPoolKeyToPoolKeyObject(poolKey) {
    const dividerPosition = poolKey.indexOf("_");
    return {
        chainSymbol: poolKey.substring(0, dividerPosition),
        poolAddress: poolKey.substring(dividerPosition + 1),
    };
}
function mapPoolKeyObjectToPoolKey(poolKeyObject) {
    return poolKeyObject.chainSymbol + "_" + poolKeyObject.poolAddress;
}
function mapChainDetailsMapToPoolKeyObjects(chainDetailsMap) {
    const result = [];
    for (const [chainSymbolValue, chainDetails] of Object.entries(chainDetailsMap)) {
        const chainSymbol = chainSymbolValue;
        for (const token of chainDetails.tokens) {
            result.push({
                chainSymbol,
                poolAddress: token.poolAddress,
            });
        }
    }
    return result;
}
function mapPoolInfoResponseToPoolInfoMap(responseBody) {
    const poolInfoMap = {};
    for (const [chainSymbolValue, poolInfoByAddress] of Object.entries(responseBody)) {
        const chainSymbol = chainSymbolValue;
        for (const [poolAddress, poolInfo] of Object.entries(poolInfoByAddress)) {
            poolInfo.imbalance = (0, calculation_1.calculatePoolInfoImbalance)(poolInfo);
            poolInfoMap[mapPoolKeyObjectToPoolKey({ chainSymbol, poolAddress })] = poolInfo;
        }
    }
    return poolInfoMap;
}
//# sourceMappingURL=core-api-mapper.js.map