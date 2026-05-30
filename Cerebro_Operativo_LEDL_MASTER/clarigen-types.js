"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stacksContracts = void 0;
exports.stacksContracts = {
    bridge: {
        functions: {
            assertCanSwap: {
                name: "assert-can-swap",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            assertGasOracle: {
                name: "assert-gas-oracle",
                access: "private",
                args: [{ name: "gas-oracle-ref", type: "trait_reference" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            assertMessenger: {
                name: "assert-messenger",
                access: "private",
                args: [
                    { name: "messenger-ref", type: "trait_reference" },
                    { name: "messenger-id", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            convertBridgingFeeInTokensToNative: {
                name: "convert-bridging-fee-in-tokens-to-native",
                access: "private",
                args: [
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "gas-oracle-ref", type: "trait_reference" },
                    { name: "fee-token-amount", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            onlyOwner: {
                name: "only-owner",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            onlyStopAuthority: {
                name: "only-stop-authority",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            receiveAndSwapFromVusd: {
                name: "receive-and-swap-from-vusd",
                access: "private",
                args: [
                    { name: "pool-ref", type: "trait_reference" },
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "recipient", type: "principal" },
                    { name: "vusd-amount", type: "uint128" },
                    { name: "receive-amount-min", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            sendAndSwapToVusd: {
                name: "send-and-swap-to-vusd",
                access: "private",
                args: [
                    { name: "pool-ref", type: "trait_reference" },
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "user", type: "principal" },
                    { name: "amount", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            sendTokens: {
                name: "send-tokens",
                access: "private",
                args: [
                    { name: "messenger-ref", type: "trait_reference" },
                    { name: "gas-oracle-ref", type: "trait_reference" },
                    { name: "amount", type: "uint128" },
                    { name: "recipient", type: { buffer: { length: 32 } } },
                    { name: "destination-chain-id", type: "uint128" },
                    { name: "receive-token", type: { buffer: { length: 32 } } },
                    { name: "nonce", type: { buffer: { length: 32 } } },
                    { name: "messenger-id", type: "uint128" },
                    { name: "bridging-fee", type: "uint128" },
                ],
                outputs: {
                    type: {
                        response: {
                            ok: {
                                tuple: [
                                    { name: "bridge-tx-cost", type: "uint128" },
                                    { name: "message-tx-cost", type: "uint128" },
                                ],
                            },
                            error: "uint128",
                        },
                    },
                },
            },
            addBridgeToken: {
                name: "add-bridge-token",
                access: "public",
                args: [
                    { name: "chain-id_", type: "uint128" },
                    { name: "token-address", type: { buffer: { length: 32 } } },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            addPool: {
                name: "add-pool",
                access: "public",
                args: [
                    { name: "pool-ref", type: "trait_reference" },
                    { name: "ft-ref", type: "trait_reference" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            getTransactionCost: {
                name: "get-transaction-cost",
                access: "public",
                args: [
                    { name: "gas-oracle-ref", type: "trait_reference" },
                    { name: "chain-id_", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            init: {
                name: "init",
                access: "public",
                args: [
                    { name: "this-chain-id_", type: "uint128" },
                    { name: "gas-oracle", type: "principal" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            receiveTokens: {
                name: "receive-tokens",
                access: "public",
                args: [
                    { name: "messenger-ref", type: "trait_reference" },
                    { name: "amount", type: "uint128" },
                    { name: "recipient", type: "principal" },
                    { name: "source-chain-id", type: "uint128" },
                    { name: "pool-ref", type: "trait_reference" },
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "nonce", type: { buffer: { length: 32 } } },
                    { name: "messenger-id", type: "uint128" },
                    { name: "receive-amount-min", type: "uint128" },
                    { name: "extra-gas", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            registerBridge: {
                name: "register-bridge",
                access: "public",
                args: [
                    { name: "chain-id_", type: "uint128" },
                    { name: "bridge-address", type: { buffer: { length: 32 } } },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            removeBridge: {
                name: "remove-bridge",
                access: "public",
                args: [{ name: "chain-id_", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            removeBridgeToken: {
                name: "remove-bridge-token",
                access: "public",
                args: [
                    { name: "chain-id_", type: "uint128" },
                    { name: "token-address", type: { buffer: { length: 32 } } },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            removeMessenger: {
                name: "remove-messenger",
                access: "public",
                args: [{ name: "messenger-id", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setGasUsage: {
                name: "set-gas-usage",
                access: "public",
                args: [
                    { name: "chain-id_", type: "uint128" },
                    { name: "gas", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setMessenger: {
                name: "set-messenger",
                access: "public",
                args: [
                    { name: "messenger-id", type: "uint128" },
                    { name: "new-messenger", type: "principal" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setOwner: {
                name: "set-owner",
                access: "public",
                args: [{ name: "new-owner", type: "principal" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setRebalancer: {
                name: "set-rebalancer",
                access: "public",
                args: [{ name: "new-rebalancer", type: "principal" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setStopAuthority: {
                name: "set-stop-authority",
                access: "public",
                args: [{ name: "new-authority", type: "principal" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            startSwap: {
                name: "start-swap",
                access: "public",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            stopSwap: {
                name: "stop-swap",
                access: "public",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            swap: {
                name: "swap",
                access: "public",
                args: [
                    { name: "amount", type: "uint128" },
                    { name: "send-pool-ref", type: "trait_reference" },
                    { name: "send-ft-ref", type: "trait_reference" },
                    { name: "receive-pool-ref", type: "trait_reference" },
                    { name: "receive-ft-ref", type: "trait_reference" },
                    { name: "recipient", type: "principal" },
                    { name: "receive-amount-min", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            swapAndBridge: {
                name: "swap-and-bridge",
                access: "public",
                args: [
                    { name: "pool-ref", type: "trait_reference" },
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "messenger-ref", type: "trait_reference" },
                    { name: "gas-oracle-ref", type: "trait_reference" },
                    { name: "amount", type: "uint128" },
                    { name: "recipient", type: { buffer: { length: 32 } } },
                    { name: "destination-chain-id", type: "uint128" },
                    { name: "receive-token", type: { buffer: { length: 32 } } },
                    { name: "nonce", type: { buffer: { length: 32 } } },
                    { name: "messenger-id", type: "uint128" },
                    { name: "fee-native-amount", type: "uint128" },
                    { name: "fee-token-amount", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            withdrawBridgingFeeInTokens: {
                name: "withdraw-bridging-fee-in-tokens",
                access: "public",
                args: [
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "amount", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            withdrawGasTokens: {
                name: "withdraw-gas-tokens",
                access: "public",
                args: [{ name: "amount", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            getGasOracleAddress: {
                name: "get-gas-oracle-address",
                access: "read_only",
                args: [],
                outputs: { type: "principal" },
            },
            getGasUsage: {
                name: "get-gas-usage",
                access: "read_only",
                args: [{ name: "chain-id_", type: "uint128" }],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            getMessenger: {
                name: "get-messenger",
                access: "read_only",
                args: [{ name: "messenger-id", type: "uint128" }],
                outputs: { type: { response: { ok: "principal", error: "uint128" } } },
            },
            getOtherBridge: {
                name: "get-other-bridge",
                access: "read_only",
                args: [{ name: "chain-id_", type: "uint128" }],
                outputs: { type: { response: { ok: { buffer: { length: 32 } }, error: "uint128" } } },
            },
            getOwner: {
                name: "get-owner",
                access: "read_only",
                args: [],
                outputs: { type: "principal" },
            },
            getProcessedMessageStatus: {
                name: "get-processed-message-status",
                access: "read_only",
                args: [{ name: "message-hash", type: { buffer: { length: 32 } } }],
                outputs: { type: { response: { ok: "bool", error: "none" } } },
            },
            getRebalancer: {
                name: "get-rebalancer",
                access: "read_only",
                args: [],
                outputs: { type: "principal" },
            },
            getSentMessageStatus: {
                name: "get-sent-message-status",
                access: "read_only",
                args: [{ name: "message-hash", type: { buffer: { length: 32 } } }],
                outputs: { type: { response: { ok: "bool", error: "none" } } },
            },
            getStopAuthority: {
                name: "get-stop-authority",
                access: "read_only",
                args: [],
                outputs: { type: "principal" },
            },
            getThisChainId: {
                name: "get-this-chain-id",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            getTokenInfo: {
                name: "get-token-info",
                access: "read_only",
                args: [{ name: "token-principal-hash", type: { buffer: { length: 32 } } }],
                outputs: {
                    type: {
                        response: {
                            ok: {
                                tuple: [
                                    { name: "bridging-fee-conversion-scaling-factor", type: "uint128" },
                                    { name: "from-gas-oracle-scaling-factor", type: "uint128" },
                                    { name: "pool", type: "principal" },
                                    { name: "token", type: "principal" },
                                ],
                            },
                            error: "uint128",
                        },
                    },
                },
            },
            isBridgeTokenSupported: {
                name: "is-bridge-token-supported",
                access: "read_only",
                args: [
                    { name: "chain-id_", type: "uint128" },
                    { name: "token-address", type: { buffer: { length: 32 } } },
                ],
                outputs: { type: { response: { ok: "bool", error: "none" } } },
            },
            isSwapEnabled: {
                name: "is-swap-enabled",
                access: "read_only",
                args: [],
                outputs: { type: "bool" },
            },
        },
        maps: {
            gasUsageMap: { name: "gas-usage-map", key: "uint128", value: "uint128" },
            messengers: { name: "messengers", key: "uint128", value: "principal" },
            otherBridgeTokens: {
                name: "other-bridge-tokens",
                key: {
                    tuple: [
                        { name: "chain-id", type: "uint128" },
                        { name: "token-address", type: { buffer: { length: 32 } } },
                    ],
                },
                value: "bool",
            },
            otherBridges: { name: "other-bridges", key: "uint128", value: { buffer: { length: 32 } } },
            processedMessages: { name: "processed-messages", key: { buffer: { length: 32 } }, value: "bool" },
            sentMessages: { name: "sent-messages", key: { buffer: { length: 32 } }, value: "bool" },
            tokenInfos: {
                name: "token-infos",
                key: { buffer: { length: 32 } },
                value: {
                    tuple: [
                        { name: "bridging-fee-conversion-scaling-factor", type: "uint128" },
                        { name: "from-gas-oracle-scaling-factor", type: "uint128" },
                        { name: "pool", type: "principal" },
                        { name: "token", type: "principal" },
                    ],
                },
            },
        },
        variables: {
            chainPrecision: {
                name: "chain-precision",
                type: "uint128",
                access: "constant",
            },
            errAlreadyInitialized: {
                name: "err-already-initialized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errAlreadyProcessed: {
                name: "err-already-processed",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errAlreadySent: {
                name: "err-already-sent",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errBridgeSourceNotRegistered: {
                name: "err-bridge-source-not-registered",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errDepositAmountTooSmall: {
                name: "err-deposit-amount-too-small",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errGasUsageNotSet: {
                name: "err-gas-usage-not-set",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errMessengerNotRegistered: {
                name: "err-messenger-not-registered",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errNoMessage: {
                name: "err-no-message",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errNotEnoughFee: {
                name: "err-not-enough-fee",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errNotInitialized: {
                name: "err-not-initialized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errSwapProhibited: {
                name: "err-swap-prohibited",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errTokenNotSupported: {
                name: "err-token-not-supported",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errUnauthorized: {
                name: "err-unauthorized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongGasOracle: {
                name: "err-wrong-gas-oracle",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongMessenger: {
                name: "err-wrong-messenger",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongTokenForPool: {
                name: "err-wrong-token-for-pool",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            oraclePrecision: {
                name: "oracle-precision",
                type: "uint128",
                access: "constant",
            },
            canSwap: {
                name: "can-swap",
                type: "bool",
                access: "variable",
            },
            gasOraclePrincipal: {
                name: "gas-oracle-principal",
                type: {
                    optional: "principal",
                },
                access: "variable",
            },
            owner: {
                name: "owner",
                type: "principal",
                access: "variable",
            },
            rebalancer: {
                name: "rebalancer",
                type: "principal",
                access: "variable",
            },
            stopAuthority: {
                name: "stop-authority",
                type: "principal",
                access: "variable",
            },
            thisChainId: {
                name: "this-chain-id",
                type: {
                    optional: "uint128",
                },
                access: "variable",
            },
        },
        constants: {
            canSwap: false,
            chainPrecision: 6n,
            errAlreadyInitialized: {
                isOk: false,
                value: 1004n,
            },
            errAlreadyProcessed: {
                isOk: false,
                value: 1010n,
            },
            errAlreadySent: {
                isOk: false,
                value: 1005n,
            },
            errBridgeSourceNotRegistered: {
                isOk: false,
                value: 1009n,
            },
            errDepositAmountTooSmall: {
                isOk: false,
                value: 1001n,
            },
            errGasUsageNotSet: {
                isOk: false,
                value: 1008n,
            },
            errMessengerNotRegistered: {
                isOk: false,
                value: 1014n,
            },
            errNoMessage: {
                isOk: false,
                value: 1011n,
            },
            errNotEnoughFee: {
                isOk: false,
                value: 1007n,
            },
            errNotInitialized: {
                isOk: false,
                value: 1006n,
            },
            errSwapProhibited: {
                isOk: false,
                value: 1012n,
            },
            errTokenNotSupported: {
                isOk: false,
                value: 1002n,
            },
            errUnauthorized: {
                isOk: false,
                value: 1000n,
            },
            errWrongGasOracle: {
                isOk: false,
                value: 1013n,
            },
            errWrongMessenger: {
                isOk: false,
                value: 1015n,
            },
            errWrongTokenForPool: {
                isOk: false,
                value: 1003n,
            },
            gasOraclePrincipal: null,
            oraclePrecision: 18n,
            owner: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
            rebalancer: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
            stopAuthority: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
            thisChainId: null,
        },
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "bridge",
    },
    ftToken: {
        functions: {
            getTokenUri: {
                name: "get-token-uri",
                access: "public",
                args: [],
                outputs: { type: { response: { ok: { optional: { "string-utf8": { length: 19 } } }, error: "none" } } },
            },
            mint: {
                name: "mint",
                access: "public",
                args: [
                    { name: "amount", type: "uint128" },
                    { name: "recipient", type: "principal" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            transfer: {
                name: "transfer",
                access: "public",
                args: [
                    { name: "amount", type: "uint128" },
                    { name: "sender", type: "principal" },
                    { name: "recipient", type: "principal" },
                    { name: "memo", type: { optional: { buffer: { length: 34 } } } },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            getBalance: {
                name: "get-balance",
                access: "read_only",
                args: [{ name: "owner", type: "principal" }],
                outputs: { type: { response: { ok: "uint128", error: "none" } } },
            },
            getDecimals: {
                name: "get-decimals",
                access: "read_only",
                args: [],
                outputs: { type: { response: { ok: "uint128", error: "none" } } },
            },
            getName: {
                name: "get-name",
                access: "read_only",
                args: [],
                outputs: { type: { response: { ok: { "string-ascii": { length: 13 } }, error: "none" } } },
            },
            getSymbol: {
                name: "get-symbol",
                access: "read_only",
                args: [],
                outputs: { type: { response: { ok: { "string-ascii": { length: 7 } }, error: "none" } } },
            },
            getTotalSupply: {
                name: "get-total-supply",
                access: "read_only",
                args: [],
                outputs: { type: { response: { ok: "uint128", error: "none" } } },
            },
        },
        maps: {},
        variables: {},
        constants: {},
        non_fungible_tokens: [],
        fungible_tokens: [{ name: "example-token" }],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "ft-token",
    },
    gasOracle: {
        functions: {
            setChainData: {
                name: "set-chain-data",
                access: "public",
                args: [
                    { name: "chain-id_", type: "uint128" },
                    { name: "new-price", type: "uint128" },
                    { name: "new-gas-price", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setGasPrice: {
                name: "set-gas-price",
                access: "public",
                args: [
                    { name: "chain-id_", type: "uint128" },
                    { name: "new-gas-price", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setPrice: {
                name: "set-price",
                access: "public",
                args: [
                    { name: "chain-id_", type: "uint128" },
                    { name: "new-price", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            crossRate: {
                name: "cross-rate",
                access: "read_only",
                args: [{ name: "other-chain-id", type: "uint128" }],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            getChainData: {
                name: "get-chain-data",
                access: "read_only",
                args: [{ name: "chain-id_", type: "uint128" }],
                outputs: {
                    type: {
                        response: {
                            ok: {
                                tuple: [
                                    { name: "gas-price", type: "uint128" },
                                    { name: "price", type: "uint128" },
                                ],
                            },
                            error: "uint128",
                        },
                    },
                },
            },
            getGasPrice: {
                name: "get-gas-price",
                access: "read_only",
                args: [{ name: "chain-id_", type: "uint128" }],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            getPrice: {
                name: "get-price",
                access: "read_only",
                args: [{ name: "chain-id_", type: "uint128" }],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            getTransactionGasCostInNativeToken: {
                name: "get-transaction-gas-cost-in-native-token",
                access: "read_only",
                args: [
                    { name: "other-chain-id", type: "uint128" },
                    { name: "gas-amount", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            getTransactionGasCostInUsd: {
                name: "get-transaction-gas-cost-in-usd",
                access: "read_only",
                args: [
                    { name: "other-chain-id", type: "uint128" },
                    { name: "gas-amount", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
        },
        maps: {
            chainData: {
                name: "chain-data",
                key: "uint128",
                value: {
                    tuple: [
                        { name: "gas-price", type: "uint128" },
                        { name: "price", type: "uint128" },
                    ],
                },
            },
        },
        variables: {
            errNotFound: {
                name: "err-not-found",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errUnauthorized: {
                name: "err-unauthorized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            oracleScalingFactor: {
                name: "oracle-scaling-factor",
                type: "uint128",
                access: "constant",
            },
            contractOwner: {
                name: "contract-owner",
                type: "principal",
                access: "variable",
            },
            fromOracleToChainScalingFactor: {
                name: "from-oracle-to-chain-scaling-factor",
                type: "uint128",
                access: "variable",
            },
            thisChainId: {
                name: "this-chain-id",
                type: "uint128",
                access: "variable",
            },
        },
        constants: {
            contractOwner: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
            errNotFound: {
                isOk: false,
                value: 4001n,
            },
            errUnauthorized: {
                isOk: false,
                value: 4000n,
            },
            fromOracleToChainScalingFactor: 1000000000000n,
            oracleScalingFactor: 1000000000000000000n,
            thisChainId: 16n,
        },
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "gas-oracle",
    },
    gasOracleTrait: {
        functions: {},
        maps: {},
        variables: {},
        constants: {},
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "gas-oracle-trait",
    },
    messenger: {
        functions: {
            assertGasOracle: {
                name: "assert-gas-oracle",
                access: "private",
                args: [{ name: "gas-oracle-ref", type: "trait_reference" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            onlyOwner: {
                name: "only-owner",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            addSecondaryValidator: {
                name: "add-secondary-validator",
                access: "public",
                args: [{ name: "val", type: { buffer: { length: 33 } } }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            getTransactionCost: {
                name: "get-transaction-cost",
                access: "public",
                args: [
                    { name: "gas-oracle-ref", type: "trait_reference" },
                    { name: "chain-id_", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            init: {
                name: "init",
                access: "public",
                args: [
                    { name: "this-chain-id_", type: "uint128" },
                    { name: "gas-oracle", type: "principal" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            receiveMessage: {
                name: "receive-message",
                access: "public",
                args: [
                    { name: "message", type: { buffer: { length: 32 } } },
                    { name: "signature1", type: { buffer: { length: 65 } } },
                    { name: "signature2", type: { buffer: { length: 65 } } },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            removeSecondaryValidator: {
                name: "remove-secondary-validator",
                access: "public",
                args: [{ name: "val", type: { buffer: { length: 33 } } }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            sendMessage: {
                name: "send-message",
                access: "public",
                args: [
                    { name: "gas-oracle-ref", type: "trait_reference" },
                    { name: "message", type: { buffer: { length: 32 } } },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            setGasUsage: {
                name: "set-gas-usage",
                access: "public",
                args: [
                    { name: "chain-id_", type: "uint128" },
                    { name: "gas", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setOtherChainIds: {
                name: "set-other-chain-ids",
                access: "public",
                args: [{ name: "value", type: { buffer: { length: 32 } } }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setPrimaryValidator: {
                name: "set-primary-validator",
                access: "public",
                args: [{ name: "val", type: { buffer: { length: 33 } } }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            withdrawGasTokens: {
                name: "withdraw-gas-tokens",
                access: "public",
                args: [{ name: "amount", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            getGasOracle: {
                name: "get-gas-oracle",
                access: "read_only",
                args: [],
                outputs: { type: { response: { ok: "principal", error: "uint128" } } },
            },
            getGasUsage: {
                name: "get-gas-usage",
                access: "read_only",
                args: [{ name: "chain-id_", type: "uint128" }],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            getOtherChainIds: {
                name: "get-other-chain-ids",
                access: "read_only",
                args: [],
                outputs: { type: { response: { ok: { buffer: { length: 32 } }, error: "none" } } },
            },
            getSentMessageBlock: {
                name: "get-sent-message-block",
                access: "read_only",
                args: [{ name: "message", type: { buffer: { length: 32 } } }],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            getThisChainId: {
                name: "get-this-chain-id",
                access: "read_only",
                args: [],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            isMessageReceived: {
                name: "is-message-received",
                access: "read_only",
                args: [{ name: "message", type: { buffer: { length: 32 } } }],
                outputs: { type: { response: { ok: "bool", error: "none" } } },
            },
        },
        maps: {
            gasUsageMap: { name: "gas-usage-map", key: "uint128", value: "uint128" },
            receivedMessages: { name: "received-messages", key: { buffer: { length: 32 } }, value: "bool" },
            secondaryValidators: {
                name: "secondary-validators",
                key: { buffer: { length: 33 } },
                value: "bool",
            },
            sentMessagesBlock: {
                name: "sent-messages-block",
                key: { buffer: { length: 32 } },
                value: "uint128",
            },
        },
        variables: {
            errAlreadyInitialized: {
                name: "err-already-initialized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errAlreadySent: {
                name: "err-already-sent",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errGasUsageNotSet: {
                name: "err-gas-usage-not-set",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errInvalidChainId: {
                name: "err-invalid-chain-id",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errInvalidDestination: {
                name: "err-invalid-destination",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errInvalidPrimary: {
                name: "err-invalid-primary",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errInvalidSecondary: {
                name: "err-invalid-secondary",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errMessageNotFound: {
                name: "err-message-not-found",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errNotInitialized: {
                name: "err-not-initialized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errUnauthorized: {
                name: "err-unauthorized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongBufferLength: {
                name: "err-wrong-buffer-length",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongGasOracle: {
                name: "err-wrong-gas-oracle",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            gasOraclePrincipal: {
                name: "gas-oracle-principal",
                type: {
                    optional: "principal",
                },
                access: "variable",
            },
            otherChainIds: {
                name: "other-chain-ids",
                type: {
                    buffer: {
                        length: 32,
                    },
                },
                access: "variable",
            },
            owner: {
                name: "owner",
                type: "principal",
                access: "variable",
            },
            primaryValidator: {
                name: "primary-validator",
                type: {
                    buffer: {
                        length: 33,
                    },
                },
                access: "variable",
            },
            thisChainId: {
                name: "this-chain-id",
                type: {
                    optional: "uint128",
                },
                access: "variable",
            },
        },
        constants: {
            errAlreadyInitialized: {
                isOk: false,
                value: 3008n,
            },
            errAlreadySent: {
                isOk: false,
                value: 3003n,
            },
            errGasUsageNotSet: {
                isOk: false,
                value: 3010n,
            },
            errInvalidChainId: {
                isOk: false,
                value: 3002n,
            },
            errInvalidDestination: {
                isOk: false,
                value: 3004n,
            },
            errInvalidPrimary: {
                isOk: false,
                value: 3005n,
            },
            errInvalidSecondary: {
                isOk: false,
                value: 3006n,
            },
            errMessageNotFound: {
                isOk: false,
                value: 3001n,
            },
            errNotInitialized: {
                isOk: false,
                value: 3011n,
            },
            errUnauthorized: {
                isOk: false,
                value: 3000n,
            },
            errWrongBufferLength: {
                isOk: false,
                value: 3009n,
            },
            errWrongGasOracle: {
                isOk: false,
                value: 3007n,
            },
            gasOraclePrincipal: null,
            otherChainIds: Uint8Array.from([
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            owner: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
            primaryValidator: Uint8Array.from([
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
            thisChainId: null,
        },
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "messenger",
    },
    messengerTrait: {
        functions: {},
        maps: {},
        variables: {},
        constants: {},
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "messenger-trait",
    },
    pool: {
        functions: {
            addRewards: {
                name: "add-rewards",
                access: "private",
                args: [{ name: "amount", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "none" } } },
            },
            assertBalanceReatio: {
                name: "assert-balance-reatio",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            assertCanDeposit: {
                name: "assert-can-deposit",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            assertCanSwap: {
                name: "assert-can-swap",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            assertCanWithdraw: {
                name: "assert-can-withdraw",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            assertToken: {
                name: "assert-token",
                access: "private",
                args: [{ name: "ft-ref", type: "trait_reference" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            depositLp: {
                name: "deposit-lp",
                access: "private",
                args: [
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "to", type: "principal" },
                    { name: "lp-amount", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            leCube_q: {
                name: "le-cube?",
                access: "private",
                args: [
                    { name: "x", type: "uint128" },
                    { name: "n", type: "uint128" },
                ],
                outputs: { type: "bool" },
            },
            newtonStep: {
                name: "newton-step",
                access: "private",
                args: [
                    { name: "n", type: "uint128" },
                    { name: "x", type: "uint128" },
                ],
                outputs: { type: "uint128" },
            },
            onlyBridge: {
                name: "only-bridge",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            onlyOwner: {
                name: "only-owner",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            onlyStopAuthority: {
                name: "only-stop-authority",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            refine: {
                name: "refine",
                access: "private",
                args: [
                    { name: "n", type: "uint128" },
                    { name: "x", type: "uint128" },
                ],
                outputs: { type: "uint128" },
            },
            withdrawLp: {
                name: "withdraw-lp",
                access: "private",
                args: [
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "from", type: "principal" },
                    { name: "lp-amount", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            adjustTotalLpAmount: {
                name: "adjust-total-lp-amount",
                access: "public",
                args: [{ name: "ft-ref", type: "trait_reference" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            claimAdminFee: {
                name: "claim-admin-fee",
                access: "public",
                args: [{ name: "ft-ref", type: "trait_reference" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            claimRewards: {
                name: "claim-rewards",
                access: "public",
                args: [{ name: "ft-ref", type: "trait_reference" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            deposit: {
                name: "deposit",
                access: "public",
                args: [
                    { name: "amount", type: "uint128" },
                    { name: "ft-ref", type: "trait_reference" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            init: {
                name: "init",
                access: "public",
                args: [
                    { name: "token", type: "trait_reference" },
                    { name: "bridge-address", type: "principal" },
                    { name: "fee-share-bp-arg", type: "uint128" },
                    { name: "balance-ratio-min-bp-arg", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            serBalanceRetioMinBp: {
                name: "ser-balance-retio-min-bp",
                access: "public",
                args: [{ name: "new-balance-ratio-min-bp", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setAdminFeeSahreBp: {
                name: "set-admin-fee-sahre-bp",
                access: "public",
                args: [{ name: "new-admin-fee-share-bp", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setBridge: {
                name: "set-bridge",
                access: "public",
                args: [{ name: "new-bridge", type: "principal" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setFeeShare: {
                name: "set-fee-share",
                access: "public",
                args: [{ name: "fee-share-bp_", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setOwner: {
                name: "set-owner",
                access: "public",
                args: [{ name: "new-owner", type: "principal" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setStopAuthority: {
                name: "set-stop-authority",
                access: "public",
                args: [{ name: "new-stop-authority", type: "principal" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            startDeposit: {
                name: "start-deposit",
                access: "public",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            startSwap: {
                name: "start-swap",
                access: "public",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            startWithdraw: {
                name: "start-withdraw",
                access: "public",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            stopDeposit: {
                name: "stop-deposit",
                access: "public",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            stopSwap: {
                name: "stop-swap",
                access: "public",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            stopWithdraw: {
                name: "stop-withdraw",
                access: "public",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            swapFromVusd: {
                name: "swap-from-vusd",
                access: "public",
                args: [
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "user", type: "principal" },
                    { name: "amount", type: "uint128" },
                    { name: "receive-amount-min", type: "uint128" },
                    { name: "zero-fee", type: "bool" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            swapToVusd: {
                name: "swap-to-vusd",
                access: "public",
                args: [
                    { name: "ft-ref", type: "trait_reference" },
                    { name: "user", type: "principal" },
                    { name: "amount", type: "uint128" },
                    { name: "zero-fee", type: "bool" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            withdraw: {
                name: "withdraw",
                access: "public",
                args: [
                    { name: "amount-lp", type: "uint128" },
                    { name: "ft-ref", type: "trait_reference" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            calcD: {
                name: "calc-d",
                access: "read_only",
                args: [
                    { name: "x", type: "uint128" },
                    { name: "y", type: "uint128" },
                ],
                outputs: { type: "uint128" },
            },
            calcY: {
                name: "calc-y",
                access: "read_only",
                args: [
                    { name: "x", type: "uint128" },
                    { name: "d_", type: "uint128" },
                ],
                outputs: { type: "uint128" },
            },
            cbrt: {
                name: "cbrt",
                access: "read_only",
                args: [{ name: "n", type: "uint128" }],
                outputs: { type: "uint128" },
            },
            fromSystemPrecision: {
                name: "from-system-precision",
                access: "read_only",
                args: [{ name: "amount", type: "uint128" }],
                outputs: { type: "uint128" },
            },
            getAccRewardPerShareP: {
                name: "get-acc-reward-per-share-p",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            getAdminFeeAmount: {
                name: "get-admin-fee-amount",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            getAdminFeeShareBp: {
                name: "get-admin-fee-share-bp",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            getBalanceRatioMinBp: {
                name: "get-balance-ratio-min-bp",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            getBridge: {
                name: "get-bridge",
                access: "read_only",
                args: [],
                outputs: { type: { optional: "principal" } },
            },
            getCanDeposit: {
                name: "get-can-deposit",
                access: "read_only",
                args: [],
                outputs: { type: "bool" },
            },
            getCanSwap: {
                name: "get-can-swap",
                access: "read_only",
                args: [],
                outputs: { type: "bool" },
            },
            getCanWithdraw: {
                name: "get-can-withdraw",
                access: "read_only",
                args: [],
                outputs: { type: "bool" },
            },
            getD: { name: "get-d", access: "read_only", args: [], outputs: { type: "uint128" } },
            getFeeShareBp: {
                name: "get-fee-share-bp",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            getLpBalance: {
                name: "get-lp-balance",
                access: "read_only",
                args: [{ name: "user", type: "principal" }],
                outputs: { type: "uint128" },
            },
            getLpTotalSupply: {
                name: "get-lp-total-supply",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            getOwner: {
                name: "get-owner",
                access: "read_only",
                args: [],
                outputs: { type: "principal" },
            },
            getReserves: {
                name: "get-reserves",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            getStopAuthority: {
                name: "get-stop-authority",
                access: "read_only",
                args: [],
                outputs: { type: "principal" },
            },
            getTokenAddress: {
                name: "get-token-address",
                access: "read_only",
                args: [],
                outputs: { type: { response: { ok: "principal", error: "uint128" } } },
            },
            getTokenBalance: {
                name: "get-token-balance",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            getUserRewardDebt: {
                name: "get-user-reward-debt",
                access: "read_only",
                args: [{ name: "user", type: "principal" }],
                outputs: { type: "uint128" },
            },
            getVusdBalance: {
                name: "get-vusd-balance",
                access: "read_only",
                args: [],
                outputs: { type: "uint128" },
            },
            pendingRewards: {
                name: "pending-rewards",
                access: "read_only",
                args: [{ name: "user", type: "principal" }],
                outputs: { type: { response: { ok: "uint128", error: "none" } } },
            },
            toSystemPrecision: {
                name: "to-system-precision",
                access: "read_only",
                args: [{ name: "amount", type: "uint128" }],
                outputs: { type: "uint128" },
            },
        },
        maps: {
            lpBalances: { name: "lp-balances", key: "principal", value: "uint128" },
            userRewardDebt: { name: "user-reward-debt", key: "principal", value: "uint128" },
        },
        variables: {
            BP: {
                name: "BP",
                type: "uint128",
                access: "constant",
            },
            P: {
                name: "P",
                type: "uint128",
                access: "constant",
            },
            a: {
                name: "a",
                type: "uint128",
                access: "constant",
            },
            errAlreadyInitialized: {
                name: "err-already-initialized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errDepositAmountTooSmall: {
                name: "err-deposit-amount-too-small",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errDepositProhibited: {
                name: "err-deposit-prohibited",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errLowTokenBalance: {
                name: "err-low-token-balance",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errLowVusdBalance: {
                name: "err-low-vusd-balance",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errNotEnoughLp: {
                name: "err-not-enough-lp",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errNotEnoughReserves: {
                name: "err-not-enough-reserves",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errNotInitialized: {
                name: "err-not-initialized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errPoolBalanceTooBig: {
                name: "err-pool-balance-too-big",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errSlippage: {
                name: "err-slippage",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errSwapProhibited: {
                name: "err-swap-prohibited",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errTooLarge: {
                name: "err-too-large",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errUnauthorized: {
                name: "err-unauthorized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWithdrawProhibited: {
                name: "err-withdraw-prohibited",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongToken: {
                name: "err-wrong-token",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errZeroChanges: {
                name: "err-zero-changes",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errZeroDChanges: {
                name: "err-zero-d-changes",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            maxTokenBalance: {
                name: "max-token-balance",
                type: "uint128",
                access: "constant",
            },
            systemPrecision: {
                name: "system-precision",
                type: "uint128",
                access: "constant",
            },
            accRewardPerShareP: {
                name: "acc-reward-per-share-p",
                type: "uint128",
                access: "variable",
            },
            adminFeeAmount: {
                name: "admin-fee-amount",
                type: "uint128",
                access: "variable",
            },
            adminFeeShareBp: {
                name: "admin-fee-share-bp",
                type: "uint128",
                access: "variable",
            },
            balanceRatioMinBp: {
                name: "balance-ratio-min-bp",
                type: "uint128",
                access: "variable",
            },
            bridge: {
                name: "bridge",
                type: {
                    optional: "principal",
                },
                access: "variable",
            },
            canDeposit: {
                name: "can-deposit",
                type: "bool",
                access: "variable",
            },
            canSwap: {
                name: "can-swap",
                type: "bool",
                access: "variable",
            },
            canWithdraw: {
                name: "can-withdraw",
                type: "bool",
                access: "variable",
            },
            d: {
                name: "d",
                type: "uint128",
                access: "variable",
            },
            feeShareBp: {
                name: "fee-share-bp",
                type: "uint128",
                access: "variable",
            },
            lpTotalSupply: {
                name: "lp-total-supply",
                type: "uint128",
                access: "variable",
            },
            owner: {
                name: "owner",
                type: "principal",
                access: "variable",
            },
            reserves: {
                name: "reserves",
                type: "uint128",
                access: "variable",
            },
            stopAuthority: {
                name: "stop-authority",
                type: "principal",
                access: "variable",
            },
            tokenAmountIncrease: {
                name: "token-amount-increase",
                type: "uint128",
                access: "variable",
            },
            tokenAmountReduce: {
                name: "token-amount-reduce",
                type: "uint128",
                access: "variable",
            },
            tokenBalance: {
                name: "token-balance",
                type: "uint128",
                access: "variable",
            },
            tokenPrincipal: {
                name: "token-principal",
                type: {
                    optional: "principal",
                },
                access: "variable",
            },
            vusdBalance: {
                name: "vusd-balance",
                type: "uint128",
                access: "variable",
            },
        },
        constants: {
            BP: 10000n,
            P: 48n,
            a: 20n,
            accRewardPerShareP: 0n,
            adminFeeAmount: 0n,
            adminFeeShareBp: 0n,
            balanceRatioMinBp: 0n,
            bridge: null,
            canDeposit: true,
            canSwap: true,
            canWithdraw: true,
            d: 0n,
            errAlreadyInitialized: {
                isOk: false,
                value: 2007n,
            },
            errDepositAmountTooSmall: {
                isOk: false,
                value: 2001n,
            },
            errDepositProhibited: {
                isOk: false,
                value: 2013n,
            },
            errLowTokenBalance: {
                isOk: false,
                value: 2012n,
            },
            errLowVusdBalance: {
                isOk: false,
                value: 2011n,
            },
            errNotEnoughLp: {
                isOk: false,
                value: 2010n,
            },
            errNotEnoughReserves: {
                isOk: false,
                value: 2005n,
            },
            errNotInitialized: {
                isOk: false,
                value: 2006n,
            },
            errPoolBalanceTooBig: {
                isOk: false,
                value: 2002n,
            },
            errSlippage: {
                isOk: false,
                value: 2009n,
            },
            errSwapProhibited: {
                isOk: false,
                value: 2015n,
            },
            errTooLarge: {
                isOk: false,
                value: 2016n,
            },
            errUnauthorized: {
                isOk: false,
                value: 2000n,
            },
            errWithdrawProhibited: {
                isOk: false,
                value: 2014n,
            },
            errWrongToken: {
                isOk: false,
                value: 2008n,
            },
            errZeroChanges: {
                isOk: false,
                value: 2003n,
            },
            errZeroDChanges: {
                isOk: false,
                value: 2004n,
            },
            feeShareBp: 0n,
            lpTotalSupply: 0n,
            maxTokenBalance: 1000000000000n,
            owner: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
            reserves: 0n,
            stopAuthority: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
            systemPrecision: 3n,
            tokenAmountIncrease: 0n,
            tokenAmountReduce: 0n,
            tokenBalance: 0n,
            tokenPrincipal: null,
            vusdBalance: 0n,
        },
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "pool",
    },
    poolTrait: {
        functions: {},
        maps: {},
        variables: {},
        constants: {},
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "pool-trait",
    },
    sip010TraitFtStandard: {
        functions: {},
        maps: {},
        variables: {},
        constants: {},
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch21",
        clarity_version: "Clarity1",
        contractName: "sip-010-trait-ft-standard",
    },
    utils: {
        functions: {
            assertNotEmptyBuff32: {
                name: "assert-not-empty-buff-32",
                access: "read_only",
                args: [{ name: "b", type: { buffer: { length: 32 } } }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            bufferByte: {
                name: "buffer-byte",
                access: "read_only",
                args: [
                    { name: "b", type: { buffer: { length: 32 } } },
                    { name: "i", type: "uint128" },
                ],
                outputs: { type: { response: { ok: { buffer: { length: 1 } }, error: "uint128" } } },
            },
            bufferByteUint: {
                name: "buffer-byte-uint",
                access: "read_only",
                args: [
                    { name: "b", type: { buffer: { length: 32 } } },
                    { name: "i", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
            hashMessage: {
                name: "hash-message",
                access: "read_only",
                args: [
                    { name: "amount", type: "uint128" },
                    { name: "recipient", type: { buffer: { length: 32 } } },
                    { name: "source-chain-id", type: "uint128" },
                    { name: "destination-chain-id", type: "uint128" },
                    { name: "receive-token", type: { buffer: { length: 32 } } },
                    { name: "nonce", type: { buffer: { length: 32 } } },
                    { name: "messenger-id", type: "uint128" },
                ],
                outputs: { type: { response: { ok: { buffer: { length: 32 } }, error: "uint128" } } },
            },
            hashWithSenderAddress: {
                name: "hash-with-sender-address",
                access: "read_only",
                args: [
                    { name: "message", type: { buffer: { length: 32 } } },
                    { name: "sender", type: { buffer: { length: 32 } } },
                ],
                outputs: { type: { response: { ok: { buffer: { length: 32 } }, error: "uint128" } } },
            },
            principalHash: {
                name: "principal-hash",
                access: "read_only",
                args: [{ name: "value", type: "principal" }],
                outputs: { type: { buffer: { length: 32 } } },
            },
            principalToBuff32: {
                name: "principal-to-buff32",
                access: "read_only",
                args: [{ name: "value", type: "principal" }],
                outputs: { type: { buffer: { length: 32 } } },
            },
            stringToBuff: {
                name: "string-to-buff",
                access: "read_only",
                args: [{ name: "str", type: { "string-ascii": { length: 40 } } }],
                outputs: { type: { buffer: { length: 45 } } },
            },
            uintToBuff1: {
                name: "uint-to-buff-1",
                access: "read_only",
                args: [{ name: "value", type: "uint128" }],
                outputs: { type: { buffer: { length: 17 } } },
            },
            uintToBuff32: {
                name: "uint-to-buff-32",
                access: "read_only",
                args: [{ name: "value", type: "uint128" }],
                outputs: { type: { buffer: { length: 33 } } },
            },
        },
        maps: {},
        variables: {
            errEmptyBuffer: {
                name: "err-empty-buffer",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongBufferLength: {
                name: "err-wrong-buffer-length",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongMsgLength: {
                name: "err-wrong-msg-length",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            thisChainId: {
                name: "this-chain-id",
                type: "uint128",
                access: "constant",
            },
            zeroBytes12: {
                name: "zero-bytes-12",
                type: {
                    buffer: {
                        length: 12,
                    },
                },
                access: "constant",
            },
            zeroBytes16: {
                name: "zero-bytes-16",
                type: {
                    buffer: {
                        length: 16,
                    },
                },
                access: "constant",
            },
            zeroBytes32: {
                name: "zero-bytes-32",
                type: {
                    buffer: {
                        length: 32,
                    },
                },
                access: "constant",
            },
        },
        constants: {
            errEmptyBuffer: {
                isOk: false,
                value: 5002n,
            },
            errWrongBufferLength: {
                isOk: false,
                value: 5000n,
            },
            errWrongMsgLength: {
                isOk: false,
                value: 5001n,
            },
            thisChainId: 16n,
            zeroBytes12: Uint8Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            zeroBytes16: Uint8Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            zeroBytes32: Uint8Array.from([
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
        },
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "utils",
    },
    xReserveBridge: {
        functions: {
            assertBurn: {
                name: "assert-burn",
                access: "private",
                args: [{ name: "burn-ref", type: "trait_reference" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            assertToken: {
                name: "assert-token",
                access: "private",
                args: [{ name: "token-ref", type: "trait_reference" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            onlyOwner: {
                name: "only-owner",
                access: "private",
                args: [],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            bridge: {
                name: "bridge",
                access: "public",
                args: [
                    { name: "token-ref", type: "trait_reference" },
                    { name: "burn-ref", type: "trait_reference" },
                    { name: "amount", type: "uint128" },
                    { name: "recipient", type: { buffer: { length: 32 } } },
                    { name: "destination-chain-id", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            removeChainDomain: {
                name: "remove-chain-domain",
                access: "public",
                args: [{ name: "chain-id-in", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setAdminFee: {
                name: "set-admin-fee",
                access: "public",
                args: [{ name: "new-fee-bp", type: "uint128" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setBurnPrincipal: {
                name: "set-burn-principal",
                access: "public",
                args: [{ name: "new-burn-principal", type: "principal" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setChainDomain: {
                name: "set-chain-domain",
                access: "public",
                args: [
                    { name: "new-chain-id", type: "uint128" },
                    { name: "domain", type: "uint128" },
                ],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setOwner: {
                name: "set-owner",
                access: "public",
                args: [{ name: "new-owner", type: "principal" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            setTokenPrincipal: {
                name: "set-token-principal",
                access: "public",
                args: [{ name: "new-token-principal", type: "principal" }],
                outputs: { type: { response: { ok: "bool", error: "uint128" } } },
            },
            withdrawFees: {
                name: "withdraw-fees",
                access: "public",
                args: [
                    { name: "token-ref", type: "trait_reference" },
                    { name: "recipient", type: "principal" },
                ],
                outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
            },
        },
        maps: {
            chainIdToDomain: { name: "chain-id-to-domain", key: "uint128", value: "uint128" },
        },
        variables: {
            BP: {
                name: "BP",
                type: "uint128",
                access: "constant",
            },
            errInsufficientAmount: {
                name: "err-insufficient-amount",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errInvalidAmount: {
                name: "err-invalid-amount",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errNotFound: {
                name: "err-not-found",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errNotInitialized: {
                name: "err-not-initialized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errUnauthorized: {
                name: "err-unauthorized",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongBurn: {
                name: "err-wrong-burn",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            errWrongToken: {
                name: "err-wrong-token",
                type: {
                    response: {
                        ok: "none",
                        error: "uint128",
                    },
                },
                access: "constant",
            },
            adminFeeBp: {
                name: "admin-fee-bp",
                type: "uint128",
                access: "variable",
            },
            burnPrincipal: {
                name: "burn-principal",
                type: {
                    optional: "principal",
                },
                access: "variable",
            },
            owner: {
                name: "owner",
                type: "principal",
                access: "variable",
            },
            tokenPrincipal: {
                name: "token-principal",
                type: {
                    optional: "principal",
                },
                access: "variable",
            },
        },
        constants: {
            BP: 10000n,
            adminFeeBp: 0n,
            burnPrincipal: null,
            errInsufficientAmount: {
                isOk: false,
                value: 1001n,
            },
            errInvalidAmount: {
                isOk: false,
                value: 1002n,
            },
            errNotFound: {
                isOk: false,
                value: 1003n,
            },
            errNotInitialized: {
                isOk: false,
                value: 1004n,
            },
            errUnauthorized: {
                isOk: false,
                value: 1000n,
            },
            errWrongBurn: {
                isOk: false,
                value: 1006n,
            },
            errWrongToken: {
                isOk: false,
                value: 1005n,
            },
            owner: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
            tokenPrincipal: null,
        },
        non_fungible_tokens: [],
        fungible_tokens: [],
        epoch: "Epoch31",
        clarity_version: "Clarity3",
        contractName: "x-reserve-bridge",
    },
};
//# sourceMappingURL=clarigen-types.js.map