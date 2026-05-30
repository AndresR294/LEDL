"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClientImpl = void 0;
const axios_1 = __importStar(require("axios"));
const exceptions_1 = require("../../exceptions");
const version_1 = require("../../version");
const core_api_mapper_1 = require("./core-api-mapper");
const core_api_model_1 = require("./core-api.model");
class ApiClientImpl {
    api;
    constructor(params) {
        this.api = axios_1.default.create({
            baseURL: params.coreApiUrl,
            headers: {
                Accept: "application/json",
                ...params.coreApiHeaders,
                "x-Sdk-Agent": "AllbridgeCoreSDK/" + version_1.VERSION,
            },
            params: params.coreApiQueryParams,
        });
        if (params.coreApiHeadersProvider) {
            this.api.interceptors.request.use(async (config) => {
                const dynamicHeaders = await params.coreApiHeadersProvider?.();
                if (!dynamicHeaders || Object.keys(dynamicHeaders).length === 0) {
                    return config;
                }
                const headers = axios_1.AxiosHeaders.from(config.headers);
                for (const [headerName, headerValue] of Object.entries(dynamicHeaders)) {
                    if (!headerValue || headers.has(headerName)) {
                        continue;
                    }
                    headers.set(headerName, headerValue);
                }
                config.headers = headers;
                return config;
            });
        }
    }
    async getTokenInfo() {
        const { data } = await this.api.get("/token-info", { params: { filter: "all" } });
        return {
            chainDetailsMap: (0, core_api_mapper_1.mapChainDetailsResponseToChainDetailsMap)(data),
            poolInfoMap: (0, core_api_mapper_1.mapChainDetailsResponseToPoolInfoMap)(data),
        };
    }
    async getPendingInfo() {
        const { data } = await this.api.get("/pending-info");
        return data;
    }
    async getGasBalance(chainSymbol, address) {
        const { data } = await this.api.get(`/check/${chainSymbol}/${address}`);
        return data;
    }
    async getTransferStatus(chainSymbol, txId) {
        const { data } = await this.api.get(`/chain/${chainSymbol}/${txId}`);
        return data;
    }
    async getReceiveTransactionCost(args) {
        if (args.messenger === core_api_model_1.Messenger.OFT && !args.sourceToken) {
            throw new exceptions_1.InvalidMessengerOptionError("For OFT sourceToken required");
        }
        const { data } = await this.api.post("/receive-fee", args, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return {
            exchangeRate: data.exchangeRate,
            fee: data.fee,
            sourceNativeTokenPrice: data.sourceNativeTokenPrice,
            abrExchangeRate: data.abrExchangeRate,
            adminFeeShareWithExtras: data.adminFeeShareWithExtras,
        };
    }
    async getPoolInfoMap(pools) {
        const poolKeys = pools instanceof Array ? pools : [pools];
        const { data } = await this.api.post("/pool-info", { pools: poolKeys }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return (0, core_api_mapper_1.mapPoolInfoResponseToPoolInfoMap)(data);
    }
}
exports.ApiClientImpl = ApiClientImpl;
//# sourceMappingURL=api-client.js.map