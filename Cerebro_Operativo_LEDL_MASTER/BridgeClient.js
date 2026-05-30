"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeClient = exports.BridgeFactory = exports.BridgeParamsFactory = exports.APP_SPEC = void 0;
const app_arc56_1 = require("@algorandfoundation/algokit-utils/types/app-arc56");
const app_client_1 = require("@algorandfoundation/algokit-utils/types/app-client");
const app_factory_1 = require("@algorandfoundation/algokit-utils/types/app-factory");
exports.APP_SPEC = {
    name: "Bridge",
    structs: {},
    methods: [
        {
            name: "createApplication",
            args: [
                { type: "address", name: "owner" },
                { type: "byte", name: "chainId" },
                { type: "uint64", name: "messenger" },
                { type: "uint64", name: "gasOracle" },
            ],
            returns: { type: "void" },
            actions: { create: ["NoOp"], call: [] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "optInAsset",
            args: [{ type: "uint64", name: "asset" }],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "swapAndBridge",
            args: [
                { type: "pay", name: "paymentRef" },
                { type: "axfer", name: "assetTransferRef" },
                { type: "byte[32]", name: "recipient" },
                { type: "byte", name: "destinationChainId" },
                { type: "byte[32]", name: "receiveToken" },
                { type: "byte[32]", name: "nonce" },
                { type: "uint64", name: "budget", defaultValue: { source: "literal", data: "AAAAAAAAA+g=", type: "uint64" } },
            ],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [
                {
                    name: "BridgingFeeFromTokens",
                    args: [
                        { type: "uint64", name: "feeFromNative" },
                        { type: "uint64", name: "feeFromStable" },
                        { type: "uint64", name: "feeStableTokenAmount" },
                    ],
                },
                {
                    name: "ReceiveFee",
                    args: [
                        { type: "uint64", name: "bridgeTransactionCost" },
                        { type: "uint64", name: "messageTransactionCost" },
                    ],
                },
                {
                    name: "TokensSent",
                    args: [
                        { type: "uint64", name: "amount" },
                        { type: "byte[32]", name: "recipient" },
                        { type: "byte", name: "destinationChainId" },
                        { type: "byte[32]", name: "receiveToken" },
                        { type: "byte[32]", name: "nonce" },
                        { type: "byte", name: "messenger" },
                    ],
                },
            ],
            recommendations: {},
        },
        {
            name: "swapAndBridgeWithStable",
            args: [
                { type: "axfer", name: "assetTransferRef" },
                { type: "byte[32]", name: "recipient" },
                { type: "byte", name: "destinationChainId" },
                { type: "byte[32]", name: "receiveToken" },
                { type: "byte[32]", name: "nonce" },
                { type: "uint64", name: "feeTokenAmount" },
                { type: "uint64", name: "budget", defaultValue: { source: "literal", data: "AAAAAAAAA+g=", type: "uint64" } },
            ],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [
                {
                    name: "BridgingFeeFromTokens",
                    args: [
                        { type: "uint64", name: "feeFromNative" },
                        { type: "uint64", name: "feeFromStable" },
                        { type: "uint64", name: "feeStableTokenAmount" },
                    ],
                },
                {
                    name: "ReceiveFee",
                    args: [
                        { type: "uint64", name: "bridgeTransactionCost" },
                        { type: "uint64", name: "messageTransactionCost" },
                    ],
                },
                {
                    name: "TokensSent",
                    args: [
                        { type: "uint64", name: "amount" },
                        { type: "byte[32]", name: "recipient" },
                        { type: "byte", name: "destinationChainId" },
                        { type: "byte[32]", name: "receiveToken" },
                        { type: "byte[32]", name: "nonce" },
                        { type: "byte", name: "messenger" },
                    ],
                },
            ],
            recommendations: {},
        },
        {
            name: "receiveTokens",
            args: [
                { type: "pay", name: "paymentRef" },
                { type: "uint64", name: "amount" },
                { type: "byte[32]", name: "recipient" },
                { type: "byte", name: "sourceChainId" },
                { type: "byte[32]", name: "receiveToken" },
                { type: "byte[32]", name: "nonce" },
                { type: "uint64", name: "receiveAmountMin" },
            ],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [
                {
                    name: "TokensReceived",
                    args: [
                        { type: "uint64", name: "receiveAmount" },
                        { type: "address", name: "recipient" },
                        { type: "byte[32]", name: "nonce" },
                        { type: "byte", name: "messenger" },
                        { type: "byte[32]", name: "message" },
                    ],
                },
            ],
            recommendations: {},
        },
        {
            name: "registerBridge",
            args: [
                { type: "byte", name: "chainId" },
                { type: "byte[32]", name: "bridgeAddress" },
            ],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "addBridgeToken",
            args: [
                { type: "byte", name: "chainId" },
                { type: "byte[32]", name: "tokenAddress" },
            ],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "removeBridgeToken",
            args: [
                { type: "byte", name: "chainId" },
                { type: "byte[32]", name: "tokenAddress" },
            ],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "withdrawGasTokens",
            args: [{ type: "uint64", name: "amount" }],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "withdrawBridgingFeeInTokens",
            args: [{ type: "uint64", name: "asset" }],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "getBridgingCostInTokens",
            args: [
                { type: "byte", name: "destinationChainId" },
                { type: "uint64", name: "asset" },
            ],
            returns: { type: "uint64" },
            actions: { create: [], call: ["NoOp"] },
            readonly: true,
            events: [],
            recommendations: {},
        },
        {
            name: "hashMessage",
            args: [
                { type: "uint64", name: "amount" },
                { type: "byte[32]", name: "recipient" },
                { type: "byte", name: "sourceChainId" },
                { type: "byte", name: "destinationChainId" },
                { type: "byte[32]", name: "receiveToken" },
                { type: "byte[32]", name: "nonce" },
            ],
            returns: { type: "byte[32]" },
            actions: { create: [], call: ["NoOp"] },
            readonly: true,
            events: [],
            recommendations: {},
        },
        {
            name: "isOtherBridgeTokenSupported",
            args: [
                { type: "byte", name: "chainId" },
                { type: "byte[32]", name: "token" },
            ],
            returns: { type: "bool" },
            actions: { create: [], call: ["NoOp"] },
            readonly: true,
            events: [],
            recommendations: {},
        },
        {
            name: "getTransactionCost",
            args: [{ type: "byte", name: "chainId" }],
            returns: { type: "uint64" },
            actions: { create: [], call: ["NoOp"] },
            readonly: true,
            events: [],
            recommendations: {},
        },
        {
            name: "getReceiveTokensCost",
            args: [],
            returns: { type: "uint64" },
            actions: { create: [], call: ["NoOp"] },
            readonly: true,
            events: [],
            recommendations: {},
        },
        {
            name: "getSendTransactionStorageCost",
            args: [],
            returns: { type: "uint64" },
            actions: { create: [], call: ["NoOp"] },
            readonly: true,
            events: [],
            recommendations: {},
        },
        {
            name: "swap",
            args: [
                { type: "axfer", name: "assetTransferRef", desc: "The token to be swapped." },
                { type: "uint64", name: "receiveAsset", desc: "The token to receive in exchange for the swapped token." },
                { type: "address", name: "recipient", desc: "The address to receive the tokens." },
                {
                    type: "uint64",
                    name: "receiveAmountMin",
                    desc: "The minimum amount of tokens required to receive during the swap.",
                },
                { type: "uint64", name: "budget", defaultValue: { source: "literal", data: "AAAAAAAAA+g=", type: "uint64" } },
            ],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [
                {
                    name: "Swapped",
                    args: [
                        { type: "address", name: "sender" },
                        { type: "address", name: "recipient" },
                        { type: "uint64", name: "tokenId" },
                        { type: "uint64", name: "receiveTokenId" },
                        { type: "uint64", name: "amount" },
                        { type: "uint64", name: "receivedAmount" },
                    ],
                },
            ],
            recommendations: {},
        },
        {
            name: "addPool",
            args: [
                { type: "uint64", name: "poolId", desc: "The address of the `Pool` contract." },
                { type: "uint64", name: "asset", desc: "The address of the token in the liquidity pool." },
            ],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "removePool",
            args: [{ type: "uint64", name: "tokenId" }],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "stopSwap",
            args: [],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "startSwap",
            args: [],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "setStopAuthority",
            args: [{ type: "address", name: "stopAuthority" }],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "setRebalancer",
            args: [{ type: "address", name: "rebalancer" }],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "getGasUsage",
            args: [{ type: "byte", name: "chainId" }],
            returns: { type: "uint64" },
            actions: { create: [], call: ["NoOp"] },
            readonly: true,
            events: [],
            recommendations: {},
        },
        {
            name: "setGasUsage",
            args: [
                { type: "byte", name: "chainId" },
                { type: "uint64", name: "gasAmount" },
            ],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "setGasOracle",
            args: [{ type: "uint64", name: "gasOracle" }],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
        {
            name: "getTransactionRelayerCost",
            args: [{ type: "byte", name: "chainId" }],
            returns: { type: "uint64" },
            actions: { create: [], call: ["NoOp"] },
            readonly: true,
            events: [],
            recommendations: {},
        },
        {
            name: "transferOwnership",
            args: [{ type: "address", name: "newOwner" }],
            returns: { type: "void" },
            actions: { create: [], call: ["NoOp"] },
            readonly: false,
            events: [],
            recommendations: {},
        },
    ],
    arcs: [22, 28],
    networks: {},
    state: {
        schema: { global: { ints: 3, bytes: 4 }, local: { ints: 0, bytes: 0 } },
        keys: {
            global: {
                chainId: { keyType: "AVMString", valueType: "byte", key: "Y2hhaW5JZA==" },
                messenger: { keyType: "AVMString", valueType: "AVMUint64", key: "bWVzc2VuZ2Vy" },
                stopAuthority: { keyType: "AVMString", valueType: "address", key: "c3RvcEF1dGhvcml0eQ==" },
                rebalancer: { keyType: "AVMString", valueType: "address", key: "cmViYWxhbmNlcg==" },
                canSwap: { keyType: "AVMString", valueType: "AVMUint64", key: "Y2FuU3dhcA==" },
                gasOracle: { keyType: "AVMString", valueType: "AVMUint64", key: "Z2FzT3JhY2xl" },
                owner: { keyType: "AVMString", valueType: "address", key: "b3duZXI=" },
            },
            local: {},
            box: {},
        },
        maps: {
            global: {},
            local: {},
            box: {
                processedMessages: { keyType: "byte[32]", valueType: "byte[0]", prefix: "bQ==" },
                sentMessages: { keyType: "byte[32]", valueType: "byte[0]", prefix: "cw==" },
                otherBridges: { keyType: "byte", valueType: "byte[32]", prefix: "Yg==" },
                otherBridgeTokens: { keyType: "AVMBytes", valueType: "byte[0]", prefix: "dA==" },
                pools: { keyType: "uint64", valueType: "uint64", prefix: "cA==" },
                fromGasOracleScalingFactor: { keyType: "uint64", valueType: "uint64", prefix: "ZQ==" },
                bridgingFeeConversionScalingFactor: { keyType: "uint64", valueType: "uint64", prefix: "Zg==" },
                gasUsage: { keyType: "byte", valueType: "uint64", prefix: "dQ==" },
            },
        },
    },
    bareActions: { create: [], call: [] },
    sourceInfo: {
        approval: {
            sourceInfo: [
                { pc: [431], errorMessage: "Asset must go to app" },
                { pc: [877, 1323, 2099, 2412, 2424], errorMessage: "Box must have value" },
                { pc: [1835], errorMessage: "Bridge: amount too low for fee" },
                { pc: [1842], errorMessage: "Bridge: bridge to the zero address" },
                { pc: [911], errorMessage: "Bridge: message processed" },
                { pc: [961], errorMessage: "Bridge: no message" },
                { pc: [853, 2063], errorMessage: "Bridge: not enough fee" },
                { pc: [843], errorMessage: "Bridge: source not registered" },
                { pc: [1950], errorMessage: "Bridge: tokens already sent" },
                { pc: [1915], errorMessage: "Bridge: unknown chain or token" },
                { pc: [1902], errorMessage: "Bridge: wrong destination chain" },
                { pc: [953, 1256, 1308, 1995, 2146, 2289, 2395, 2469], errorMessage: "Bytes has valid prefix" },
                { pc: [447], errorMessage: "CloseTo not allowed" },
                { pc: [137], errorMessage: "OnCompletion must be NoOp" },
                { pc: [2484], errorMessage: "Only owner" },
                { pc: [439], errorMessage: "Rekey not allowed" },
                { pc: [1665], errorMessage: "Router: is not stopAuthority" },
                { pc: [2311], errorMessage: "Router: no pool" },
                { pc: [2221], errorMessage: "Router: no receive pool" },
                { pc: [832, 1502, 1825], errorMessage: "Router: swap prohibited" },
                { pc: [1166], errorMessage: "account opted into asset" },
                { pc: [2006, 2319], errorMessage: "application exists" },
                { pc: [1599], errorMessage: "asset exists" },
                {
                    pc: [831, 858, 920, 1127, 1174, 1225, 1267, 1501, 1663, 1824, 1896, 1964, 2108, 2113, 2236, 2346, 2430, 2482],
                    errorMessage: "check GlobalState exists",
                },
                { pc: [1956], errorMessage: "index access is out of bounds" },
                { pc: [958], errorMessage: "invalid number of bytes for arc4.bool" },
                {
                    pc: [
                        504, 642, 658, 666, 711, 727, 735, 791, 807, 818, 1040, 1069, 1098, 1349, 1373, 1381, 1406, 1475, 1686,
                        1703, 1803,
                    ],
                    errorMessage: "invalid number of bytes for arc4.static_array<arc4.uint8, 32>",
                },
                {
                    pc: [
                        520, 529, 561, 674, 743, 752, 779, 826, 1118, 1148, 1213, 1261, 1313, 1340, 1466, 1483, 1492, 1571, 1580,
                        1643, 1746, 1768, 2000, 2151, 2294, 2400, 2474,
                    ],
                    errorMessage: "invalid number of bytes for arc4.uint64",
                },
                {
                    pc: [512, 650, 719, 799, 1032, 1061, 1090, 1205, 1357, 1365, 1398, 1434, 1720, 1738, 1785],
                    errorMessage: "invalid number of bytes for arc4.uint8",
                },
                { pc: [899, 2205], errorMessage: "invalid size" },
                { pc: [634, 703, 1458], errorMessage: "transaction type is axfer" },
                { pc: [623, 771], errorMessage: "transaction type is pay" },
            ],
            pcOffsetMethod: "none",
        },
        clear: { sourceInfo: [], pcOffsetMethod: "none" },
    },
    source: {
        approval: "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYXJjNC9pbmRleC5kLnRzOjpDb250cmFjdC5hcHByb3ZhbFByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMSAwIDggMzIgMTU3MDAKICAgIGJ5dGVjYmxvY2sgMHgxNTFmN2M3NSAiY2FuU3dhcCIgIm93bmVyIiAiZ2FzT3JhY2xlIiAicmViYWxhbmNlciIgImNoYWluSWQiICJtZXNzZW5nZXIiICJ0IiAicCIgInN0b3BBdXRob3JpdHkiIDB4MDEgMHgwMCAidSIgMHg0MzQxN2FhMyAweGY3NDc1YjgyIDB4MTUxZjdjNzUwMDAwMDAwMDAwMDAzZDU0IDB4MDY4MTAxCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYm56IG1haW5fYWZ0ZXJfaWZfZWxzZUAyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjUyCiAgICAvLyBwcml2YXRlIHJlYmFsYW5jZXIgPSBHbG9iYWxTdGF0ZTxBZGRyZXNzPih7IGluaXRpYWxWYWx1ZTogbmV3IEFkZHJlc3MoYnplcm8oMCkpIH0pOy8vIGNhbiByZXN0cmljdCBkZXBvc2l0IG9yIHdpdGhkcmF3IG9wZXJhdGlvbnMKICAgIGludGNfMSAvLyAwCiAgICBiemVybwogICAgYnl0ZWMgNCAvLyAicmViYWxhbmNlciIKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjUzCiAgICAvLyBjYW5Td2FwID0gR2xvYmFsU3RhdGU8Ym9vbGVhbj4oeyBpbml0aWFsVmFsdWU6IHRydWUgfSk7CiAgICBieXRlY18xIC8vICJjYW5Td2FwIgogICAgaW50Y18wIC8vIDEKICAgIGFwcF9nbG9iYWxfcHV0CgptYWluX2FmdGVyX2lmX2Vsc2VAMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6NTUKICAgIC8vIGV4cG9ydCBjbGFzcyBCcmlkZ2UgZXh0ZW5kcyBSb3V0ZXIgaW1wbGVtZW50cyBDb252ZW50aW9uYWxSb3V0aW5nLCBJQnJpZGdlIHsKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gbXVzdCBiZSBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYnogbWFpbl9jcmVhdGVfTm9PcEAzMwogICAgcHVzaGJ5dGVzcyAweDY1ZjcwNTczIDB4M2UzODAyN2MgMHhhNDYwMGFlZCAweGRlNGNhZDRhIDB4NGViYTA3MjEgMHhjNjE3ZWQ3MyAweDU3NTMxNTYwIDB4NjM4MDgyNzggMHgwNjUwN2M2YSAweGY1Zjk2ZWIzIDB4NGIwNjJjYTAgMHhjM2NkZDkyYSAvLyBtZXRob2QgIm9wdEluQXNzZXQodWludDY0KXZvaWQiLCBtZXRob2QgInN3YXBBbmRCcmlkZ2UocGF5LGF4ZmVyLGJ5dGVbMzJdLGJ5dGUsYnl0ZVszMl0sYnl0ZVszMl0sdWludDY0KXZvaWQiLCBtZXRob2QgInN3YXBBbmRCcmlkZ2VXaXRoU3RhYmxlKGF4ZmVyLGJ5dGVbMzJdLGJ5dGUsYnl0ZVszMl0sYnl0ZVszMl0sdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJyZWNlaXZlVG9rZW5zKHBheSx1aW50NjQsYnl0ZVszMl0sYnl0ZSxieXRlWzMyXSxieXRlWzMyXSx1aW50NjQpdm9pZCIsIG1ldGhvZCAicmVnaXN0ZXJCcmlkZ2UoYnl0ZSxieXRlWzMyXSl2b2lkIiwgbWV0aG9kICJhZGRCcmlkZ2VUb2tlbihieXRlLGJ5dGVbMzJdKXZvaWQiLCBtZXRob2QgInJlbW92ZUJyaWRnZVRva2VuKGJ5dGUsYnl0ZVszMl0pdm9pZCIsIG1ldGhvZCAid2l0aGRyYXdHYXNUb2tlbnModWludDY0KXZvaWQiLCBtZXRob2QgIndpdGhkcmF3QnJpZGdpbmdGZWVJblRva2Vucyh1aW50NjQpdm9pZCIsIG1ldGhvZCAiZ2V0QnJpZGdpbmdDb3N0SW5Ub2tlbnMoYnl0ZSx1aW50NjQpdWludDY0IiwgbWV0aG9kICJoYXNoTWVzc2FnZSh1aW50NjQsYnl0ZVszMl0sYnl0ZSxieXRlLGJ5dGVbMzJdLGJ5dGVbMzJdKWJ5dGVbMzJdIiwgbWV0aG9kICJpc090aGVyQnJpZGdlVG9rZW5TdXBwb3J0ZWQoYnl0ZSxieXRlWzMyXSlib29sIgogICAgYnl0ZWMgMTMgLy8gbWV0aG9kICJnZXRUcmFuc2FjdGlvbkNvc3QoYnl0ZSl1aW50NjQiCiAgICBwdXNoYnl0ZXNzIDB4MDdkZjg0MjkgMHg4MGM1YzcwZiAweDQxMzRkMDY4IDB4ZWYxNWY4NTUgMHg2YjFlZTIyMyAweDE4NzBhNDkyIDB4MzU1NzMyNGQgMHgwNGIxNjFmMSAweGQyYjM1N2ViIC8vIG1ldGhvZCAiZ2V0UmVjZWl2ZVRva2Vuc0Nvc3QoKXVpbnQ2NCIsIG1ldGhvZCAiZ2V0U2VuZFRyYW5zYWN0aW9uU3RvcmFnZUNvc3QoKXVpbnQ2NCIsIG1ldGhvZCAic3dhcChheGZlcix1aW50NjQsYWRkcmVzcyx1aW50NjQsdWludDY0KXZvaWQiLCBtZXRob2QgImFkZFBvb2wodWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJyZW1vdmVQb29sKHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJzdG9wU3dhcCgpdm9pZCIsIG1ldGhvZCAic3RhcnRTd2FwKCl2b2lkIiwgbWV0aG9kICJzZXRTdG9wQXV0aG9yaXR5KGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0UmViYWxhbmNlcihhZGRyZXNzKXZvaWQiCiAgICBieXRlYyAxNCAvLyBtZXRob2QgImdldEdhc1VzYWdlKGJ5dGUpdWludDY0IgogICAgcHVzaGJ5dGVzcyAweDBjYTVhZTdhIDB4Mjc0NzBmMDcgMHhjYmZjNmQwMiAweGUxN2JhZmI0IC8vIG1ldGhvZCAic2V0R2FzVXNhZ2UoYnl0ZSx1aW50NjQpdm9pZCIsIG1ldGhvZCAic2V0R2FzT3JhY2xlKHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJnZXRUcmFuc2FjdGlvblJlbGF5ZXJDb3N0KGJ5dGUpdWludDY0IiwgbWV0aG9kICJ0cmFuc2Zlck93bmVyc2hpcChhZGRyZXNzKXZvaWQiCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBvcHRJbkFzc2V0IHN3YXBBbmRCcmlkZ2Ugc3dhcEFuZEJyaWRnZVdpdGhTdGFibGUgcmVjZWl2ZVRva2VucyByZWdpc3RlckJyaWRnZSBhZGRCcmlkZ2VUb2tlbiByZW1vdmVCcmlkZ2VUb2tlbiB3aXRoZHJhd0dhc1Rva2VucyB3aXRoZHJhd0JyaWRnaW5nRmVlSW5Ub2tlbnMgZ2V0QnJpZGdpbmdDb3N0SW5Ub2tlbnMgaGFzaE1lc3NhZ2UgaXNPdGhlckJyaWRnZVRva2VuU3VwcG9ydGVkIGdldFRyYW5zYWN0aW9uQ29zdCBtYWluX2dldFJlY2VpdmVUb2tlbnNDb3N0X3JvdXRlQDE4IG1haW5fZ2V0U2VuZFRyYW5zYWN0aW9uU3RvcmFnZUNvc3Rfcm91dGVAMTkgc3dhcCBhZGRQb29sIHJlbW92ZVBvb2wgc3RvcFN3YXAgc3RhcnRTd2FwIHNldFN0b3BBdXRob3JpdHkgc2V0UmViYWxhbmNlciBnZXRHYXNVc2FnZSBzZXRHYXNVc2FnZSBzZXRHYXNPcmFjbGUgZ2V0VHJhbnNhY3Rpb25SZWxheWVyQ29zdCB0cmFuc2Zlck93bmVyc2hpcAogICAgZXJyCgptYWluX2dldFNlbmRUcmFuc2FjdGlvblN0b3JhZ2VDb3N0X3JvdXRlQDE5OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozNTEKICAgIC8vIEBhYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgYnl0ZWMgMTUgLy8gMHgxNTFmN2M3NTAwMDAwMDAwMDAwMDNkNTQKICAgIGxvZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKbWFpbl9nZXRSZWNlaXZlVG9rZW5zQ29zdF9yb3V0ZUAxODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzQ0CiAgICAvLyBAYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGJ5dGVjIDE1IC8vIDB4MTUxZjdjNzUwMDAwMDAwMDAwMDAzZDU0CiAgICBsb2cKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCm1haW5fY3JlYXRlX05vT3BAMzM6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjU1CiAgICAvLyBleHBvcnQgY2xhc3MgQnJpZGdlIGV4dGVuZHMgUm91dGVyIGltcGxlbWVudHMgQ29udmVudGlvbmFsUm91dGluZywgSUJyaWRnZSB7CiAgICBwdXNoYnl0ZXMgMHg2NjRjYTQwNCAvLyBtZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKGFkZHJlc3MsYnl0ZSx1aW50NjQsdWludDY0KXZvaWQiCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBjcmVhdGVBcHBsaWNhdGlvbgogICAgZXJyCgoKLy8gX3B1eWFfbGliLnV0aWwuZW5zdXJlX2J1ZGdldChyZXF1aXJlZF9idWRnZXQ6IHVpbnQ2NCwgZmVlX3NvdXJjZTogdWludDY0KSAtPiB2b2lkOgplbnN1cmVfYnVkZ2V0OgogICAgcHJvdG8gMiAwCiAgICBmcmFtZV9kaWcgLTIKICAgIHB1c2hpbnQgMTAgLy8gMTAKICAgICsKCmVuc3VyZV9idWRnZXRfd2hpbGVfdG9wQDE6CiAgICBmcmFtZV9kaWcgMAogICAgZ2xvYmFsIE9wY29kZUJ1ZGdldAogICAgPgogICAgYnogZW5zdXJlX2J1ZGdldF9hZnRlcl93aGlsZUA2CiAgICBpdHhuX2JlZ2luCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgcHVzaGludCA1IC8vIERlbGV0ZUFwcGxpY2F0aW9uCiAgICBpdHhuX2ZpZWxkIE9uQ29tcGxldGlvbgogICAgYnl0ZWMgMTYgLy8gMHgwNjgxMDEKICAgIGl0eG5fZmllbGQgQXBwcm92YWxQcm9ncmFtCiAgICBieXRlYyAxNiAvLyAweDA2ODEwMQogICAgaXR4bl9maWVsZCBDbGVhclN0YXRlUHJvZ3JhbQogICAgZnJhbWVfZGlnIC0xCiAgICBzd2l0Y2ggZW5zdXJlX2J1ZGdldF9zd2l0Y2hfY2FzZV8wQDMgZW5zdXJlX2J1ZGdldF9zd2l0Y2hfY2FzZV8xQDQKCmVuc3VyZV9idWRnZXRfc3dpdGNoX2Nhc2VfbmV4dEA1OgogICAgaXR4bl9zdWJtaXQKICAgIGIgZW5zdXJlX2J1ZGdldF93aGlsZV90b3BAMQoKZW5zdXJlX2J1ZGdldF9zd2l0Y2hfY2FzZV8xQDQ6CiAgICBnbG9iYWwgTWluVHhuRmVlCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgYiBlbnN1cmVfYnVkZ2V0X3N3aXRjaF9jYXNlX25leHRANQoKZW5zdXJlX2J1ZGdldF9zd2l0Y2hfY2FzZV8wQDM6CiAgICBpbnRjXzEgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIGIgZW5zdXJlX2J1ZGdldF9zd2l0Y2hfY2FzZV9uZXh0QDUKCmVuc3VyZV9idWRnZXRfYWZ0ZXJfd2hpbGVANjoKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvdXRpbHMuYWxnby50czo6YW1vdW50RnJvbUFzc2V0VHJhbnNmZXIoYXNzZXRUcmFuc2ZlclR4bjogdWludDY0KSAtPiB1aW50NjQ6CmFtb3VudEZyb21Bc3NldFRyYW5zZmVyOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy91dGlscy5hbGdvLnRzOjIzCiAgICAvLyBleHBvcnQgZnVuY3Rpb24gYW1vdW50RnJvbUFzc2V0VHJhbnNmZXIoYXNzZXRUcmFuc2ZlclR4bjogZ3R4bi5Bc3NldFRyYW5zZmVyVHhuKTogdWludDY0IHsKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy91dGlscy5hbGdvLnRzOjI0CiAgICAvLyBhc3NlcnQoYXNzZXRUcmFuc2ZlclR4bi5hc3NldFJlY2VpdmVyID09PSBHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcywgYEFzc2V0IG11c3QgZ28gdG8gYXBwYCk7CiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIEFzc2V0UmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgYXNzZXJ0IC8vIEFzc2V0IG11c3QgZ28gdG8gYXBwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3V0aWxzLmFsZ28udHM6MjcKICAgIC8vIGFzc2VydChhc3NldFRyYW5zZmVyVHhuLnJla2V5VG8gPT09IEdsb2JhbC56ZXJvQWRkcmVzcywgYFJla2V5IG5vdCBhbGxvd2VkYCk7CiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJla2V5VG8KICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgPT0KICAgIGFzc2VydCAvLyBSZWtleSBub3QgYWxsb3dlZAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy91dGlscy5hbGdvLnRzOjI4CiAgICAvLyBhc3NlcnQoYXNzZXRUcmFuc2ZlclR4bi5hc3NldENsb3NlVG8gPT09IEdsb2JhbC56ZXJvQWRkcmVzcywgYENsb3NlVG8gbm90IGFsbG93ZWRgKTsKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQXNzZXRDbG9zZVRvCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgID09CiAgICBhc3NlcnQgLy8gQ2xvc2VUbyBub3QgYWxsb3dlZAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy91dGlscy5hbGdvLnRzOjI5CiAgICAvLyByZXR1cm4gYXNzZXRUcmFuc2ZlclR4bi5hc3NldEFtb3VudDsKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQXNzZXRBbW91bnQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvdXRpbHMuYWxnby50czo6YW1vdW50RnJvbVBheW1lbnQocGF5bWVudFR4bjogdWludDY0KSAtPiB1aW50NjQ6CmFtb3VudEZyb21QYXltZW50OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy91dGlscy5hbGdvLnRzOjMyCiAgICAvLyBleHBvcnQgZnVuY3Rpb24gYW1vdW50RnJvbVBheW1lbnQocGF5bWVudFR4bjogZ3R4bi5QYXltZW50VHhuKTogdWludDY0IHsKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy91dGlscy5hbGdvLnRzOjMzCiAgICAvLyBpZiAocGF5bWVudFR4bi5yZWNlaXZlciAhPT0gR2xvYmFsLmN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MpIHJldHVybiAwOwogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBSZWNlaXZlcgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgICE9CiAgICBieiBhbW91bnRGcm9tUGF5bWVudF9hZnRlcl9pZl9lbHNlQDIKICAgIGludGNfMSAvLyAwCiAgICByZXRzdWIKCmFtb3VudEZyb21QYXltZW50X2FmdGVyX2lmX2Vsc2VAMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvdXRpbHMuYWxnby50czozNQogICAgLy8gaWYgKHBheW1lbnRUeG4ucmVrZXlUbyAhPT0gR2xvYmFsLnplcm9BZGRyZXNzKSByZXR1cm4gMDsKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgUmVrZXlUbwogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICAhPQogICAgYnogYW1vdW50RnJvbVBheW1lbnRfYWZ0ZXJfaWZfZWxzZUA0CiAgICBpbnRjXzEgLy8gMAogICAgcmV0c3ViCgphbW91bnRGcm9tUGF5bWVudF9hZnRlcl9pZl9lbHNlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3V0aWxzLmFsZ28udHM6MzYKICAgIC8vIGlmIChwYXltZW50VHhuLmNsb3NlUmVtYWluZGVyVG8gIT09IEdsb2JhbC56ZXJvQWRkcmVzcykgcmV0dXJuIDA7CiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIENsb3NlUmVtYWluZGVyVG8KICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgIT0KICAgIGJ6IGFtb3VudEZyb21QYXltZW50X2FmdGVyX2lmX2Vsc2VANgogICAgaW50Y18xIC8vIDAKICAgIHJldHN1YgoKYW1vdW50RnJvbVBheW1lbnRfYWZ0ZXJfaWZfZWxzZUA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy91dGlscy5hbGdvLnRzOjM4CiAgICAvLyByZXR1cm4gcGF5bWVudFR4bi5hbW91bnQ7CiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIEFtb3VudAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo6QnJpZGdlLmNyZWF0ZUFwcGxpY2F0aW9uW3JvdXRpbmddKCkgLT4gdm9pZDoKY3JlYXRlQXBwbGljYXRpb246CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjY5CiAgICAvLyBjcmVhdGVBcHBsaWNhdGlvbihvd25lcjogQWRkcmVzcywgY2hhaW5JZDogQnl0ZSwgbWVzc2VuZ2VyOiBBcHBsaWNhdGlvbiwgZ2FzT3JhY2xlOiBBcHBsaWNhdGlvbik6IHZvaWQgewogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDEKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDgKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDQKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvb3duYWJsZS5hbGdvLnRzOjYKICAgIC8vIHByb3RlY3RlZCBvd25lciA9IEdsb2JhbFN0YXRlPEFkZHJlc3M+KCk7CiAgICBieXRlY18yIC8vICJvd25lciIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvb3duYWJsZS5hbGdvLnRzOjkKICAgIC8vIHRoaXMub3duZXIudmFsdWUgPSBvd25lcjsKICAgIGRpZyA0CiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo5CiAgICAvLyBnYXNPcmFjbGUgPSBHbG9iYWxTdGF0ZTxBcHBsaWNhdGlvbj4oKTsKICAgIGJ5dGVjXzMgLy8gImdhc09yYWNsZSIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MTQKICAgIC8vIHRoaXMuZ2FzT3JhY2xlLnZhbHVlID0gZ2FzT3JhY2xlOwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6NDIKICAgIC8vIHByaXZhdGUgc3RvcEF1dGhvcml0eSA9IEdsb2JhbFN0YXRlPEFkZHJlc3M+KCk7Ly8gY2FuIHJlc3RyaWN0IGRlcG9zaXQgb3Igd2l0aGRyYXcgb3BlcmF0aW9ucwogICAgYnl0ZWMgOSAvLyAic3RvcEF1dGhvcml0eSIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6NTcKICAgIC8vIHRoaXMuc3RvcEF1dGhvcml0eS52YWx1ZSA9IG93bmVyOwogICAgdW5jb3ZlciAzCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo1NwogICAgLy8gY2hhaW5JZCA9IEdsb2JhbFN0YXRlPEJ5dGU+KCk7CiAgICBieXRlYyA1IC8vICJjaGFpbklkIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo3MQogICAgLy8gdGhpcy5jaGFpbklkLnZhbHVlID0gY2hhaW5JZDsKICAgIHVuY292ZXIgMgogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6NTgKICAgIC8vIG1lc3NlbmdlciA9IEdsb2JhbFN0YXRlPEFwcGxpY2F0aW9uPigpOwogICAgYnl0ZWMgNiAvLyAibWVzc2VuZ2VyIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo3MgogICAgLy8gdGhpcy5tZXNzZW5nZXIudmFsdWUgPSBtZXNzZW5nZXI7CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo2OQogICAgLy8gY3JlYXRlQXBwbGljYXRpb24ob3duZXI6IEFkZHJlc3MsIGNoYWluSWQ6IEJ5dGUsIG1lc3NlbmdlcjogQXBwbGljYXRpb24sIGdhc09yYWNsZTogQXBwbGljYXRpb24pOiB2b2lkIHsKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2Uub3B0SW5Bc3NldFtyb3V0aW5nXSgpIC0+IHZvaWQ6Cm9wdEluQXNzZXQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjc1CiAgICAvLyBvcHRJbkFzc2V0KGFzc2V0OiBBc3NldCk6IHZvaWQgewogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo3NgogICAgLy8gdGhpcy5vbmx5T3duZXIoKTsKICAgIGNhbGxzdWIgb25seU93bmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjc5LTg1CiAgICAvLyBpdHhuCiAgICAvLyAgIC5hc3NldFRyYW5zZmVyKHsKICAgIC8vICAgICB4ZmVyQXNzZXQ6IGFzc2V0LAogICAgLy8gICAgIGFzc2V0QW1vdW50OiAwLAogICAgLy8gICAgIGFzc2V0UmVjZWl2ZXI6IEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzLAogICAgLy8gICB9KQogICAgLy8gICAuc3VibWl0KCk7CiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjgzCiAgICAvLyBhc3NldFJlY2VpdmVyOiBHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcywKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICBpdHhuX2ZpZWxkIEFzc2V0UmVjZWl2ZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6ODIKICAgIC8vIGFzc2V0QW1vdW50OiAwLAogICAgaW50Y18xIC8vIDAKICAgIGl0eG5fZmllbGQgQXNzZXRBbW91bnQKICAgIGl0eG5fZmllbGQgWGZlckFzc2V0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjc5LTg0CiAgICAvLyBpdHhuCiAgICAvLyAgIC5hc3NldFRyYW5zZmVyKHsKICAgIC8vICAgICB4ZmVyQXNzZXQ6IGFzc2V0LAogICAgLy8gICAgIGFzc2V0QW1vdW50OiAwLAogICAgLy8gICAgIGFzc2V0UmVjZWl2ZXI6IEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzLAogICAgLy8gICB9KQogICAgcHVzaGludCA0IC8vIDQKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMSAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo3OS04NQogICAgLy8gaXR4bgogICAgLy8gICAuYXNzZXRUcmFuc2Zlcih7CiAgICAvLyAgICAgeGZlckFzc2V0OiBhc3NldCwKICAgIC8vICAgICBhc3NldEFtb3VudDogMCwKICAgIC8vICAgICBhc3NldFJlY2VpdmVyOiBHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcywKICAgIC8vICAgfSkKICAgIC8vICAgLnN1Ym1pdCgpOwogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6ODcKICAgIC8vIGxvZygnQnJpZGdlOiBvcHQtaW4gY29tcGxldGVkJyk7CiAgICBwdXNoYnl0ZXMgIkJyaWRnZTogb3B0LWluIGNvbXBsZXRlZCIKICAgIGxvZwogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo3NQogICAgLy8gb3B0SW5Bc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHsKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2Uuc3dhcEFuZEJyaWRnZVtyb3V0aW5nXSgpIC0+IHZvaWQ6CnN3YXBBbmRCcmlkZ2U6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjkwCiAgICAvLyBAYWJpbWV0aG9kKHsgZGVmYXVsdEFyZ3VtZW50czogeyBidWRnZXQ6IHsgY29uc3RhbnQ6IDEwMDAgfSB9IH0pCiAgICB0eG4gR3JvdXBJbmRleAogICAgcHVzaGludCAyIC8vIDIKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMCAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzAgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgcHVzaGludCA0IC8vIGF4ZmVyCiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgYXhmZXIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAxCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ4CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDQKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxMDAKICAgIC8vIHRoaXMuX3N3YXBBbmRCcmlkZ2UoYW1vdW50RnJvbVBheW1lbnQocGF5bWVudFJlZiksIGFzc2V0VHJhbnNmZXJSZWYsIHJlY2lwaWVudCwgZGVzdGluYXRpb25DaGFpbklkLCByZWNlaXZlVG9rZW4sIG5vbmNlLCAwLCBidWRnZXQpOwogICAgdW5jb3ZlciA2CiAgICBjYWxsc3ViIGFtb3VudEZyb21QYXltZW50CiAgICBjb3ZlciA2CiAgICBjb3ZlciA2CiAgICBpbnRjXzEgLy8gMAogICAgdW5jb3ZlciA3CiAgICBjYWxsc3ViIF9zd2FwQW5kQnJpZGdlCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjkwCiAgICAvLyBAYWJpbWV0aG9kKHsgZGVmYXVsdEFyZ3VtZW50czogeyBidWRnZXQ6IHsgY29uc3RhbnQ6IDEwMDAgfSB9IH0pCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo6QnJpZGdlLnN3YXBBbmRCcmlkZ2VXaXRoU3RhYmxlW3JvdXRpbmddKCkgLT4gdm9pZDoKc3dhcEFuZEJyaWRnZVdpdGhTdGFibGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjEwMwogICAgLy8gQGFiaW1ldGhvZCh7IGRlZmF1bHRBcmd1bWVudHM6IHsgYnVkZ2V0OiB7IGNvbnN0YW50OiAxMDAwIH0gfSB9KQogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMCAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBwdXNoaW50IDQgLy8gYXhmZXIKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBheGZlcgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDEKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDgKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNAogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyA1CiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICBidG9pCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyA2CiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjExMwogICAgLy8gdGhpcy5fc3dhcEFuZEJyaWRnZSgwLCBhc3NldFRyYW5zZmVyUmVmLCByZWNpcGllbnQsIGRlc3RpbmF0aW9uQ2hhaW5JZCwgcmVjZWl2ZVRva2VuLCBub25jZSwgZmVlVG9rZW5BbW91bnQsIGJ1ZGdldCk7CiAgICBpbnRjXzEgLy8gMAogICAgY292ZXIgNwogICAgY2FsbHN1YiBfc3dhcEFuZEJyaWRnZQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxMDMKICAgIC8vIEBhYmltZXRob2QoeyBkZWZhdWx0QXJndW1lbnRzOiB7IGJ1ZGdldDogeyBjb25zdGFudDogMTAwMCB9IH0gfSkKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2UucmVjZWl2ZVRva2Vuc1tyb3V0aW5nXSgpIC0+IHZvaWQ6CnJlY2VpdmVUb2tlbnM6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjE5MwogICAgLy8gQGFiaW1ldGhvZCgpCiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50Y18wIC8vIDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMCAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIGR1cAogICAgY292ZXIgMwogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDEKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDgKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDQKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNQogICAgZHVwCiAgICBjb3ZlciA2CiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDYKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6NjQKICAgIC8vIGFzc2VydCh0aGlzLmNhblN3YXAudmFsdWUsICdSb3V0ZXI6IHN3YXAgcHJvaGliaXRlZCcpOwogICAgaW50Y18xIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6NTMKICAgIC8vIGNhblN3YXAgPSBHbG9iYWxTdGF0ZTxib29sZWFuPih7IGluaXRpYWxWYWx1ZTogdHJ1ZSB9KTsKICAgIGJ5dGVjXzEgLy8gImNhblN3YXAiCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjY0CiAgICAvLyBhc3NlcnQodGhpcy5jYW5Td2FwLnZhbHVlLCAnUm91dGVyOiBzd2FwIHByb2hpYml0ZWQnKTsKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICBhc3NlcnQgLy8gUm91dGVyOiBzd2FwIHByb2hpYml0ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6NjQKICAgIC8vIG90aGVyQnJpZGdlcyA9IEJveE1hcDxCeXRlLCBTdGF0aWNCeXRlczwzMj4+KHsga2V5UHJlZml4OiAnYicgfSk7CiAgICBwdXNoYnl0ZXMgImIiCiAgICBkaWcgNAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIwNAogICAgLy8gYXNzZXJ0KHRoaXMub3RoZXJCcmlkZ2VzKHNvdXJjZUNoYWluSWQpLmV4aXN0cywgJ0JyaWRnZTogc291cmNlIG5vdCByZWdpc3RlcmVkJyk7CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIEJyaWRnZTogc291cmNlIG5vdCByZWdpc3RlcmVkCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIwNgogICAgLy8gY29uc3QgdmFsdWUgPSBhbW91bnRGcm9tUGF5bWVudChwYXltZW50UmVmKTsKICAgIHVuY292ZXIgNwogICAgY2FsbHN1YiBhbW91bnRGcm9tUGF5bWVudAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyMDcKICAgIC8vIGFzc2VydCh2YWx1ZSA+PSBzdG9yYWdlRmVlLCAnQnJpZGdlOiBub3QgZW5vdWdoIGZlZScpOwogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjM0OAogICAgLy8gcmV0dXJuIDE1NzAwOwogICAgaW50YyA0IC8vIDE1NzAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIwNwogICAgLy8gYXNzZXJ0KHZhbHVlID49IHN0b3JhZ2VGZWUsICdCcmlkZ2U6IG5vdCBlbm91Z2ggZmVlJyk7CiAgICA+PQogICAgYXNzZXJ0IC8vIEJyaWRnZTogbm90IGVub3VnaCBmZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjA5CiAgICAvLyBjb25zdCBtZXNzYWdlID0gdGhpcy5oYXNoTWVzc2FnZShhbW91bnQsIHJlY2lwaWVudCwgc291cmNlQ2hhaW5JZCwgdGhpcy5jaGFpbklkLnZhbHVlLCByZWNlaXZlVG9rZW4sIG5vbmNlKTsKICAgIGludGNfMSAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjU3CiAgICAvLyBjaGFpbklkID0gR2xvYmFsU3RhdGU8Qnl0ZT4oKTsKICAgIGJ5dGVjIDUgLy8gImNoYWluSWQiCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIwOQogICAgLy8gY29uc3QgbWVzc2FnZSA9IHRoaXMuaGFzaE1lc3NhZ2UoYW1vdW50LCByZWNpcGllbnQsIHNvdXJjZUNoYWluSWQsIHRoaXMuY2hhaW5JZC52YWx1ZSwgcmVjZWl2ZVRva2VuLCBub25jZSk7CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIEdsb2JhbFN0YXRlIGV4aXN0cwogICAgZGlnIDgKICAgIGRpZyA4CiAgICB1bmNvdmVyIDgKICAgIHVuY292ZXIgMwogICAgZGlnIDgKICAgIHVuY292ZXIgOAogICAgY2FsbHN1YiBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2UuaGFzaE1lc3NhZ2UKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjEwCiAgICAvLyBjb25zdCBtZXNzYWdlV2l0aFNlbmRlciA9IGhhc2hXaXRoU2VuZGVyQWRkcmVzcyhtZXNzYWdlLCB0aGlzLm90aGVyQnJpZGdlcyhzb3VyY2VDaGFpbklkKS52YWx1ZS5ieXRlcyk7CiAgICB1bmNvdmVyIDIKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBCb3ggbXVzdCBoYXZlIHZhbHVlCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3V0aWxzLmFsZ28udHM6NTIKICAgIC8vIGNvbnN0IGg6IGJ5dGVzID0gb3Aua2VjY2FrMjU2KG9wLmNvbmNhdChtZXNzYWdlLmJ5dGVzLCBzZW5kZXJBZGRyZXNzKSk7CiAgICBkaWcgMQogICAgc3dhcAogICAgY29uY2F0CiAgICBrZWNjYWsyNTYKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvdXRpbHMuYWxnby50czo1NQogICAgLy8gY29uc3QgZmlyc3QyID0gb3Auc3Vic3RyaW5nKG1lc3NhZ2UuYnl0ZXMsIDAsIDIpOwogICAgc3dhcAogICAgc3Vic3RyaW5nIDAgMgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy91dGlscy5hbGdvLnRzOjU3CiAgICAvLyBjb25zdCBsYXN0MzAgPSBvcC5zdWJzdHJpbmcoaCwgMiwgMzIpOwogICAgc3dhcAogICAgc3Vic3RyaW5nIDIgMzIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvdXRpbHMuYWxnby50czo2MAogICAgLy8gcmV0dXJuIG5ldyBTdGF0aWNCeXRlczwzMj4ob3AuY29uY2F0KGZpcnN0MiwgbGFzdDMwKSk7CiAgICBjb25jYXQKICAgIGR1cAogICAgY292ZXIgNgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIHNpemUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6NjAKICAgIC8vIHByb2Nlc3NlZE1lc3NhZ2VzID0gQm94TWFwPFN0YXRpY0J5dGVzPDMyPiwgU3RhdGljQnl0ZXM+KHsga2V5UHJlZml4OiAnbScgfSk7CiAgICBwdXNoYnl0ZXMgIm0iCiAgICBkaWcgMQogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIxMgogICAgLy8gYXNzZXJ0KCF0aGlzLnByb2Nlc3NlZE1lc3NhZ2VzKG1lc3NhZ2VXaXRoU2VuZGVyKS5leGlzdHMsICdCcmlkZ2U6IG1lc3NhZ2UgcHJvY2Vzc2VkJyk7CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEJyaWRnZTogbWVzc2FnZSBwcm9jZXNzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjE0CiAgICAvLyB0aGlzLnByb2Nlc3NlZE1lc3NhZ2VzKG1lc3NhZ2VXaXRoU2VuZGVyKS52YWx1ZSA9IG5ldyBTdGF0aWNCeXRlcygpOwogICAgcHVzaGJ5dGVzIDB4CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIxNy0yMjEKICAgIC8vIGFzc2VydChhYmlDYWxsKHsKICAgIC8vICAgbWV0aG9kOiBNZXNzZW5nZXIucHJvdG90eXBlLnJlY2VpdmVkTWVzc2FnZXMsCiAgICAvLyAgIGFwcElkOiB0aGlzLm1lc3Nlbmdlci52YWx1ZS5pZCwKICAgIC8vICAgYXJnczogW21lc3NhZ2VXaXRoU2VuZGVyXSwKICAgIC8vIH0pLnJldHVyblZhbHVlLCAnQnJpZGdlOiBubyBtZXNzYWdlJyk7CiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIxOQogICAgLy8gYXBwSWQ6IHRoaXMubWVzc2VuZ2VyLnZhbHVlLmlkLAogICAgaW50Y18xIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6NTgKICAgIC8vIG1lc3NlbmdlciA9IEdsb2JhbFN0YXRlPEFwcGxpY2F0aW9uPigpOwogICAgYnl0ZWMgNiAvLyAibWVzc2VuZ2VyIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyMTkKICAgIC8vIGFwcElkOiB0aGlzLm1lc3Nlbmdlci52YWx1ZS5pZCwKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIxNy0yMjEKICAgIC8vIGFzc2VydChhYmlDYWxsKHsKICAgIC8vICAgbWV0aG9kOiBNZXNzZW5nZXIucHJvdG90eXBlLnJlY2VpdmVkTWVzc2FnZXMsCiAgICAvLyAgIGFwcElkOiB0aGlzLm1lc3Nlbmdlci52YWx1ZS5pZCwKICAgIC8vICAgYXJnczogW21lc3NhZ2VXaXRoU2VuZGVyXSwKICAgIC8vIH0pLnJldHVyblZhbHVlLCAnQnJpZGdlOiBubyBtZXNzYWdlJyk7CiAgICBwdXNoYnl0ZXMgMHgzM2UxNDdhYSAvLyBtZXRob2QgInJlY2VpdmVkTWVzc2FnZXMoYnl0ZVszMl0pYm9vbCIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uSUQKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18xIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBkdXAKICAgIGV4dHJhY3QgNCAwCiAgICBzd2FwCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIEJ5dGVzIGhhcyB2YWxpZCBwcmVmaXgKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMQogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5ib29sCiAgICBpbnRjXzEgLy8gMAogICAgZ2V0Yml0CiAgICBhc3NlcnQgLy8gQnJpZGdlOiBubyBtZXNzYWdlCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIyMwogICAgLy8gY29uc3QgdG9rZW5JZDogdWludDY0ID0gb3AuZXh0cmFjdFVpbnQ2NChyZWNlaXZlVG9rZW4uYnl0ZXMsIDI0KTsKICAgIHVuY292ZXIgMgogICAgcHVzaGludCAyNCAvLyAyNAogICAgZXh0cmFjdF91aW50NjQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjI1LTIzMAogICAgLy8gY29uc3QgcmVjZWl2ZUFtb3VudCA9IHRoaXMucmVjZWl2ZUFuZFN3YXBGcm9tVlVzZCgKICAgIC8vICAgQXNzZXQodG9rZW5JZCksCiAgICAvLyAgIHJlY2lwaWVudEFkZHJlc3MsCiAgICAvLyAgIGFtb3VudCwKICAgIC8vICAgcmVjZWl2ZUFtb3VudE1pbiwKICAgIC8vICk7CiAgICB1bmNvdmVyIDMKICAgIHVuY292ZXIgNAogICAgdW5jb3ZlciA0CiAgICBjYWxsc3ViIHJlY2VpdmVBbmRTd2FwRnJvbVZVc2QKICAgIHN3YXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzQ4CiAgICAvLyByZXR1cm4gMTU3MDA7CiAgICBpbnRjIDQgLy8gMTU3MDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjMzCiAgICAvLyBjb25zdCBleHRyYUdhczogdWludDY0ID0gdmFsdWUgLSBzdG9yYWdlRmVlOwogICAgLQogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjIzNAogICAgLy8gaWYgKGV4dHJhR2FzID4gMCkgewogICAgYnogcmVjZWl2ZVRva2Vuc19hZnRlcl9pZl9lbHNlQDUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjM1LTIzOAogICAgLy8gaXR4bi5wYXltZW50KHsKICAgIC8vICAgYW1vdW50OiBleHRyYUdhcywKICAgIC8vICAgcmVjZWl2ZXI6IHJlY2lwaWVudEFkZHJlc3MuYnl0ZXMsCiAgICAvLyB9KS5zdWJtaXQoKTsKICAgIGl0eG5fYmVnaW4KICAgIGRpZyA0CiAgICBpdHhuX2ZpZWxkIFJlY2VpdmVyCiAgICBkdXAKICAgIGl0eG5fZmllbGQgQW1vdW50CiAgICBpbnRjXzAgLy8gMQogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18xIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAoKcmVjZWl2ZVRva2Vuc19hZnRlcl9pZl9lbHNlQDU6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI0MC0yNDYKICAgIC8vIGVtaXQ8VG9rZW5zUmVjZWl2ZWQ+KHsKICAgIC8vICAgcmVjZWl2ZUFtb3VudCwKICAgIC8vICAgcmVjaXBpZW50OiByZWNpcGllbnRBZGRyZXNzLAogICAgLy8gICBub25jZSwKICAgIC8vICAgbWVzc2VuZ2VyOiBBTExCUklER0VfTUVTU0VOR0VSLAogICAgLy8gICBtZXNzYWdlOiBtZXNzYWdlV2l0aFNlbmRlciwKICAgIC8vIH0pOwogICAgZGlnIDEKICAgIGl0b2IKICAgIGRpZyA1CiAgICBjb25jYXQKICAgIGRpZyA0CiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjQ0CiAgICAvLyBtZXNzZW5nZXI6IEFMTEJSSURHRV9NRVNTRU5HRVIsCiAgICBieXRlYyAxMCAvLyAweDAxCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI0MC0yNDYKICAgIC8vIGVtaXQ8VG9rZW5zUmVjZWl2ZWQ+KHsKICAgIC8vICAgcmVjZWl2ZUFtb3VudCwKICAgIC8vICAgcmVjaXBpZW50OiByZWNpcGllbnRBZGRyZXNzLAogICAgLy8gICBub25jZSwKICAgIC8vICAgbWVzc2VuZ2VyOiBBTExCUklER0VfTUVTU0VOR0VSLAogICAgLy8gICBtZXNzYWdlOiBtZXNzYWdlV2l0aFNlbmRlciwKICAgIC8vIH0pOwogICAgY29uY2F0CiAgICBkaWcgMwogICAgY29uY2F0CiAgICBwdXNoYnl0ZXMgMHg0NTgzNmFkNiAvLyBtZXRob2QgIlRva2Vuc1JlY2VpdmVkKHVpbnQ2NCxhZGRyZXNzLGJ5dGVbMzJdLGJ5dGUsYnl0ZVszMl0pIgogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTkzCiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2UucmVnaXN0ZXJCcmlkZ2Vbcm91dGluZ10oKSAtPiB2b2lkOgpyZWdpc3RlckJyaWRnZToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjQ5CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMQogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50OAogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI1MQogICAgLy8gdGhpcy5vbmx5T3duZXIoKTsKICAgIGNhbGxzdWIgb25seU93bmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjY0CiAgICAvLyBvdGhlckJyaWRnZXMgPSBCb3hNYXA8Qnl0ZSwgU3RhdGljQnl0ZXM8MzI+Pih7IGtleVByZWZpeDogJ2InIH0pOwogICAgcHVzaGJ5dGVzICJiIgogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjUyCiAgICAvLyB0aGlzLm90aGVyQnJpZGdlcyhjaGFpbklkKS52YWx1ZSA9IGJyaWRnZUFkZHJlc3M7CiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI0OQogICAgLy8gQGFiaW1ldGhvZCgpCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo6QnJpZGdlLmFkZEJyaWRnZVRva2VuW3JvdXRpbmddKCkgLT4gdm9pZDoKYWRkQnJpZGdlVG9rZW46CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI1NQogICAgLy8gQGFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDEKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDgKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyNTcKICAgIC8vIHRoaXMub25seU93bmVyKCk7CiAgICBjYWxsc3ViIG9ubHlPd25lcgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozNjEKICAgIC8vIHJldHVybiBjaGFpbklkLmJ5dGVzLmNvbmNhdCh0b2tlbi5ieXRlcyk7CiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6NjcKICAgIC8vIG90aGVyQnJpZGdlVG9rZW5zID0gQm94TWFwPGJ5dGVzLCBTdGF0aWNCeXRlcz4oeyBrZXlQcmVmaXg6ICd0JyB9KTsKICAgIGJ5dGVjIDcgLy8gInQiCiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjU4CiAgICAvLyB0aGlzLm90aGVyQnJpZGdlVG9rZW5zKHRoaXMuX2dldE90aGVyQnJpZGdlVG9rZW5zS2V5KGNoYWluSWQsIHRva2VuQWRkcmVzcykpLnZhbHVlID0gbmV3IFN0YXRpY0J5dGVzKCk7CiAgICBwdXNoYnl0ZXMgMHgKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjU1CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2UucmVtb3ZlQnJpZGdlVG9rZW5bcm91dGluZ10oKSAtPiB2b2lkOgpyZW1vdmVCcmlkZ2VUb2tlbjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjYxCiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMQogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50OAogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI2MwogICAgLy8gdGhpcy5vbmx5T3duZXIoKTsKICAgIGNhbGxzdWIgb25seU93bmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjM2MQogICAgLy8gcmV0dXJuIGNoYWluSWQuYnl0ZXMuY29uY2F0KHRva2VuLmJ5dGVzKTsKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo2NwogICAgLy8gb3RoZXJCcmlkZ2VUb2tlbnMgPSBCb3hNYXA8Ynl0ZXMsIFN0YXRpY0J5dGVzPih7IGtleVByZWZpeDogJ3QnIH0pOwogICAgYnl0ZWMgNyAvLyAidCIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyNjQKICAgIC8vIHRoaXMub3RoZXJCcmlkZ2VUb2tlbnModGhpcy5fZ2V0T3RoZXJCcmlkZ2VUb2tlbnNLZXkoY2hhaW5JZCwgdG9rZW5BZGRyZXNzKSkuZGVsZXRlKCk7CiAgICBib3hfZGVsCiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjYxCiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2Uud2l0aGRyYXdHYXNUb2tlbnNbcm91dGluZ10oKSAtPiB2b2lkOgp3aXRoZHJhd0dhc1Rva2VuczoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjY3CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjY5CiAgICAvLyB0aGlzLm9ubHlPd25lcigpOwogICAgY2FsbHN1YiBvbmx5T3duZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjcwCiAgICAvLyBpdHhuLnBheW1lbnQoeyBhbW91bnQ6IGFtb3VudCwgcmVjZWl2ZXI6IHRoaXMub3duZXIudmFsdWUuYnl0ZXMgfSkuc3VibWl0KCk7CiAgICBpdHhuX2JlZ2luCiAgICBpbnRjXzEgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9vd25hYmxlLmFsZ28udHM6NgogICAgLy8gcHJvdGVjdGVkIG93bmVyID0gR2xvYmFsU3RhdGU8QWRkcmVzcz4oKTsKICAgIGJ5dGVjXzIgLy8gIm93bmVyIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyNzAKICAgIC8vIGl0eG4ucGF5bWVudCh7IGFtb3VudDogYW1vdW50LCByZWNlaXZlcjogdGhpcy5vd25lci52YWx1ZS5ieXRlcyB9KS5zdWJtaXQoKTsKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICBpdHhuX2ZpZWxkIFJlY2VpdmVyCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgaW50Y18wIC8vIDEKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMSAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjY3CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2Uud2l0aGRyYXdCcmlkZ2luZ0ZlZUluVG9rZW5zW3JvdXRpbmddKCkgLT4gdm9pZDoKd2l0aGRyYXdCcmlkZ2luZ0ZlZUluVG9rZW5zOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyNzMKICAgIC8vIEBhYmltZXRob2QoKQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI3NQogICAgLy8gdGhpcy5vbmx5T3duZXIoKTsKICAgIGNhbGxzdWIgb25seU93bmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI3NgogICAgLy8gY29uc3QgYXBwQWNjdDogQWNjb3VudCA9IEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzOwogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgIGR1cAogICAgY292ZXIgMgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyNzcKICAgIC8vIGNvbnN0IGJhbGFuY2UgPSBhc3NldC5iYWxhbmNlKGFwcEFjY3QpOwogICAgc3dhcAogICAgYXNzZXRfaG9sZGluZ19nZXQgQXNzZXRCYWxhbmNlCiAgICBzd2FwCiAgICBkdXAKICAgIHVuY292ZXIgMgogICAgYXNzZXJ0IC8vIGFjY291bnQgb3B0ZWQgaW50byBhc3NldAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyNzgKICAgIC8vIGlmIChiYWxhbmNlID4gVWludDY0KDApKSB7CiAgICBieiB3aXRoZHJhd0JyaWRnaW5nRmVlSW5Ub2tlbnNfYWZ0ZXJfaWZfZWxzZUA0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI3OS0yODQKICAgIC8vIGl0eG4uYXNzZXRUcmFuc2Zlcih7CiAgICAvLyAgIHNlbmRlcjogYXBwQWNjdCwKICAgIC8vICAgeGZlckFzc2V0OiBhc3NldCwKICAgIC8vICAgYXNzZXRBbW91bnQ6IGJhbGFuY2UsCiAgICAvLyAgIGFzc2V0UmVjZWl2ZXI6IHRoaXMub3duZXIudmFsdWUuYnl0ZXMsCiAgICAvLyB9KS5zdWJtaXQoKTsKICAgIGl0eG5fYmVnaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjgzCiAgICAvLyBhc3NldFJlY2VpdmVyOiB0aGlzLm93bmVyLnZhbHVlLmJ5dGVzLAogICAgaW50Y18xIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvb3duYWJsZS5hbGdvLnRzOjYKICAgIC8vIHByb3RlY3RlZCBvd25lciA9IEdsb2JhbFN0YXRlPEFkZHJlc3M+KCk7CiAgICBieXRlY18yIC8vICJvd25lciIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjgzCiAgICAvLyBhc3NldFJlY2VpdmVyOiB0aGlzLm93bmVyLnZhbHVlLmJ5dGVzLAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBHbG9iYWxTdGF0ZSBleGlzdHMKICAgIGl0eG5fZmllbGQgQXNzZXRSZWNlaXZlcgogICAgZHVwCiAgICBpdHhuX2ZpZWxkIEFzc2V0QW1vdW50CiAgICBkaWcgMgogICAgaXR4bl9maWVsZCBYZmVyQXNzZXQKICAgIGRpZyAxCiAgICBpdHhuX2ZpZWxkIFNlbmRlcgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyNzktMjg0CiAgICAvLyBpdHhuLmFzc2V0VHJhbnNmZXIoewogICAgLy8gICBzZW5kZXI6IGFwcEFjY3QsCiAgICAvLyAgIHhmZXJBc3NldDogYXNzZXQsCiAgICAvLyAgIGFzc2V0QW1vdW50OiBiYWxhbmNlLAogICAgLy8gICBhc3NldFJlY2VpdmVyOiB0aGlzLm93bmVyLnZhbHVlLmJ5dGVzLAogICAgLy8gfSkuc3VibWl0KCk7CiAgICBwdXNoaW50IDQgLy8gNAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18xIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAoKd2l0aGRyYXdCcmlkZ2luZ0ZlZUluVG9rZW5zX2FmdGVyX2lmX2Vsc2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MjczCiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2UuZ2V0QnJpZGdpbmdDb3N0SW5Ub2tlbnNbcm91dGluZ10oKSAtPiB2b2lkOgpnZXRCcmlkZ2luZ0Nvc3RJblRva2VuczoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6Mjg4CiAgICAvLyBAYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMQogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50OAogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyOTMKICAgIC8vIGNvbnN0IGJyaWRnZUdhc0Ftb3VudDogdWludDY0ID0gdGhpcy5nZXRHYXNVc2FnZShkZXN0aW5hdGlvbkNoYWluSWQpOwogICAgZGlnIDEKICAgIGNhbGxzdWIgc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo6R2FzVXNhZ2UuZ2V0R2FzVXNhZ2UKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6Mjk0LTI5OAogICAgLy8gY29uc3QgbWVzc2VuZ2VyR2FzQW1vdW50OiB1aW50NjQgPSBhYmlDYWxsKHsKICAgIC8vICAgbWV0aG9kOiBNZXNzZW5nZXIucHJvdG90eXBlLmdldEdhc1VzYWdlLAogICAgLy8gICBhcHBJZDogdGhpcy5tZXNzZW5nZXIudmFsdWUuaWQsCiAgICAvLyAgIGFyZ3M6IFtkZXN0aW5hdGlvbkNoYWluSWRdLAogICAgLy8gfSkucmV0dXJuVmFsdWU7CiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI5NgogICAgLy8gYXBwSWQ6IHRoaXMubWVzc2VuZ2VyLnZhbHVlLmlkLAogICAgaW50Y18xIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6NTgKICAgIC8vIG1lc3NlbmdlciA9IEdsb2JhbFN0YXRlPEFwcGxpY2F0aW9uPigpOwogICAgYnl0ZWMgNiAvLyAibWVzc2VuZ2VyIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoyOTYKICAgIC8vIGFwcElkOiB0aGlzLm1lc3Nlbmdlci52YWx1ZS5pZCwKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI5NC0yOTgKICAgIC8vIGNvbnN0IG1lc3Nlbmdlckdhc0Ftb3VudDogdWludDY0ID0gYWJpQ2FsbCh7CiAgICAvLyAgIG1ldGhvZDogTWVzc2VuZ2VyLnByb3RvdHlwZS5nZXRHYXNVc2FnZSwKICAgIC8vICAgYXBwSWQ6IHRoaXMubWVzc2VuZ2VyLnZhbHVlLmlkLAogICAgLy8gICBhcmdzOiBbZGVzdGluYXRpb25DaGFpbklkXSwKICAgIC8vIH0pLnJldHVyblZhbHVlOwogICAgYnl0ZWMgMTQgLy8gbWV0aG9kICJnZXRHYXNVc2FnZShieXRlKXVpbnQ2NCIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBkaWcgMwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMSAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZHVwCiAgICBleHRyYWN0IDQgMAogICAgc3dhcAogICAgZXh0cmFjdCAwIDQKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgPT0KICAgIGFzc2VydCAvLyBCeXRlcyBoYXMgdmFsaWQgcHJlZml4CiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMwMC0zMDQKICAgIC8vIHJldHVybiBhYmlDYWxsKHsKICAgIC8vICAgbWV0aG9kOiBHYXNPcmFjbGUucHJvdG90eXBlLmdldFRyYW5zYWN0aW9uR2FzQ29zdEluVVNELAogICAgLy8gICBhcHBJZDogdGhpcy5nYXNPcmFjbGUudmFsdWUuaWQsCiAgICAvLyAgIGFyZ3M6IFtkZXN0aW5hdGlvbkNoYWluSWQsIGJyaWRnZUdhc0Ftb3VudCArIG1lc3Nlbmdlckdhc0Ftb3VudF0sCiAgICAvLyB9KS5yZXR1cm5WYWx1ZSAvIHRoaXMuZnJvbUdhc09yYWNsZVNjYWxpbmdGYWN0b3IoYXNzZXQpLnZhbHVlOwogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozMDIKICAgIC8vIGFwcElkOiB0aGlzLmdhc09yYWNsZS52YWx1ZS5pZCwKICAgIGludGNfMSAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjkKICAgIC8vIGdhc09yYWNsZSA9IEdsb2JhbFN0YXRlPEFwcGxpY2F0aW9uPigpOwogICAgYnl0ZWNfMyAvLyAiZ2FzT3JhY2xlIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozMDIKICAgIC8vIGFwcElkOiB0aGlzLmdhc09yYWNsZS52YWx1ZS5pZCwKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMwMwogICAgLy8gYXJnczogW2Rlc3RpbmF0aW9uQ2hhaW5JZCwgYnJpZGdlR2FzQW1vdW50ICsgbWVzc2VuZ2VyR2FzQW1vdW50XSwKICAgIGNvdmVyIDIKICAgICsKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzAwLTMwNAogICAgLy8gcmV0dXJuIGFiaUNhbGwoewogICAgLy8gICBtZXRob2Q6IEdhc09yYWNsZS5wcm90b3R5cGUuZ2V0VHJhbnNhY3Rpb25HYXNDb3N0SW5VU0QsCiAgICAvLyAgIGFwcElkOiB0aGlzLmdhc09yYWNsZS52YWx1ZS5pZCwKICAgIC8vICAgYXJnczogW2Rlc3RpbmF0aW9uQ2hhaW5JZCwgYnJpZGdlR2FzQW1vdW50ICsgbWVzc2VuZ2VyR2FzQW1vdW50XSwKICAgIC8vIH0pLnJldHVyblZhbHVlIC8gdGhpcy5mcm9tR2FzT3JhY2xlU2NhbGluZ0ZhY3Rvcihhc3NldCkudmFsdWU7CiAgICBwdXNoYnl0ZXMgMHg3YmY3ZDUwYyAvLyBtZXRob2QgImdldFRyYW5zYWN0aW9uR2FzQ29zdEluVVNEKGJ5dGUsdWludDY0KXVpbnQ2NCIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICB1bmNvdmVyIDMKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18xIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBkdXAKICAgIGV4dHJhY3QgNCAwCiAgICBzd2FwCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIEJ5dGVzIGhhcyB2YWxpZCBwcmVmaXgKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzA0CiAgICAvLyB9KS5yZXR1cm5WYWx1ZSAvIHRoaXMuZnJvbUdhc09yYWNsZVNjYWxpbmdGYWN0b3IoYXNzZXQpLnZhbHVlOwogICAgc3dhcAogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czozNgogICAgLy8gcHJvdGVjdGVkIGZyb21HYXNPcmFjbGVTY2FsaW5nRmFjdG9yID0gQm94TWFwPEFzc2V0LCB1aW50NjQ+KHsga2V5UHJlZml4OiAnZScgfSk7CiAgICBwdXNoYnl0ZXMgImUiCiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzA0CiAgICAvLyB9KS5yZXR1cm5WYWx1ZSAvIHRoaXMuZnJvbUdhc09yYWNsZVNjYWxpbmdGYWN0b3IoYXNzZXQpLnZhbHVlOwogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIEJveCBtdXN0IGhhdmUgdmFsdWUKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzAwLTMwNAogICAgLy8gcmV0dXJuIGFiaUNhbGwoewogICAgLy8gICBtZXRob2Q6IEdhc09yYWNsZS5wcm90b3R5cGUuZ2V0VHJhbnNhY3Rpb25HYXNDb3N0SW5VU0QsCiAgICAvLyAgIGFwcElkOiB0aGlzLmdhc09yYWNsZS52YWx1ZS5pZCwKICAgIC8vICAgYXJnczogW2Rlc3RpbmF0aW9uQ2hhaW5JZCwgYnJpZGdlR2FzQW1vdW50ICsgbWVzc2VuZ2VyR2FzQW1vdW50XSwKICAgIC8vIH0pLnJldHVyblZhbHVlIC8gdGhpcy5mcm9tR2FzT3JhY2xlU2NhbGluZ0ZhY3Rvcihhc3NldCkudmFsdWU7CiAgICAvCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjI4OAogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICBpdG9iCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo6QnJpZGdlLmhhc2hNZXNzYWdlW3JvdXRpbmddKCkgLT4gdm9pZDoKaGFzaE1lc3NhZ2U6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMwNwogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICBidG9pCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMQogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50OAogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNAogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAxCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ4CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyA1CiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDYKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgY2FsbHN1YiBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2UuaGFzaE1lc3NhZ2UKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2UuaXNPdGhlckJyaWRnZVRva2VuU3VwcG9ydGVkW3JvdXRpbmddKCkgLT4gdm9pZDoKaXNPdGhlckJyaWRnZVRva2VuU3VwcG9ydGVkOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozMzQKICAgIC8vIEBhYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAxCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ4CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzYxCiAgICAvLyByZXR1cm4gY2hhaW5JZC5ieXRlcy5jb25jYXQodG9rZW4uYnl0ZXMpOwogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjY3CiAgICAvLyBvdGhlckJyaWRnZVRva2VucyA9IEJveE1hcDxieXRlcywgU3RhdGljQnl0ZXM+KHsga2V5UHJlZml4OiAndCcgfSk7CiAgICBieXRlYyA3IC8vICJ0IgogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMzNgogICAgLy8gcmV0dXJuIHRoaXMub3RoZXJCcmlkZ2VUb2tlbnModGhpcy5fZ2V0T3RoZXJCcmlkZ2VUb2tlbnNLZXkoY2hhaW5JZCwgdG9rZW4pKS5leGlzdHM7CiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzM0CiAgICAvLyBAYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGJ5dGVjIDExIC8vIDB4MDAKICAgIGludGNfMSAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6OkJyaWRnZS5nZXRUcmFuc2FjdGlvbkNvc3Rbcm91dGluZ10oKSAtPiB2b2lkOgpnZXRUcmFuc2FjdGlvbkNvc3Q6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMzOQogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDEKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDgKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzQxCiAgICAvLyByZXR1cm4gdGhpcy5nZXRUcmFuc2FjdGlvblJlbGF5ZXJDb3N0KGNoYWluSWQpICsgdGhpcy5nZXRTZW5kVHJhbnNhY3Rpb25TdG9yYWdlQ29zdCgpOwogICAgY2FsbHN1YiBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjpHYXNVc2FnZS5nZXRUcmFuc2FjdGlvblJlbGF5ZXJDb3N0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjM1NQogICAgLy8gcmV0dXJuIDE1NzAwOwogICAgaW50YyA0IC8vIDE1NzAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjM0MQogICAgLy8gcmV0dXJuIHRoaXMuZ2V0VHJhbnNhY3Rpb25SZWxheWVyQ29zdChjaGFpbklkKSArIHRoaXMuZ2V0U2VuZFRyYW5zYWN0aW9uU3RvcmFnZUNvc3QoKTsKICAgICsKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzM5CiAgICAvLyBAYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGl0b2IKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjpSb3V0ZXIuc3dhcFtyb3V0aW5nXSgpIC0+IHZvaWQ6CnN3YXA6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjgxCiAgICAvLyBAYWJpbWV0aG9kKHsgZGVmYXVsdEFyZ3VtZW50czogeyBidWRnZXQ6IHsgY29uc3RhbnQ6IDEwMDAgfSB9IH0pCiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50Y18wIC8vIDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIHB1c2hpbnQgNCAvLyBheGZlcgogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIGF4ZmVyCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICBidG9pCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDQKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6ODkKICAgIC8vIGVuc3VyZUJ1ZGdldChidWRnZXQsIE9wVXBGZWVTb3VyY2UuR3JvdXBDcmVkaXQpOwogICAgaW50Y18xIC8vIDAKICAgIGNhbGxzdWIgZW5zdXJlX2J1ZGdldAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo2NAogICAgLy8gYXNzZXJ0KHRoaXMuY2FuU3dhcC52YWx1ZSwgJ1JvdXRlcjogc3dhcCBwcm9oaWJpdGVkJyk7CiAgICBpbnRjXzEgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo1MwogICAgLy8gY2FuU3dhcCA9IEdsb2JhbFN0YXRlPGJvb2xlYW4+KHsgaW5pdGlhbFZhbHVlOiB0cnVlIH0pOwogICAgYnl0ZWNfMSAvLyAiY2FuU3dhcCIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6NjQKICAgIC8vIGFzc2VydCh0aGlzLmNhblN3YXAudmFsdWUsICdSb3V0ZXI6IHN3YXAgcHJvaGliaXRlZCcpOwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBHbG9iYWxTdGF0ZSBleGlzdHMKICAgIGFzc2VydCAvLyBSb3V0ZXI6IHN3YXAgcHJvaGliaXRlZAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo5MQogICAgLy8gY29uc3Qgc2VuZGVyID0gbmV3IEFkZHJlc3MoVHhuLnNlbmRlcik7CiAgICB0eG4gU2VuZGVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjkyCiAgICAvLyBjb25zdCBhbW91bnQgPSBhbW91bnRGcm9tQXNzZXRUcmFuc2Zlcihhc3NldFRyYW5zZmVyUmVmKTsKICAgIGRpZyA0CiAgICBjYWxsc3ViIGFtb3VudEZyb21Bc3NldFRyYW5zZmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjkzCiAgICAvLyBjb25zdCB2VXNkQW1vdW50ID0gdGhpcy5zZW5kQW5kU3dhcFRvVlVzZChhc3NldFRyYW5zZmVyUmVmLnhmZXJBc3NldCwgc2VuZGVyLCBhbW91bnQpOwogICAgdW5jb3ZlciA1CiAgICBndHhucyBYZmVyQXNzZXQKICAgIGR1cAogICAgZGlnIDMKICAgIGRpZyAzCiAgICBjYWxsc3ViIHNlbmRBbmRTd2FwVG9WVXNkCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjk0CiAgICAvLyBjb25zdCByZWNlaXZlZEFtb3VudCA9IHRoaXMucmVjZWl2ZUFuZFN3YXBGcm9tVlVzZChyZWNlaXZlQXNzZXQsIHJlY2lwaWVudCwgdlVzZEFtb3VudCwgcmVjZWl2ZUFtb3VudE1pbik7CiAgICBkaWcgNgogICAgZGlnIDYKICAgIHVuY292ZXIgMgogICAgdW5jb3ZlciA2CiAgICBjYWxsc3ViIHJlY2VpdmVBbmRTd2FwRnJvbVZVc2QKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6OTUtMTAyCiAgICAvLyBlbWl0PFN3YXBwZWQ+KHsKICAgIC8vICAgc2VuZGVyLAogICAgLy8gICByZWNpcGllbnQsCiAgICAvLyAgIHRva2VuSWQ6IGFzc2V0VHJhbnNmZXJSZWYueGZlckFzc2V0LmlkLAogICAgLy8gICByZWNlaXZlVG9rZW5JZDogcmVjZWl2ZUFzc2V0LmlkLAogICAgLy8gICBhbW91bnQsCiAgICAvLyAgIHJlY2VpdmVkQW1vdW50LAogICAgLy8gfSk7CiAgICB1bmNvdmVyIDMKICAgIHVuY292ZXIgNAogICAgY29uY2F0CiAgICB1bmNvdmVyIDIKICAgIGl0b2IKICAgIGNvbmNhdAogICAgdW5jb3ZlciAzCiAgICBpdG9iCiAgICBjb25jYXQKICAgIHVuY292ZXIgMgogICAgaXRvYgogICAgY29uY2F0CiAgICBzd2FwCiAgICBpdG9iCiAgICBjb25jYXQKICAgIHB1c2hieXRlcyAweDE1NDA0NGIzIC8vIG1ldGhvZCAiU3dhcHBlZChhZGRyZXNzLGFkZHJlc3MsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0KSIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjgxCiAgICAvLyBAYWJpbWV0aG9kKHsgZGVmYXVsdEFyZ3VtZW50czogeyBidWRnZXQ6IHsgY29uc3RhbnQ6IDEwMDAgfSB9IH0pCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo6Um91dGVyLmFkZFBvb2xbcm91dGluZ10oKSAtPiB2b2lkOgphZGRQb29sOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxMTIKICAgIC8vIEBhYmltZXRob2QoKQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxMTQKICAgIC8vIHRoaXMub25seU93bmVyKCk7CiAgICBjYWxsc3ViIG9ubHlPd25lcgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxMTUKICAgIC8vIHRoaXMucG9vbHMoYXNzZXQpLnZhbHVlID0gcG9vbElkOwogICAgZHVwCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjM0CiAgICAvLyBwb29scyA9IEJveE1hcDxBc3NldCwgdWludDY0Pih7IGtleVByZWZpeDogJ3AnIH0pOwogICAgYnl0ZWMgOCAvLyAicCIKICAgIGRpZyAxCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTE1CiAgICAvLyB0aGlzLnBvb2xzKGFzc2V0KS52YWx1ZSA9IHBvb2xJZDsKICAgIHVuY292ZXIgMwogICAgaXRvYgogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxMTYKICAgIC8vIGNvbnN0IHRva2VuRGVjaW1hbHMgPSBhc3NldC5kZWNpbWFsczsKICAgIHN3YXAKICAgIGFzc2V0X3BhcmFtc19nZXQgQXNzZXREZWNpbWFscwogICAgYXNzZXJ0IC8vIGFzc2V0IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxMTcKICAgIC8vIHRoaXMuYnJpZGdpbmdGZWVDb252ZXJzaW9uU2NhbGluZ0ZhY3Rvcihhc3NldCkudmFsdWUgPSAxMCAqKiAoT1JBQ0xFX1BSSUNFX1BSRUNJU0lPTiAtIHRva2VuRGVjaW1hbHMgKyBDSEFJTl9QUkVDSVNJT04pOwogICAgcHVzaGludCA5IC8vIDkKICAgIHN3YXAKICAgIC0KICAgIGR1cAogICAgcHVzaGludCA2IC8vIDYKICAgICsKICAgIHB1c2hpbnQgMTAgLy8gMTAKICAgIHN3YXAKICAgIGV4cAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czozOQogICAgLy8gcHJvdGVjdGVkIGJyaWRnaW5nRmVlQ29udmVyc2lvblNjYWxpbmdGYWN0b3IgPSBCb3hNYXA8QXNzZXQsIHVpbnQ2ND4oeyBrZXlQcmVmaXg6ICdmJyB9KTsKICAgIHB1c2hieXRlcyAiZiIKICAgIGRpZyAzCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTE3CiAgICAvLyB0aGlzLmJyaWRnaW5nRmVlQ29udmVyc2lvblNjYWxpbmdGYWN0b3IoYXNzZXQpLnZhbHVlID0gMTAgKiogKE9SQUNMRV9QUklDRV9QUkVDSVNJT04gLSB0b2tlbkRlY2ltYWxzICsgQ0hBSU5fUFJFQ0lTSU9OKTsKICAgIHN3YXAKICAgIGl0b2IKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTE4CiAgICAvLyB0aGlzLmZyb21HYXNPcmFjbGVTY2FsaW5nRmFjdG9yKGFzc2V0KS52YWx1ZSA9IDEwICoqIChPUkFDTEVfUFJJQ0VfUFJFQ0lTSU9OIC0gdG9rZW5EZWNpbWFscyk7CiAgICBwdXNoaW50IDEwIC8vIDEwCiAgICBzd2FwCiAgICBleHAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MzYKICAgIC8vIHByb3RlY3RlZCBmcm9tR2FzT3JhY2xlU2NhbGluZ0ZhY3RvciA9IEJveE1hcDxBc3NldCwgdWludDY0Pih7IGtleVByZWZpeDogJ2UnIH0pOwogICAgcHVzaGJ5dGVzICJlIgogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTE4CiAgICAvLyB0aGlzLmZyb21HYXNPcmFjbGVTY2FsaW5nRmFjdG9yKGFzc2V0KS52YWx1ZSA9IDEwICoqIChPUkFDTEVfUFJJQ0VfUFJFQ0lTSU9OIC0gdG9rZW5EZWNpbWFscyk7CiAgICBzd2FwCiAgICBpdG9iCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjExMgogICAgLy8gQGFiaW1ldGhvZCgpCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo6Um91dGVyLnJlbW92ZVBvb2xbcm91dGluZ10oKSAtPiB2b2lkOgpyZW1vdmVQb29sOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxMjEKICAgIC8vIEBhYmltZXRob2QoKQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxMjMKICAgIC8vIHRoaXMub25seU93bmVyKCk7CiAgICBjYWxsc3ViIG9ubHlPd25lcgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxMjQKICAgIC8vIHRoaXMucG9vbHModG9rZW5JZCkuZGVsZXRlKCk7CiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjM0CiAgICAvLyBwb29scyA9IEJveE1hcDxBc3NldCwgdWludDY0Pih7IGtleVByZWZpeDogJ3AnIH0pOwogICAgYnl0ZWMgOCAvLyAicCIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxMjQKICAgIC8vIHRoaXMucG9vbHModG9rZW5JZCkuZGVsZXRlKCk7CiAgICBib3hfZGVsCiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTIxCiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjpSb3V0ZXIuc3RvcFN3YXBbcm91dGluZ10oKSAtPiB2b2lkOgpzdG9wU3dhcDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6NzEKICAgIC8vIGFzc2VydChvcC5UeG4uc2VuZGVyLmJ5dGVzID09PSB0aGlzLnN0b3BBdXRob3JpdHkudmFsdWUuYnl0ZXMsICdSb3V0ZXI6IGlzIG5vdCBzdG9wQXV0aG9yaXR5Jyk7CiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzEgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo0MgogICAgLy8gcHJpdmF0ZSBzdG9wQXV0aG9yaXR5ID0gR2xvYmFsU3RhdGU8QWRkcmVzcz4oKTsvLyBjYW4gcmVzdHJpY3QgZGVwb3NpdCBvciB3aXRoZHJhdyBvcGVyYXRpb25zCiAgICBieXRlYyA5IC8vICJzdG9wQXV0aG9yaXR5IgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo3MQogICAgLy8gYXNzZXJ0KG9wLlR4bi5zZW5kZXIuYnl0ZXMgPT09IHRoaXMuc3RvcEF1dGhvcml0eS52YWx1ZS5ieXRlcywgJ1JvdXRlcjogaXMgbm90IHN0b3BBdXRob3JpdHknKTsKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICA9PQogICAgYXNzZXJ0IC8vIFJvdXRlcjogaXMgbm90IHN0b3BBdXRob3JpdHkKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6NTMKICAgIC8vIGNhblN3YXAgPSBHbG9iYWxTdGF0ZTxib29sZWFuPih7IGluaXRpYWxWYWx1ZTogdHJ1ZSB9KTsKICAgIGJ5dGVjXzEgLy8gImNhblN3YXAiCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjEzMwogICAgLy8gdGhpcy5jYW5Td2FwLnZhbHVlID0gZmFsc2U7CiAgICBpbnRjXzEgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTMwCiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjpSb3V0ZXIuc3RhcnRTd2FwW3JvdXRpbmddKCkgLT4gdm9pZDoKc3RhcnRTd2FwOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxNDEKICAgIC8vIHRoaXMub25seU93bmVyKCk7CiAgICBjYWxsc3ViIG9ubHlPd25lcgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo1MwogICAgLy8gY2FuU3dhcCA9IEdsb2JhbFN0YXRlPGJvb2xlYW4+KHsgaW5pdGlhbFZhbHVlOiB0cnVlIH0pOwogICAgYnl0ZWNfMSAvLyAiY2FuU3dhcCIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTQyCiAgICAvLyB0aGlzLmNhblN3YXAudmFsdWUgPSB0cnVlOwogICAgaW50Y18wIC8vIDEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjEzOQogICAgLy8gQGFiaW1ldGhvZCgpCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo6Um91dGVyLnNldFN0b3BBdXRob3JpdHlbcm91dGluZ10oKSAtPiB2b2lkOgpzZXRTdG9wQXV0aG9yaXR5OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxNDgKICAgIC8vIEBhYmltZXRob2QoKQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE1MAogICAgLy8gdGhpcy5vbmx5T3duZXIoKTsKICAgIGNhbGxzdWIgb25seU93bmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjQyCiAgICAvLyBwcml2YXRlIHN0b3BBdXRob3JpdHkgPSBHbG9iYWxTdGF0ZTxBZGRyZXNzPigpOy8vIGNhbiByZXN0cmljdCBkZXBvc2l0IG9yIHdpdGhkcmF3IG9wZXJhdGlvbnMKICAgIGJ5dGVjIDkgLy8gInN0b3BBdXRob3JpdHkiCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE1MQogICAgLy8gdGhpcy5zdG9wQXV0aG9yaXR5LnZhbHVlID0gc3RvcEF1dGhvcml0eTsKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE0OAogICAgLy8gQGFiaW1ldGhvZCgpCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo6Um91dGVyLnNldFJlYmFsYW5jZXJbcm91dGluZ10oKSAtPiB2b2lkOgpzZXRSZWJhbGFuY2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxNTcKICAgIC8vIEBhYmltZXRob2QoKQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE1OQogICAgLy8gdGhpcy5vbmx5T3duZXIoKTsKICAgIGNhbGxzdWIgb25seU93bmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjUyCiAgICAvLyBwcml2YXRlIHJlYmFsYW5jZXIgPSBHbG9iYWxTdGF0ZTxBZGRyZXNzPih7IGluaXRpYWxWYWx1ZTogbmV3IEFkZHJlc3MoYnplcm8oMCkpIH0pOy8vIGNhbiByZXN0cmljdCBkZXBvc2l0IG9yIHdpdGhkcmF3IG9wZXJhdGlvbnMKICAgIGJ5dGVjIDQgLy8gInJlYmFsYW5jZXIiCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE2MAogICAgLy8gdGhpcy5yZWJhbGFuY2VyLnZhbHVlID0gcmViYWxhbmNlcjsKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE1NwogICAgLy8gQGFiaW1ldGhvZCgpCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo6R2FzVXNhZ2UuZ2V0R2FzVXNhZ2Vbcm91dGluZ10oKSAtPiB2b2lkOgpnZXRHYXNVc2FnZToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MTcKICAgIC8vIEBhYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAxCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ4CiAgICBjYWxsc3ViIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6Okdhc1VzYWdlLmdldEdhc1VzYWdlCiAgICBpdG9iCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo6R2FzVXNhZ2Uuc2V0R2FzVXNhZ2Vbcm91dGluZ10oKSAtPiB2b2lkOgpzZXRHYXNVc2FnZToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MjIKICAgIC8vIEBhYmltZXRob2QoKQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAxCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ4CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjI0CiAgICAvLyB0aGlzLm9ubHlPd25lcigpOwogICAgY2FsbHN1YiBvbmx5T3duZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MTAKICAgIC8vIGdhc1VzYWdlID0gQm94TWFwPEJ5dGUsIHVpbnQ2ND4oeyBrZXlQcmVmaXg6ICd1JyB9KTsKICAgIGJ5dGVjIDEyIC8vICJ1IgogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MjUKICAgIC8vIHRoaXMuZ2FzVXNhZ2UoY2hhaW5JZCkudmFsdWUgPSBnYXNBbW91bnQ7CiAgICBzd2FwCiAgICBpdG9iCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjIyCiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjpHYXNVc2FnZS5zZXRHYXNPcmFjbGVbcm91dGluZ10oKSAtPiB2b2lkOgpzZXRHYXNPcmFjbGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjI4CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MzAKICAgIC8vIHRoaXMub25seU93bmVyKCk7CiAgICBjYWxsc3ViIG9ubHlPd25lcgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo5CiAgICAvLyBnYXNPcmFjbGUgPSBHbG9iYWxTdGF0ZTxBcHBsaWNhdGlvbj4oKTsKICAgIGJ5dGVjXzMgLy8gImdhc09yYWNsZSIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MzEKICAgIC8vIHRoaXMuZ2FzT3JhY2xlLnZhbHVlID0gZ2FzT3JhY2xlOwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MjgKICAgIC8vIEBhYmltZXRob2QoKQogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6Okdhc1VzYWdlLmdldFRyYW5zYWN0aW9uUmVsYXllckNvc3Rbcm91dGluZ10oKSAtPiB2b2lkOgpnZXRUcmFuc2FjdGlvblJlbGF5ZXJDb3N0OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czozNAogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDEKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDgKICAgIGNhbGxzdWIgc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo6R2FzVXNhZ2UuZ2V0VHJhbnNhY3Rpb25SZWxheWVyQ29zdAogICAgaXRvYgogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvb3duYWJsZS5hbGdvLnRzOjpPd25hYmxlLnRyYW5zZmVyT3duZXJzaGlwW3JvdXRpbmddKCkgLT4gdm9pZDoKdHJhbnNmZXJPd25lcnNoaXA6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL293bmFibGUuYWxnby50czoxNgogICAgLy8gQGFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvb3duYWJsZS5hbGdvLnRzOjE4CiAgICAvLyB0aGlzLm9ubHlPd25lcigpOwogICAgY2FsbHN1YiBvbmx5T3duZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvb3duYWJsZS5hbGdvLnRzOjYKICAgIC8vIHByb3RlY3RlZCBvd25lciA9IEdsb2JhbFN0YXRlPEFkZHJlc3M+KCk7CiAgICBieXRlY18yIC8vICJvd25lciIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvb3duYWJsZS5hbGdvLnRzOjE5CiAgICAvLyB0aGlzLm93bmVyLnZhbHVlID0gbmV3T3duZXI7CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9vd25hYmxlLmFsZ28udHM6MTYKICAgIC8vIEBhYmltZXRob2QoKQogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6OkJyaWRnZS5fc3dhcEFuZEJyaWRnZShmZWVGcm9tTmF0aXZlOiB1aW50NjQsIGFzc2V0VHJhbnNmZXJSZWY6IHVpbnQ2NCwgcmVjaXBpZW50OiBieXRlcywgZGVzdGluYXRpb25DaGFpbklkOiBieXRlcywgcmVjZWl2ZVRva2VuOiBieXRlcywgbm9uY2U6IGJ5dGVzLCBmZWVUb2tlbkFtb3VudDogdWludDY0LCBidWRnZXQ6IHVpbnQ2NCkgLT4gdm9pZDoKX3N3YXBBbmRCcmlkZ2U6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjExNi0xMjUKICAgIC8vIHByaXZhdGUgX3N3YXBBbmRCcmlkZ2UoCiAgICAvLyAgIGZlZUZyb21OYXRpdmU6IHVpbnQ2NCwKICAgIC8vICAgYXNzZXRUcmFuc2ZlclJlZjogZ3R4bi5Bc3NldFRyYW5zZmVyVHhuLAogICAgLy8gICByZWNpcGllbnQ6IFN0YXRpY0J5dGVzPDMyPiwKICAgIC8vICAgZGVzdGluYXRpb25DaGFpbklkOiBCeXRlLAogICAgLy8gICByZWNlaXZlVG9rZW46IFN0YXRpY0J5dGVzPDMyPiwKICAgIC8vICAgbm9uY2U6IFN0YXRpY0J5dGVzPDMyPiwKICAgIC8vICAgZmVlVG9rZW5BbW91bnQ6IHVpbnQ2NCwKICAgIC8vICAgYnVkZ2V0OiB1aW50NjQsCiAgICAvLyApOiB2b2lkIHsKICAgIHByb3RvIDggMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxMjYKICAgIC8vIGVuc3VyZUJ1ZGdldChidWRnZXQsIE9wVXBGZWVTb3VyY2UuR3JvdXBDcmVkaXQpOwogICAgZnJhbWVfZGlnIC0xCiAgICBpbnRjXzEgLy8gMAogICAgY2FsbHN1YiBlbnN1cmVfYnVkZ2V0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjY0CiAgICAvLyBhc3NlcnQodGhpcy5jYW5Td2FwLnZhbHVlLCAnUm91dGVyOiBzd2FwIHByb2hpYml0ZWQnKTsKICAgIGludGNfMSAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjUzCiAgICAvLyBjYW5Td2FwID0gR2xvYmFsU3RhdGU8Ym9vbGVhbj4oeyBpbml0aWFsVmFsdWU6IHRydWUgfSk7CiAgICBieXRlY18xIC8vICJjYW5Td2FwIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo2NAogICAgLy8gYXNzZXJ0KHRoaXMuY2FuU3dhcC52YWx1ZSwgJ1JvdXRlcjogc3dhcCBwcm9oaWJpdGVkJyk7CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIEdsb2JhbFN0YXRlIGV4aXN0cwogICAgYXNzZXJ0IC8vIFJvdXRlcjogc3dhcCBwcm9oaWJpdGVkCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjEyOAogICAgLy8gY29uc3QgYW1vdW50ID0gYW1vdW50RnJvbUFzc2V0VHJhbnNmZXIoYXNzZXRUcmFuc2ZlclJlZik7CiAgICBmcmFtZV9kaWcgLTcKICAgIGNhbGxzdWIgYW1vdW50RnJvbUFzc2V0VHJhbnNmZXIKICAgIGR1cAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxMjkKICAgIC8vIGFzc2VydChhbW91bnQgPiBmZWVUb2tlbkFtb3VudCwgJ0JyaWRnZTogYW1vdW50IHRvbyBsb3cgZm9yIGZlZScpOwogICAgZnJhbWVfZGlnIC0yCiAgICA+CiAgICBhc3NlcnQgLy8gQnJpZGdlOiBhbW91bnQgdG9vIGxvdyBmb3IgZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjEzMAogICAgLy8gYXNzZXJ0KCFyZWNpcGllbnQuYnl0ZXMuZXF1YWxzKGJ6ZXJvKDMyKSksICdCcmlkZ2U6IGJyaWRnZSB0byB0aGUgemVybyBhZGRyZXNzJyk7CiAgICBpbnRjXzMgLy8gMzIKICAgIGJ6ZXJvCiAgICBmcmFtZV9kaWcgLTYKICAgID09CiAgICAhCiAgICBhc3NlcnQgLy8gQnJpZGdlOiBicmlkZ2UgdG8gdGhlIHplcm8gYWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxMzIKICAgIC8vIGNvbnN0IGZlZUZyb21TdGFibGU6IHVpbnQ2NCA9IHRoaXMuX2NvbnZlcnRCcmlkZ2luZ0ZlZUluVG9rZW5zVG9OYXRpdmVUb2tlbihhc3NldFRyYW5zZmVyUmVmLnhmZXJBc3NldCwgZmVlVG9rZW5BbW91bnQpOwogICAgZnJhbWVfZGlnIC03CiAgICBndHhucyBYZmVyQXNzZXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzY1CiAgICAvLyBpZiAoZmVlVG9rZW5BbW91bnQgPT09IDApIHJldHVybiAwOwogICAgZnJhbWVfZGlnIC0yCiAgICBibnogX3N3YXBBbmRCcmlkZ2VfYWZ0ZXJfaWZfZWxzZUAzCiAgICBpbnRjXzEgLy8gMAoKX3N3YXBBbmRCcmlkZ2VfYWZ0ZXJfaW5saW5lZF9zbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2UuX2NvbnZlcnRCcmlkZ2luZ0ZlZUluVG9rZW5zVG9OYXRpdmVUb2tlbkA1OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxMzMKICAgIC8vIGNvbnN0IGJyaWRnaW5nRmVlOiB1aW50NjQgPSBmZWVGcm9tTmF0aXZlICsgZmVlRnJvbVN0YWJsZTsKICAgIGZyYW1lX2RpZyAtOAogICAgZGlnIDEKICAgICsKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTM0CiAgICAvLyBlbWl0PEJyaWRnaW5nRmVlRnJvbVRva2Vucz4oeyBmZWVGcm9tTmF0aXZlLCBmZWVGcm9tU3RhYmxlLCBmZWVTdGFibGVUb2tlbkFtb3VudDogZmVlVG9rZW5BbW91bnQgfSk7CiAgICBmcmFtZV9kaWcgLTgKICAgIGl0b2IKICAgIHVuY292ZXIgMgogICAgaXRvYgogICAgY29uY2F0CiAgICBmcmFtZV9kaWcgLTIKICAgIGl0b2IKICAgIGNvbmNhdAogICAgcHVzaGJ5dGVzIDB4MzZiYWZhZGQgLy8gbWV0aG9kICJCcmlkZ2luZ0ZlZUZyb21Ub2tlbnModWludDY0LHVpbnQ2NCx1aW50NjQpIgogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTM2CiAgICAvLyBjb25zdCBhbW91bnRBZnRlckZlZTogdWludDY0ID0gYW1vdW50IC0gZmVlVG9rZW5BbW91bnQ7CiAgICBmcmFtZV9kaWcgMAogICAgZnJhbWVfZGlnIC0yCiAgICAtCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjEzOAogICAgLy8gY29uc3QgdlVzZEFtb3VudCA9IHRoaXMuc2VuZEFuZFN3YXBUb1ZVc2QoYXNzZXRUcmFuc2ZlclJlZi54ZmVyQXNzZXQsIHNlbmRlciwgYW1vdW50QWZ0ZXJGZWUpOwogICAgZnJhbWVfZGlnIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTM3CiAgICAvLyBjb25zdCBzZW5kZXIgPSBuZXcgQWRkcmVzcyhUeG4uc2VuZGVyKTsKICAgIHR4biBTZW5kZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTM4CiAgICAvLyBjb25zdCB2VXNkQW1vdW50ID0gdGhpcy5zZW5kQW5kU3dhcFRvVlVzZChhc3NldFRyYW5zZmVyUmVmLnhmZXJBc3NldCwgc2VuZGVyLCBhbW91bnRBZnRlckZlZSk7CiAgICB1bmNvdmVyIDIKICAgIGNhbGxzdWIgc2VuZEFuZFN3YXBUb1ZVc2QKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTUwCiAgICAvLyBhc3NlcnQoZGVzdGluYXRpb25DaGFpbklkICE9PSB0aGlzLmNoYWluSWQudmFsdWUsICdCcmlkZ2U6IHdyb25nIGRlc3RpbmF0aW9uIGNoYWluJyk7CiAgICBpbnRjXzEgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo1NwogICAgLy8gY2hhaW5JZCA9IEdsb2JhbFN0YXRlPEJ5dGU+KCk7CiAgICBieXRlYyA1IC8vICJjaGFpbklkIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxNTAKICAgIC8vIGFzc2VydChkZXN0aW5hdGlvbkNoYWluSWQgIT09IHRoaXMuY2hhaW5JZC52YWx1ZSwgJ0JyaWRnZTogd3JvbmcgZGVzdGluYXRpb24gY2hhaW4nKTsKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTUKICAgIGRpZyAxCiAgICAhPQogICAgYXNzZXJ0IC8vIEJyaWRnZTogd3JvbmcgZGVzdGluYXRpb24gY2hhaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzYxCiAgICAvLyByZXR1cm4gY2hhaW5JZC5ieXRlcy5jb25jYXQodG9rZW4uYnl0ZXMpOwogICAgZnJhbWVfZGlnIC01CiAgICBmcmFtZV9kaWcgLTQKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo2NwogICAgLy8gb3RoZXJCcmlkZ2VUb2tlbnMgPSBCb3hNYXA8Ynl0ZXMsIFN0YXRpY0J5dGVzPih7IGtleVByZWZpeDogJ3QnIH0pOwogICAgYnl0ZWMgNyAvLyAidCIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxNTEKICAgIC8vIGFzc2VydCh0aGlzLm90aGVyQnJpZGdlVG9rZW5zKHRoaXMuX2dldE90aGVyQnJpZGdlVG9rZW5zS2V5KGRlc3RpbmF0aW9uQ2hhaW5JZCwgcmVjZWl2ZVRva2VuKSkuZXhpc3RzLCAnQnJpZGdlOiB1bmtub3duIGNoYWluIG9yIHRva2VuJyk7CiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBCcmlkZ2U6IHVua25vd24gY2hhaW4gb3IgdG9rZW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTUzCiAgICAvLyBjb25zdCBtZXNzYWdlID0gdGhpcy5oYXNoTWVzc2FnZShhbW91bnQsIHJlY2lwaWVudCwgdGhpcy5jaGFpbklkLnZhbHVlLCBkZXN0aW5hdGlvbkNoYWluSWQsIHJlY2VpdmVUb2tlbiwgbm9uY2UpOwogICAgZGlnIDEKICAgIGZyYW1lX2RpZyAtNgogICAgdW5jb3ZlciAyCiAgICBmcmFtZV9kaWcgLTUKICAgIGZyYW1lX2RpZyAtNAogICAgZnJhbWVfZGlnIC0zCiAgICBjYWxsc3ViIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6OkJyaWRnZS5oYXNoTWVzc2FnZQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozNDEKICAgIC8vIHJldHVybiB0aGlzLmdldFRyYW5zYWN0aW9uUmVsYXllckNvc3QoY2hhaW5JZCkgKyB0aGlzLmdldFNlbmRUcmFuc2FjdGlvblN0b3JhZ2VDb3N0KCk7CiAgICBmcmFtZV9kaWcgLTUKICAgIGNhbGxzdWIgc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo6R2FzVXNhZ2UuZ2V0VHJhbnNhY3Rpb25SZWxheWVyQ29zdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozNTUKICAgIC8vIHJldHVybiAxNTcwMDsKICAgIGludGMgNCAvLyAxNTcwMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozNDEKICAgIC8vIHJldHVybiB0aGlzLmdldFRyYW5zYWN0aW9uUmVsYXllckNvc3QoY2hhaW5JZCkgKyB0aGlzLmdldFNlbmRUcmFuc2FjdGlvblN0b3JhZ2VDb3N0KCk7CiAgICArCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjYyCiAgICAvLyBzZW50TWVzc2FnZXMgPSBCb3hNYXA8U3RhdGljQnl0ZXM8MzI+LCBTdGF0aWNCeXRlcz4oeyBrZXlQcmVmaXg6ICdzJyB9KTsKICAgIHB1c2hieXRlcyAicyIKICAgIGRpZyAyCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTcyCiAgICAvLyBhc3NlcnQoIXRoaXMuc2VudE1lc3NhZ2VzKG1lc3NhZ2UpLmV4aXN0cywgJ0JyaWRnZTogdG9rZW5zIGFscmVhZHkgc2VudCcpOwogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBCcmlkZ2U6IHRva2VucyBhbHJlYWR5IHNlbnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTc0CiAgICAvLyB0aGlzLnNlbnRNZXNzYWdlcyhtZXNzYWdlKS52YWx1ZSA9IG5ldyBTdGF0aWNCeXRlcygpOwogICAgcHVzaGJ5dGVzIDB4CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjE3NgogICAgLy8gY29uc3QgZGVzdGluYXRpb25DaGFpbklkID0gbWVzc2FnZS5hdCgxKTsKICAgIGRpZyAxCiAgICBleHRyYWN0IDEgMSAvLyBvbiBlcnJvcjogaW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTc3LTE4MQogICAgLy8gY29uc3QgbWVzc2FnZUNvc3QgPSBhYmlDYWxsKHsKICAgIC8vICAgbWV0aG9kOiBNZXNzZW5nZXIucHJvdG90eXBlLmdldFRyYW5zYWN0aW9uQ29zdCwKICAgIC8vICAgYXBwSWQ6IHRoaXMubWVzc2VuZ2VyLnZhbHVlLmlkLAogICAgLy8gICBhcmdzOiBbZGVzdGluYXRpb25DaGFpbklkXSwKICAgIC8vIH0pLnJldHVyblZhbHVlOwogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxNzkKICAgIC8vIGFwcElkOiB0aGlzLm1lc3Nlbmdlci52YWx1ZS5pZCwKICAgIGludGNfMSAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjU4CiAgICAvLyBtZXNzZW5nZXIgPSBHbG9iYWxTdGF0ZTxBcHBsaWNhdGlvbj4oKTsKICAgIGJ5dGVjIDYgLy8gIm1lc3NlbmdlciIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTc5CiAgICAvLyBhcHBJZDogdGhpcy5tZXNzZW5nZXIudmFsdWUuaWQsCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIEdsb2JhbFN0YXRlIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxNzctMTgxCiAgICAvLyBjb25zdCBtZXNzYWdlQ29zdCA9IGFiaUNhbGwoewogICAgLy8gICBtZXRob2Q6IE1lc3Nlbmdlci5wcm90b3R5cGUuZ2V0VHJhbnNhY3Rpb25Db3N0LAogICAgLy8gICBhcHBJZDogdGhpcy5tZXNzZW5nZXIudmFsdWUuaWQsCiAgICAvLyAgIGFyZ3M6IFtkZXN0aW5hdGlvbkNoYWluSWRdLAogICAgLy8gfSkucmV0dXJuVmFsdWU7CiAgICBieXRlYyAxMyAvLyBtZXRob2QgImdldFRyYW5zYWN0aW9uQ29zdChieXRlKXVpbnQ2NCIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBzd2FwCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZHVwCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uSUQKICAgIHB1c2hpbnQgNiAvLyBhcHBsCiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIGl0eG5fc3VibWl0CiAgICBpdHhuIExhc3RMb2cKICAgIGR1cAogICAgZXh0cmFjdCA0IDAKICAgIHN3YXAKICAgIGV4dHJhY3QgMCA0CiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgID09CiAgICBhc3NlcnQgLy8gQnl0ZXMgaGFzIHZhbGlkIHByZWZpeAogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxODUKICAgIC8vIHJlY2VpdmVyOiB0aGlzLm1lc3Nlbmdlci52YWx1ZS5hZGRyZXNzLAogICAgZGlnIDEKICAgIGFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTg3LTE4OQogICAgLy8gYWJpQ2FsbCh7CiAgICAvLyAgIG1ldGhvZDogTWVzc2VuZ2VyLnByb3RvdHlwZS5zZW5kTWVzc2FnZSwgYXBwSWQ6IHRoaXMubWVzc2VuZ2VyLnZhbHVlLmlkLCBhcmdzOiBbcGF5bWVudFBhcmFtcywgbWVzc2FnZV0sCiAgICAvLyB9KTsKICAgIGl0eG5fYmVnaW4KICAgIGl0eG5fZmllbGQgUmVjZWl2ZXIKICAgIGR1cAogICAgaXR4bl9maWVsZCBBbW91bnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTgzLTE4NgogICAgLy8gY29uc3QgcGF5bWVudFBhcmFtcyA9IGl0eG4ucGF5bWVudCh7CiAgICAvLyAgIGFtb3VudDogbWVzc2FnZUNvc3QsCiAgICAvLyAgIHJlY2VpdmVyOiB0aGlzLm1lc3Nlbmdlci52YWx1ZS5hZGRyZXNzLAogICAgLy8gfSk7CiAgICBpbnRjXzAgLy8gMQogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18xIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjE4Ny0xODkKICAgIC8vIGFiaUNhbGwoewogICAgLy8gICBtZXRob2Q6IE1lc3Nlbmdlci5wcm90b3R5cGUuc2VuZE1lc3NhZ2UsIGFwcElkOiB0aGlzLm1lc3Nlbmdlci52YWx1ZS5pZCwgYXJnczogW3BheW1lbnRQYXJhbXMsIG1lc3NhZ2VdLAogICAgLy8gfSk7CiAgICBpdHhuX25leHQKICAgIHB1c2hieXRlcyAweGQwMmY1N2Y1IC8vIG1ldGhvZCAic2VuZE1lc3NhZ2UocGF5LGJ5dGVbMzJdKXZvaWQiCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgdW5jb3ZlciAzCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgc3dhcAogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18xIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxNTYKICAgIC8vIGVtaXQ8UmVjZWl2ZUZlZT4oeyBicmlkZ2VUcmFuc2FjdGlvbkNvc3QsIG1lc3NhZ2VUcmFuc2FjdGlvbkNvc3QgfSk7CiAgICBkaWcgMQogICAgaXRvYgogICAgZGlnIDEKICAgIGl0b2IKICAgIGNvbmNhdAogICAgcHVzaGJ5dGVzIDB4NGI1NTQxOWIgLy8gbWV0aG9kICJSZWNlaXZlRmVlKHVpbnQ2NCx1aW50NjQpIgogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTU3CiAgICAvLyBhc3NlcnQoYnJpZGdpbmdGZWUgPj0gYnJpZGdlVHJhbnNhY3Rpb25Db3N0ICsgbWVzc2FnZVRyYW5zYWN0aW9uQ29zdCwgJ0JyaWRnZTogbm90IGVub3VnaCBmZWUnKTsKICAgICsKICAgIHVuY292ZXIgMgogICAgPD0KICAgIGFzc2VydCAvLyBCcmlkZ2U6IG5vdCBlbm91Z2ggZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjE1OC0xNjUKICAgIC8vIGVtaXQ8VG9rZW5zU2VudD4oewogICAgLy8gICAgIGFtb3VudCwKICAgIC8vICAgICByZWNpcGllbnQsCiAgICAvLyAgICAgZGVzdGluYXRpb25DaGFpbklkLAogICAgLy8gICAgIHJlY2VpdmVUb2tlbiwKICAgIC8vICAgICBub25jZSwKICAgIC8vICAgICBtZXNzZW5nZXI6IEFMTEJSSURHRV9NRVNTRU5HRVIsCiAgICAvLyAgIH0sCiAgICBpdG9iCiAgICBmcmFtZV9kaWcgLTYKICAgIGNvbmNhdAogICAgZnJhbWVfZGlnIC01CiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtNAogICAgY29uY2F0CiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxNjQKICAgIC8vIG1lc3NlbmdlcjogQUxMQlJJREdFX01FU1NFTkdFUiwKICAgIGJ5dGVjIDEwIC8vIDB4MDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTU4LTE2NQogICAgLy8gZW1pdDxUb2tlbnNTZW50Pih7CiAgICAvLyAgICAgYW1vdW50LAogICAgLy8gICAgIHJlY2lwaWVudCwKICAgIC8vICAgICBkZXN0aW5hdGlvbkNoYWluSWQsCiAgICAvLyAgICAgcmVjZWl2ZVRva2VuLAogICAgLy8gICAgIG5vbmNlLAogICAgLy8gICAgIG1lc3NlbmdlcjogQUxMQlJJREdFX01FU1NFTkdFUiwKICAgIC8vICAgfSwKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czoxNTgtMTY2CiAgICAvLyBlbWl0PFRva2Vuc1NlbnQ+KHsKICAgIC8vICAgICBhbW91bnQsCiAgICAvLyAgICAgcmVjaXBpZW50LAogICAgLy8gICAgIGRlc3RpbmF0aW9uQ2hhaW5JZCwKICAgIC8vICAgICByZWNlaXZlVG9rZW4sCiAgICAvLyAgICAgbm9uY2UsCiAgICAvLyAgICAgbWVzc2VuZ2VyOiBBTExCUklER0VfTUVTU0VOR0VSLAogICAgLy8gICB9LAogICAgLy8gKTsKICAgIHB1c2hieXRlcyAweDIyOWZiYWVjIC8vIG1ldGhvZCAiVG9rZW5zU2VudCh1aW50NjQsYnl0ZVszMl0sYnl0ZSxieXRlWzMyXSxieXRlWzMyXSxieXRlKSIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICByZXRzdWIKCl9zd2FwQW5kQnJpZGdlX2FmdGVyX2lmX2Vsc2VAMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzY3CiAgICAvLyBjb25zdCBmZWU6IHVpbnQ2NCA9IHRoaXMuYnJpZGdpbmdGZWVDb252ZXJzaW9uU2NhbGluZ0ZhY3Rvcihhc3NldCkudmFsdWUgKiBmZWVUb2tlbkFtb3VudCAvIGFiaUNhbGwoewogICAgZnJhbWVfZGlnIDEKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MzkKICAgIC8vIHByb3RlY3RlZCBicmlkZ2luZ0ZlZUNvbnZlcnNpb25TY2FsaW5nRmFjdG9yID0gQm94TWFwPEFzc2V0LCB1aW50NjQ+KHsga2V5UHJlZml4OiAnZicgfSk7CiAgICBwdXNoYnl0ZXMgImYiCiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzY3CiAgICAvLyBjb25zdCBmZWU6IHVpbnQ2NCA9IHRoaXMuYnJpZGdpbmdGZWVDb252ZXJzaW9uU2NhbGluZ0ZhY3Rvcihhc3NldCkudmFsdWUgKiBmZWVUb2tlbkFtb3VudCAvIGFiaUNhbGwoewogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIEJveCBtdXN0IGhhdmUgdmFsdWUKICAgIGJ0b2kKICAgIGZyYW1lX2RpZyAtMgogICAgKgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozNjctMzcxCiAgICAvLyBjb25zdCBmZWU6IHVpbnQ2NCA9IHRoaXMuYnJpZGdpbmdGZWVDb252ZXJzaW9uU2NhbGluZ0ZhY3Rvcihhc3NldCkudmFsdWUgKiBmZWVUb2tlbkFtb3VudCAvIGFiaUNhbGwoewogICAgLy8gICBtZXRob2Q6IEdhc09yYWNsZS5wcm90b3R5cGUuZ2V0UHJpY2UsCiAgICAvLyAgIGFwcElkOiB0aGlzLmdhc09yYWNsZS52YWx1ZS5pZCwKICAgIC8vICAgYXJnczogW3RoaXMuY2hhaW5JZC52YWx1ZV0sCiAgICAvLyB9KS5yZXR1cm5WYWx1ZTsKICAgIGl0eG5fYmVnaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzY5CiAgICAvLyBhcHBJZDogdGhpcy5nYXNPcmFjbGUudmFsdWUuaWQsCiAgICBpbnRjXzEgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo5CiAgICAvLyBnYXNPcmFjbGUgPSBHbG9iYWxTdGF0ZTxBcHBsaWNhdGlvbj4oKTsKICAgIGJ5dGVjXzMgLy8gImdhc09yYWNsZSIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzY5CiAgICAvLyBhcHBJZDogdGhpcy5nYXNPcmFjbGUudmFsdWUuaWQsCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIEdsb2JhbFN0YXRlIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozNzAKICAgIC8vIGFyZ3M6IFt0aGlzLmNoYWluSWQudmFsdWVdLAogICAgaW50Y18xIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6NTcKICAgIC8vIGNoYWluSWQgPSBHbG9iYWxTdGF0ZTxCeXRlPigpOwogICAgYnl0ZWMgNSAvLyAiY2hhaW5JZCIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzcwCiAgICAvLyBhcmdzOiBbdGhpcy5jaGFpbklkLnZhbHVlXSwKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjM2Ny0zNzEKICAgIC8vIGNvbnN0IGZlZTogdWludDY0ID0gdGhpcy5icmlkZ2luZ0ZlZUNvbnZlcnNpb25TY2FsaW5nRmFjdG9yKGFzc2V0KS52YWx1ZSAqIGZlZVRva2VuQW1vdW50IC8gYWJpQ2FsbCh7CiAgICAvLyAgIG1ldGhvZDogR2FzT3JhY2xlLnByb3RvdHlwZS5nZXRQcmljZSwKICAgIC8vICAgYXBwSWQ6IHRoaXMuZ2FzT3JhY2xlLnZhbHVlLmlkLAogICAgLy8gICBhcmdzOiBbdGhpcy5jaGFpbklkLnZhbHVlXSwKICAgIC8vIH0pLnJldHVyblZhbHVlOwogICAgcHVzaGJ5dGVzIDB4MWRiNzBjZGQgLy8gbWV0aG9kICJnZXRQcmljZShieXRlKXVpbnQ2NCIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18xIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBkdXAKICAgIGV4dHJhY3QgNCAwCiAgICBzd2FwCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIEJ5dGVzIGhhcyB2YWxpZCBwcmVmaXgKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIC8KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MTMyCiAgICAvLyBjb25zdCBmZWVGcm9tU3RhYmxlOiB1aW50NjQgPSB0aGlzLl9jb252ZXJ0QnJpZGdpbmdGZWVJblRva2Vuc1RvTmF0aXZlVG9rZW4oYXNzZXRUcmFuc2ZlclJlZi54ZmVyQXNzZXQsIGZlZVRva2VuQW1vdW50KTsKICAgIGIgX3N3YXBBbmRCcmlkZ2VfYWZ0ZXJfaW5saW5lZF9zbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjpCcmlkZ2UuX2NvbnZlcnRCcmlkZ2luZ0ZlZUluVG9rZW5zVG9OYXRpdmVUb2tlbkA1CgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo6QnJpZGdlLmhhc2hNZXNzYWdlKGFtb3VudDogdWludDY0LCByZWNpcGllbnQ6IGJ5dGVzLCBzb3VyY2VDaGFpbklkOiBieXRlcywgZGVzdGluYXRpb25DaGFpbklkOiBieXRlcywgcmVjZWl2ZVRva2VuOiBieXRlcywgbm9uY2U6IGJ5dGVzKSAtPiBieXRlczoKc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czo6QnJpZGdlLmhhc2hNZXNzYWdlOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozMDctMzE1CiAgICAvLyBAYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIC8vIGhhc2hNZXNzYWdlKAogICAgLy8gICBhbW91bnQ6IHVpbnQ2NCwKICAgIC8vICAgcmVjaXBpZW50OiBTdGF0aWNCeXRlczwzMj4sCiAgICAvLyAgIHNvdXJjZUNoYWluSWQ6IEJ5dGUsCiAgICAvLyAgIGRlc3RpbmF0aW9uQ2hhaW5JZDogQnl0ZSwKICAgIC8vICAgcmVjZWl2ZVRva2VuOiBTdGF0aWNCeXRlczwzMj4sCiAgICAvLyAgIG5vbmNlOiBTdGF0aWNCeXRlczwzMj4sCiAgICAvLyApOiBTdGF0aWNCeXRlczwzMj4gewogICAgcHJvdG8gNiAxCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMxNgogICAgLy8gY29uc3QgYW1vdW50MzIgPSBiemVybygyNCkuY29uY2F0KG9wLml0b2IoYW1vdW50KSk7CiAgICBwdXNoaW50IDI0IC8vIDI0CiAgICBiemVybwogICAgZnJhbWVfZGlnIC02CiAgICBpdG9iCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzE3CiAgICAvLyBjb25zdCBzb3VyY2VDaGFpbklkMzIgPSBiemVybygzMSkuY29uY2F0KHNvdXJjZUNoYWluSWQuYnl0ZXMpOwogICAgcHVzaGludCAzMSAvLyAzMQogICAgYnplcm8KICAgIGZyYW1lX2RpZyAtNAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMxOC0zMTkKICAgIC8vIGNvbnN0IHBhY2tlZCA9IGFtb3VudDMyCiAgICAvLyAgIC5jb25jYXQocmVjaXBpZW50LmJ5dGVzKQogICAgc3dhcAogICAgZnJhbWVfZGlnIC01CiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzE4LTMyMAogICAgLy8gY29uc3QgcGFja2VkID0gYW1vdW50MzIKICAgIC8vICAgLmNvbmNhdChyZWNpcGllbnQuYnl0ZXMpCiAgICAvLyAgIC5jb25jYXQoc291cmNlQ2hhaW5JZDMyKQogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMxOC0zMjEKICAgIC8vIGNvbnN0IHBhY2tlZCA9IGFtb3VudDMyCiAgICAvLyAgIC5jb25jYXQocmVjaXBpZW50LmJ5dGVzKQogICAgLy8gICAuY29uY2F0KHNvdXJjZUNoYWluSWQzMikKICAgIC8vICAgLmNvbmNhdChyZWNlaXZlVG9rZW4uYnl0ZXMpCiAgICBmcmFtZV9kaWcgLTIKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozMTgtMzIyCiAgICAvLyBjb25zdCBwYWNrZWQgPSBhbW91bnQzMgogICAgLy8gICAuY29uY2F0KHJlY2lwaWVudC5ieXRlcykKICAgIC8vICAgLmNvbmNhdChzb3VyY2VDaGFpbklkMzIpCiAgICAvLyAgIC5jb25jYXQocmVjZWl2ZVRva2VuLmJ5dGVzKQogICAgLy8gICAuY29uY2F0KG5vbmNlLmJ5dGVzKQogICAgZnJhbWVfZGlnIC0xCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzIzCiAgICAvLyAuY29uY2F0KEFMTEJSSURHRV9NRVNTRU5HRVIuYnl0ZXMpOwogICAgYnl0ZWMgMTAgLy8gMHgwMQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9icmlkZ2UuY29udHJhY3QuYWxnby50czozMTgtMzIzCiAgICAvLyBjb25zdCBwYWNrZWQgPSBhbW91bnQzMgogICAgLy8gICAuY29uY2F0KHJlY2lwaWVudC5ieXRlcykKICAgIC8vICAgLmNvbmNhdChzb3VyY2VDaGFpbklkMzIpCiAgICAvLyAgIC5jb25jYXQocmVjZWl2ZVRva2VuLmJ5dGVzKQogICAgLy8gICAuY29uY2F0KG5vbmNlLmJ5dGVzKQogICAgLy8gICAuY29uY2F0KEFMTEJSSURHRV9NRVNTRU5HRVIuYnl0ZXMpOwogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMyNQogICAgLy8gY29uc3QgaGFzaCA9IG9wLmtlY2NhazI1NihwYWNrZWQpOyAvLyAzMiBieXRlcwogICAga2VjY2FrMjU2CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMyOAogICAgLy8gY29uc3Qgd2l0aFNyYyA9IG9wLnNldEJ5dGUoaGFzaCwgMCwgb3AuYnRvaShzb3VyY2VDaGFpbklkLmJ5dGVzKSk7CiAgICBmcmFtZV9kaWcgLTQKICAgIGJ0b2kKICAgIGludGNfMSAvLyAwCiAgICBzd2FwCiAgICBzZXRieXRlCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2JyaWRnZS5jb250cmFjdC5hbGdvLnRzOjMyOQogICAgLy8gY29uc3Qgd2l0aERzdCA9IG9wLnNldEJ5dGUod2l0aFNyYywgMSwgb3AuYnRvaShkZXN0aW5hdGlvbkNoYWluSWQuYnl0ZXMpKTsKICAgIGZyYW1lX2RpZyAtMwogICAgYnRvaQogICAgaW50Y18wIC8vIDEKICAgIHN3YXAKICAgIHNldGJ5dGUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvYnJpZGdlLmNvbnRyYWN0LmFsZ28udHM6MzMxCiAgICAvLyByZXR1cm4gbmV3IFN0YXRpY0J5dGVzPDMyPih3aXRoRHN0KTsKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBzaXplCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjpSb3V0ZXIucmVjZWl2ZUFuZFN3YXBGcm9tVlVzZChhc3NldDogdWludDY0LCByZWNpcGllbnQ6IGJ5dGVzLCB2VXNkQW1vdW50OiB1aW50NjQsIHJlY2VpdmVBbW91bnRNaW46IHVpbnQ2NCkgLT4gdWludDY0OgpyZWNlaXZlQW5kU3dhcEZyb21WVXNkOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxNjMtMTY4CiAgICAvLyBwcm90ZWN0ZWQgcmVjZWl2ZUFuZFN3YXBGcm9tVlVzZCgKICAgIC8vICAgYXNzZXQ6IEFzc2V0LAogICAgLy8gICByZWNpcGllbnQ6IEFkZHJlc3MsCiAgICAvLyAgIHZVc2RBbW91bnQ6IHVpbnQ2NCwKICAgIC8vICAgcmVjZWl2ZUFtb3VudE1pbjogdWludDY0LAogICAgLy8gKTogdWludDY0IHsKICAgIHByb3RvIDQgMQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxNjkKICAgIC8vIGFzc2VydCh0aGlzLnBvb2xzKGFzc2V0KS5leGlzdHMsICdSb3V0ZXI6IG5vIHJlY2VpdmUgcG9vbCcpOwogICAgZnJhbWVfZGlnIC00CiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjM0CiAgICAvLyBwb29scyA9IEJveE1hcDxBc3NldCwgdWludDY0Pih7IGtleVByZWZpeDogJ3AnIH0pOwogICAgYnl0ZWMgOCAvLyAicCIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxNjkKICAgIC8vIGFzc2VydCh0aGlzLnBvb2xzKGFzc2V0KS5leGlzdHMsICdSb3V0ZXI6IG5vIHJlY2VpdmUgcG9vbCcpOwogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBSb3V0ZXI6IG5vIHJlY2VpdmUgcG9vbAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxNzAKICAgIC8vIGNvbnN0IHBvb2xJZCA9IHRoaXMucG9vbHMoYXNzZXQpLnZhbHVlOwogICAgYm94X2dldAogICAgcG9wCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE3MS0xNzUKICAgIC8vIHJldHVybiBhYmlDYWxsKHsKICAgIC8vICAgbWV0aG9kOiBQb29sLnByb3RvdHlwZS5zd2FwRnJvbVZVc2QsCiAgICAvLyAgIGFwcElkOiBwb29sSWQsCiAgICAvLyAgIGFyZ3M6IFtyZWNpcGllbnQsIHZVc2RBbW91bnQsIHJlY2VpdmVBbW91bnRNaW4sIHJlY2lwaWVudCA9PT0gdGhpcy5yZWJhbGFuY2VyLnZhbHVlXSwKICAgIC8vIH0pLnJldHVyblZhbHVlOwogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxNzQKICAgIC8vIGFyZ3M6IFtyZWNpcGllbnQsIHZVc2RBbW91bnQsIHJlY2VpdmVBbW91bnRNaW4sIHJlY2lwaWVudCA9PT0gdGhpcy5yZWJhbGFuY2VyLnZhbHVlXSwKICAgIGZyYW1lX2RpZyAtMgogICAgaXRvYgogICAgZnJhbWVfZGlnIC0xCiAgICBpdG9iCiAgICBpbnRjXzEgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo1MgogICAgLy8gcHJpdmF0ZSByZWJhbGFuY2VyID0gR2xvYmFsU3RhdGU8QWRkcmVzcz4oeyBpbml0aWFsVmFsdWU6IG5ldyBBZGRyZXNzKGJ6ZXJvKDApKSB9KTsvLyBjYW4gcmVzdHJpY3QgZGVwb3NpdCBvciB3aXRoZHJhdyBvcGVyYXRpb25zCiAgICBieXRlYyA0IC8vICJyZWJhbGFuY2VyIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxNzQKICAgIC8vIGFyZ3M6IFtyZWNpcGllbnQsIHZVc2RBbW91bnQsIHJlY2VpdmVBbW91bnRNaW4sIHJlY2lwaWVudCA9PT0gdGhpcy5yZWJhbGFuY2VyLnZhbHVlXSwKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTMKICAgID09CiAgICBieXRlYyAxMSAvLyAweDAwCiAgICBpbnRjXzEgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTcxLTE3NQogICAgLy8gcmV0dXJuIGFiaUNhbGwoewogICAgLy8gICBtZXRob2Q6IFBvb2wucHJvdG90eXBlLnN3YXBGcm9tVlVzZCwKICAgIC8vICAgYXBwSWQ6IHBvb2xJZCwKICAgIC8vICAgYXJnczogW3JlY2lwaWVudCwgdlVzZEFtb3VudCwgcmVjZWl2ZUFtb3VudE1pbiwgcmVjaXBpZW50ID09PSB0aGlzLnJlYmFsYW5jZXIudmFsdWVdLAogICAgLy8gfSkucmV0dXJuVmFsdWU7CiAgICBwdXNoYnl0ZXMgMHgwZDFiNGMwNiAvLyBtZXRob2QgInN3YXBGcm9tVlVzZChhZGRyZXNzLHVpbnQ2NCx1aW50NjQsYm9vbCl1aW50NjQiCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZnJhbWVfZGlnIC0zCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgdW5jb3ZlciAyCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgc3dhcAogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uSUQKICAgIHB1c2hpbnQgNiAvLyBhcHBsCiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIGl0eG5fc3VibWl0CiAgICBpdHhuIExhc3RMb2cKICAgIGR1cAogICAgZXh0cmFjdCA0IDAKICAgIHN3YXAKICAgIGV4dHJhY3QgMCA0CiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgID09CiAgICBhc3NlcnQgLy8gQnl0ZXMgaGFzIHZhbGlkIHByZWZpeAogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czo6Um91dGVyLnNlbmRBbmRTd2FwVG9WVXNkKGFzc2V0OiB1aW50NjQsIHVzZXI6IGJ5dGVzLCBhbW91bnQ6IHVpbnQ2NCkgLT4gdWludDY0OgpzZW5kQW5kU3dhcFRvVlVzZDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTc5CiAgICAvLyBwcm90ZWN0ZWQgc2VuZEFuZFN3YXBUb1ZVc2QoYXNzZXQ6IEFzc2V0LCB1c2VyOiBBZGRyZXNzLCBhbW91bnQ6IHVpbnQ2NCk6IHVpbnQ2NCB7CiAgICBwcm90byAzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTgwCiAgICAvLyBhc3NlcnQodGhpcy5wb29scyhhc3NldCkuZXhpc3RzLCAnUm91dGVyOiBubyBwb29sJyk7CiAgICBmcmFtZV9kaWcgLTMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MzQKICAgIC8vIHBvb2xzID0gQm94TWFwPEFzc2V0LCB1aW50NjQ+KHsga2V5UHJlZml4OiAncCcgfSk7CiAgICBieXRlYyA4IC8vICJwIgogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE4MAogICAgLy8gYXNzZXJ0KHRoaXMucG9vbHMoYXNzZXQpLmV4aXN0cywgJ1JvdXRlcjogbm8gcG9vbCcpOwogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBSb3V0ZXI6IG5vIHBvb2wKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTgxCiAgICAvLyBjb25zdCBwb29sSWQgPSB0aGlzLnBvb2xzKGFzc2V0KS52YWx1ZTsKICAgIGJveF9nZXQKICAgIHBvcAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxODMtMTg4CiAgICAvLyBpdHhuLmFzc2V0VHJhbnNmZXIoewogICAgLy8gICB4ZmVyQXNzZXQ6IGFzc2V0LAogICAgLy8gICBhc3NldEFtb3VudDogYW1vdW50LAogICAgLy8gICBhc3NldFJlY2VpdmVyOiBBcHBsaWNhdGlvbihwb29sSWQpLmFkZHJlc3MsCiAgICAvLyB9KQogICAgLy8gICAuc3VibWl0KCk7CiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE4NgogICAgLy8gYXNzZXRSZWNlaXZlcjogQXBwbGljYXRpb24ocG9vbElkKS5hZGRyZXNzLAogICAgZHVwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICBpdHhuX2ZpZWxkIEFzc2V0UmVjZWl2ZXIKICAgIGZyYW1lX2RpZyAtMQogICAgaXR4bl9maWVsZCBBc3NldEFtb3VudAogICAgZnJhbWVfZGlnIC0zCiAgICBpdHhuX2ZpZWxkIFhmZXJBc3NldAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxODMtMTg3CiAgICAvLyBpdHhuLmFzc2V0VHJhbnNmZXIoewogICAgLy8gICB4ZmVyQXNzZXQ6IGFzc2V0LAogICAgLy8gICBhc3NldEFtb3VudDogYW1vdW50LAogICAgLy8gICBhc3NldFJlY2VpdmVyOiBBcHBsaWNhdGlvbihwb29sSWQpLmFkZHJlc3MsCiAgICAvLyB9KQogICAgcHVzaGludCA0IC8vIDQKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMSAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxODMtMTg4CiAgICAvLyBpdHhuLmFzc2V0VHJhbnNmZXIoewogICAgLy8gICB4ZmVyQXNzZXQ6IGFzc2V0LAogICAgLy8gICBhc3NldEFtb3VudDogYW1vdW50LAogICAgLy8gICBhc3NldFJlY2VpdmVyOiBBcHBsaWNhdGlvbihwb29sSWQpLmFkZHJlc3MsCiAgICAvLyB9KQogICAgLy8gICAuc3VibWl0KCk7CiAgICBpdHhuX3N1Ym1pdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxOTAtMTk0CiAgICAvLyByZXR1cm4gYWJpQ2FsbCh7CiAgICAvLyAgIG1ldGhvZDogUG9vbC5wcm90b3R5cGUuc3dhcFRvVlVzZCwKICAgIC8vICAgYXBwSWQ6IHBvb2xJZCwKICAgIC8vICAgYXJnczogW3VzZXIsIGFtb3VudCwgdXNlciA9PT0gdGhpcy5yZWJhbGFuY2VyLnZhbHVlXSwKICAgIC8vIH0pLnJldHVyblZhbHVlOwogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9yb3V0ZXIuYWxnby50czoxOTMKICAgIC8vIGFyZ3M6IFt1c2VyLCBhbW91bnQsIHVzZXIgPT09IHRoaXMucmViYWxhbmNlci52YWx1ZV0sCiAgICBmcmFtZV9kaWcgLTEKICAgIGl0b2IKICAgIGludGNfMSAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjUyCiAgICAvLyBwcml2YXRlIHJlYmFsYW5jZXIgPSBHbG9iYWxTdGF0ZTxBZGRyZXNzPih7IGluaXRpYWxWYWx1ZTogbmV3IEFkZHJlc3MoYnplcm8oMCkpIH0pOy8vIGNhbiByZXN0cmljdCBkZXBvc2l0IG9yIHdpdGhkcmF3IG9wZXJhdGlvbnMKICAgIGJ5dGVjIDQgLy8gInJlYmFsYW5jZXIiCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3JvdXRlci5hbGdvLnRzOjE5MwogICAgLy8gYXJnczogW3VzZXIsIGFtb3VudCwgdXNlciA9PT0gdGhpcy5yZWJhbGFuY2VyLnZhbHVlXSwKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTIKICAgID09CiAgICBieXRlYyAxMSAvLyAweDAwCiAgICBpbnRjXzEgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcm91dGVyLmFsZ28udHM6MTkwLTE5NAogICAgLy8gcmV0dXJuIGFiaUNhbGwoewogICAgLy8gICBtZXRob2Q6IFBvb2wucHJvdG90eXBlLnN3YXBUb1ZVc2QsCiAgICAvLyAgIGFwcElkOiBwb29sSWQsCiAgICAvLyAgIGFyZ3M6IFt1c2VyLCBhbW91bnQsIHVzZXIgPT09IHRoaXMucmViYWxhbmNlci52YWx1ZV0sCiAgICAvLyB9KS5yZXR1cm5WYWx1ZTsKICAgIHB1c2hieXRlcyAweGQ5NzhhZDE0IC8vIG1ldGhvZCAic3dhcFRvVlVzZChhZGRyZXNzLHVpbnQ2NCxib29sKXVpbnQ2NCIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBzd2FwCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMSAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZHVwCiAgICBleHRyYWN0IDQgMAogICAgc3dhcAogICAgZXh0cmFjdCAwIDQKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgPT0KICAgIGFzc2VydCAvLyBCeXRlcyBoYXMgdmFsaWQgcHJlZml4CiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICBidG9pCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjpHYXNVc2FnZS5nZXRHYXNVc2FnZShjaGFpbklkOiBieXRlcykgLT4gdWludDY0OgpzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjpHYXNVc2FnZS5nZXRHYXNVc2FnZToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MTctMTgKICAgIC8vIEBhYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgLy8gZ2V0R2FzVXNhZ2UoY2hhaW5JZDogQnl0ZSk6IHVpbnQ2NCB7CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MTAKICAgIC8vIGdhc1VzYWdlID0gQm94TWFwPEJ5dGUsIHVpbnQ2ND4oeyBrZXlQcmVmaXg6ICd1JyB9KTsKICAgIGJ5dGVjIDEyIC8vICJ1IgogICAgZnJhbWVfZGlnIC0xCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MTkKICAgIC8vIHJldHVybiB0aGlzLmdhc1VzYWdlKGNoYWluSWQpLnZhbHVlOwogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIEJveCBtdXN0IGhhdmUgdmFsdWUKICAgIGJ0b2kKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6Okdhc1VzYWdlLmdldFRyYW5zYWN0aW9uUmVsYXllckNvc3QoY2hhaW5JZDogYnl0ZXMpIC0+IHVpbnQ2NDoKc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo6R2FzVXNhZ2UuZ2V0VHJhbnNhY3Rpb25SZWxheWVyQ29zdDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MzQtMzUKICAgIC8vIEBhYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgLy8gZ2V0VHJhbnNhY3Rpb25SZWxheWVyQ29zdChjaGFpbklkOiBCeXRlKTogdWludDY0IHsKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czoxMAogICAgLy8gZ2FzVXNhZ2UgPSBCb3hNYXA8Qnl0ZSwgdWludDY0Pih7IGtleVByZWZpeDogJ3UnIH0pOwogICAgYnl0ZWMgMTIgLy8gInUiCiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czozNgogICAgLy8gY29uc3QgZ2FzQW1vdW50ID0gdGhpcy5nYXNVc2FnZShjaGFpbklkKS52YWx1ZTsKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBCb3ggbXVzdCBoYXZlIHZhbHVlCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjM3LTQxCiAgICAvLyByZXR1cm4gYWJpQ2FsbCh7CiAgICAvLyAgIG1ldGhvZDogR2FzT3JhY2xlLnByb3RvdHlwZS5nZXRUcmFuc2FjdGlvbkdhc0Nvc3RJbk5hdGl2ZVRva2VuLAogICAgLy8gICBhcHBJZDogdGhpcy5nYXNPcmFjbGUudmFsdWUuaWQsCiAgICAvLyAgIGFyZ3M6IFtjaGFpbklkLCBnYXNBbW91bnRdLAogICAgLy8gfSkucmV0dXJuVmFsdWU7CiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjM5CiAgICAvLyBhcHBJZDogdGhpcy5nYXNPcmFjbGUudmFsdWUuaWQsCiAgICBpbnRjXzEgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9nYXMtdXNhZ2UuYWxnby50czo5CiAgICAvLyBnYXNPcmFjbGUgPSBHbG9iYWxTdGF0ZTxBcHBsaWNhdGlvbj4oKTsKICAgIGJ5dGVjXzMgLy8gImdhc09yYWNsZSIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MzkKICAgIC8vIGFwcElkOiB0aGlzLmdhc09yYWNsZS52YWx1ZS5pZCwKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL2dhcy11c2FnZS5hbGdvLnRzOjQwCiAgICAvLyBhcmdzOiBbY2hhaW5JZCwgZ2FzQW1vdW50XSwKICAgIHN3YXAKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvZ2FzLXVzYWdlLmFsZ28udHM6MzctNDEKICAgIC8vIHJldHVybiBhYmlDYWxsKHsKICAgIC8vICAgbWV0aG9kOiBHYXNPcmFjbGUucHJvdG90eXBlLmdldFRyYW5zYWN0aW9uR2FzQ29zdEluTmF0aXZlVG9rZW4sCiAgICAvLyAgIGFwcElkOiB0aGlzLmdhc09yYWNsZS52YWx1ZS5pZCwKICAgIC8vICAgYXJnczogW2NoYWluSWQsIGdhc0Ftb3VudF0sCiAgICAvLyB9KS5yZXR1cm5WYWx1ZTsKICAgIHB1c2hieXRlcyAweGMyYWZjY2QxIC8vIG1ldGhvZCAiZ2V0VHJhbnNhY3Rpb25HYXNDb3N0SW5OYXRpdmVUb2tlbihieXRlLHVpbnQ2NCl1aW50NjQiCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZnJhbWVfZGlnIC0xCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMSAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZHVwCiAgICBleHRyYWN0IDQgMAogICAgc3dhcAogICAgZXh0cmFjdCAwIDQKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgPT0KICAgIGFzc2VydCAvLyBCeXRlcyBoYXMgdmFsaWQgcHJlZml4CiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICBidG9pCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL293bmFibGUuYWxnby50czo6T3duYWJsZS5vbmx5T3duZXIoKSAtPiB2b2lkOgpvbmx5T3duZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL293bmFibGUuYWxnby50czoxMwogICAgLy8gYXNzZXJ0KG9wLlR4bi5zZW5kZXIuYnl0ZXMgPT09IHRoaXMub3duZXIudmFsdWUuYnl0ZXMsICdPbmx5IG93bmVyJyk7CiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzEgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9vd25hYmxlLmFsZ28udHM6NgogICAgLy8gcHJvdGVjdGVkIG93bmVyID0gR2xvYmFsU3RhdGU8QWRkcmVzcz4oKTsKICAgIGJ5dGVjXzIgLy8gIm93bmVyIgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9vd25hYmxlLmFsZ28udHM6MTMKICAgIC8vIGFzc2VydChvcC5UeG4uc2VuZGVyLmJ5dGVzID09PSB0aGlzLm93bmVyLnZhbHVlLmJ5dGVzLCAnT25seSBvd25lcicpOwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBHbG9iYWxTdGF0ZSBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gT25seSBvd25lcgogICAgcmV0c3ViCg==",
        clear: "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYmFzZS1jb250cmFjdC5kLnRzOjpCYXNlQ29udHJhY3QuY2xlYXJTdGF0ZVByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg==",
    },
    byteCode: {
        approval: "CyAFAQAIINR6JhEEFR98dQdjYW5Td2FwBW93bmVyCWdhc09yYWNsZQpyZWJhbGFuY2VyB2NoYWluSWQJbWVzc2VuZ2VyAXQBcA1zdG9wQXV0aG9yaXR5AQEBAAF1BENBeqME90dbggwVH3x1AAAAAAAAPVQDBoEBMRhAAAkjrycETGcpImcxGRREMRhBAM2CDARl9wVzBD44AnwEpGAK7QTeTK1KBE66ByEExhftcwRXUxVgBGOAgngEBlB8agT1+W6zBEsGLKAEw83ZKicNggkEB9+EKQSAxccPBEE00GgE7xX4VQRrHuIjBBhwpJIENVcyTQQEsWHxBNKzV+snDoIEBAylrnoEJ0cPBwTL/G0CBOF7r7Q2GgCOGwDZARQBZAGpArACzQLqAwYDJANdA+QEHgRCAAYAAQRXBMsFEwUoBTYFPgVPBWAFcgWQBaEFswAnD7AiQycPsCJDgARmTKQENhoAjgEAiACKAgCL/oEKCIsAMgwNQQAqsYEGshCBBbIZJxCyHicQsh+L/40CAAsABLNC/9syALIBQv/1I7IBQv/viYoBAYv/OBQyChJEi/84IDIDEkSL/zgVMgMSRIv/OBKJigEBi/84BzIKE0EAAiOJi/84IDIDE0EAAiOJi/84CTIDE0EAAiOJi/84CIk2GgFJFSUSRDYaAkkVIhJENhoDSRUkEkQXNhoESRUkEkQXKksEZytMZycJTwNnJwVPAmcnBkxnIkM2GgFJFSQSRBeIB3exMgqyFCOyErIRgQSyECOyAbOAGEJyaWRnZTogb3B0LWluIGNvbXBsZXRlZLAiQzEWgQIJSTgQIhJEMRYiCUk4EIEEEkQ2GgFJFSUSRDYaAkkVIhJENhoDSRUlEkQ2GgRJFSUSRDYaBUkVJBJEF08GiP8cTgZOBiNPB4gEYSJDMRYiCUk4EIEEEkQ2GgFJFSUSRDYaAkkVIhJENhoDSRUlEkQ2GgRJFSUSRDYaBUkVJBJEFzYaBkkVJBJEFyNOB4gEHCJDMRYiCUk4ECISRDYaAUkVJBJEFzYaAklOA0kVJRJENhoDSRUiEkQ2GgRJFSUSRDYaBUlOBkkVJRJENhoGSRUkEkQXIyllRESAAWJLBFBJvUUBRE8HiP50SSEED0QjJwVlREsISwhPCE8DSwhPCIgFA08CvkRLAUxQAkxRAAJMUQIgUElOBkkVJRJEgAFtSwFQSb1FARREgAC/sSMnBmVEgAQz4UeqshqyGLIagQayECOyAbO0PklXBABMVwAEKBJESRUiEkQjU0RPAoEYW08DTwRPBIgEz0whBAlJQQAPsUsEsgdJsggishAjsgGzSwEWSwVQSwRQJwpQSwNQgARFg2rWTFCwIkM2GgFJFSISRDYaAkkVJRJEiAWZgAFiTwJQTL8iQzYaAUkVIhJENhoCSRUlEkSIBXxQJwdMUIAAvyJDNhoBSRUiEkQ2GgJJFSUSRIgFX1AnB0xQvEgiQzYaAUkVJBJEF4gFSrEjKmVEsgeyCCKyECOyAbMiQzYaAUkVJBJEF0mIBSsyCklOAkxwAExJTwJEQQAasSMqZUSyFEmyEksCshFLAbIAgQSyECOyAbMiQzYaAUkVIhJENhoCSRUkEkQXSwGIBJ+xIycGZUQnDrIaSwOyGrIYgQayECOyAbO0PklXBABMVwAEKBJESRUkEkQXsSMrZUROAggWgAR799UMshpPA7IashqyGIEGshAjsgGztD5JVwQATFcABCgSREkVJBJEF0wWgAFlTFC+RBcKFihMULAiQzYaAUkVJBJEFzYaAkkVJRJENhoDSRUiEkQ2GgRJFSISRDYaBUkVJRJENhoGSRUlEkSIAwQoTFCwIkM2GgFJFSISRDYaAkkVJRJEUCcHTFC9RQEnCyNPAlQoTFCwIkM2GgFJFSISRIgD0SEECBYoTFCwIkMxFiIJSTgQgQQSRDYaAUkVJBJEFzYaAkkVJRJENhoDSRUkEkQXNhoESRUkEkQXI4j7kCMpZUREMQBLBIj7v08FOBFJSwNLA4gDB0sGSwZPAk8GiAKiTwNPBFBPAhZQTwMWUE8CFlBMFlCABBVARLNMULAiQzYaAUkVJBJEFzYaAkkVJBJEF4gDfEkWJwhLAVBPAxa/THEBRIEJTAlJgQYIgQpMlIABZksDUEwWv4EKTJSAAWVPAlBMFr8iQzYaAUkVJBJEF4gDPRYnCExQvEgiQzEAIycJZUQSRCkjZyJDiAMjKSJnIkM2GgFJFSUSRIgDEycJTGciQzYaAUkVJRJEiAMCJwRMZyJDNhoBSRUiEkSIAqcWKExQsCJDNhoBSRUiEkQ2GgJJFSQSRBeIAtYnDE8CUEwWvyJDNhoBSRUkEkQXiALAK0xnIkM2GgFJFSISRIgCchYoTFCwIkM2GgFJFSUSRIgCnipMZyJDiggAi/8jiPpNIyllRESL+Yj6fkmL/g1EJa+L+hIURIv5OBGL/kAA7iOL+EsBCIv4Fk8CFlCL/hZQgAQ2uvrdTFCwiwCL/gmLATEATwKIAZUjJwVlRIv7SwETRIv7i/xQJwdMUL1FAURLAYv6TwKL+4v8i/2IAOKL+4gB3yEECIABc0sCUEm9RQEURIAAv0sBVwEBsSMnBmVEJw2yGkyyGkmyGIEGshAjsgGztD5JVwQATFcABCgSREkVJBJEF0sBcghEsbIHSbIIIrIQI7IBtoAE0C9X9bIaTwOyGkyyGIEGshAjsgGzSwEWSwEWUIAES1VBm0xQsAhPAg5EFov6UIv7UIv8UIv9UCcKUIAEIp+67ExQsImLARaAAWZMUL5EF4v+C7EjK2VEIycFZUSABB23DN2yGrIashiBBrIQI7IBs7Q+SVcEAExXAAQoEkRJFSQSRBcKQv7QigYBgRivi/oWUIEfr4v8UEyL+1BMUIv+UIv/UCcKUAKL/BcjTFaL/RciTFZJFSUSRImKBAGL/BYnCExQSb1FAUS+SBexi/4Wi/8WIycEZUSL/RInCyNPAlSABA0bTAayGov9shpPArIaTLIashqyGIEGshAjsgGztD5JVwQATFcABCgSREkVJBJEF4mKAwGL/RYnCExQSb1FAUS+SBexSXIIRLIUi/+yEov9shGBBLIQI7IBs7GL/xYjJwRlRIv+EicLI08CVIAE2XitFLIai/6yGkyyGrIashiBBrIQI7IBs7Q+SVcEAExXAAQoEkRJFSQSRBeJigEBJwyL/1C+RBeJigEBJwyL/1C+RBexIytlREwWgATCr8zRshqL/7IashqyGIEGshAjsgGztD5JVwQATFcABCgSREkVJBJEF4kxACMqZUQSRIk=",
        clear: "C4EBQw==",
    },
    events: [
        {
            name: "BridgingFeeFromTokens",
            args: [
                { type: "uint64", name: "feeFromNative" },
                { type: "uint64", name: "feeFromStable" },
                { type: "uint64", name: "feeStableTokenAmount" },
            ],
        },
        {
            name: "ReceiveFee",
            args: [
                { type: "uint64", name: "bridgeTransactionCost" },
                { type: "uint64", name: "messageTransactionCost" },
            ],
        },
        {
            name: "TokensSent",
            args: [
                { type: "uint64", name: "amount" },
                { type: "byte[32]", name: "recipient" },
                { type: "byte", name: "destinationChainId" },
                { type: "byte[32]", name: "receiveToken" },
                { type: "byte[32]", name: "nonce" },
                { type: "byte", name: "messenger" },
            ],
        },
        {
            name: "TokensReceived",
            args: [
                { type: "uint64", name: "receiveAmount" },
                { type: "address", name: "recipient" },
                { type: "byte[32]", name: "nonce" },
                { type: "byte", name: "messenger" },
                { type: "byte[32]", name: "message" },
            ],
        },
        {
            name: "Swapped",
            args: [
                { type: "address", name: "sender" },
                { type: "address", name: "recipient" },
                { type: "uint64", name: "tokenId" },
                { type: "uint64", name: "receiveTokenId" },
                { type: "uint64", name: "amount" },
                { type: "uint64", name: "receivedAmount" },
            ],
        },
    ],
    templateVariables: {},
};
class BinaryStateValue {
    value;
    constructor(value) {
        this.value = value;
    }
    asByteArray() {
        return this.value;
    }
    asString() {
        return this.value !== undefined ? Buffer.from(this.value).toString("utf-8") : undefined;
    }
}
/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the Bridge smart contract
 */
class BridgeParamsFactory {
    /**
     * Gets available create ABI call param factories
     */
    static get create() {
        return {
            _resolveByMethod(params) {
                switch (params.method) {
                    case "createApplication":
                    case "createApplication(address,byte,uint64,uint64)void":
                        return BridgeParamsFactory.create.createApplication(params);
                }
                throw new Error(`Unknown ' + verb + ' method`);
            },
            /**
             * Constructs create ABI call params for the Bridge smart contract using the createApplication(address,byte,uint64,uint64)void ABI method
             *
             * @param params Parameters for the call
             * @returns An `AppClientMethodCallParams` object for the call
             */
            createApplication(params) {
                return {
                    ...params,
                    method: "createApplication(address,byte,uint64,uint64)void",
                    args: Array.isArray(params.args)
                        ? params.args
                        : [params.args.owner, params.args.chainId, params.args.messenger, params.args.gasOracle],
                };
            },
        };
    }
    /**
     * Constructs a no op call for the optInAsset(uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static optInAsset(params) {
        return {
            ...params,
            method: "optInAsset(uint64)void",
            args: Array.isArray(params.args) ? params.args : [params.args.asset],
        };
    }
    /**
     * Constructs a no op call for the swapAndBridge(pay,axfer,byte[32],byte,byte[32],byte[32],uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static swapAndBridge(params) {
        return {
            ...params,
            method: "swapAndBridge(pay,axfer,byte[32],byte,byte[32],byte[32],uint64)void",
            args: Array.isArray(params.args)
                ? params.args
                : [
                    params.args.paymentRef,
                    params.args.assetTransferRef,
                    params.args.recipient,
                    params.args.destinationChainId,
                    params.args.receiveToken,
                    params.args.nonce,
                    params.args.budget,
                ],
        };
    }
    /**
     * Constructs a no op call for the swapAndBridgeWithStable(axfer,byte[32],byte,byte[32],byte[32],uint64,uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static swapAndBridgeWithStable(params) {
        return {
            ...params,
            method: "swapAndBridgeWithStable(axfer,byte[32],byte,byte[32],byte[32],uint64,uint64)void",
            args: Array.isArray(params.args)
                ? params.args
                : [
                    params.args.assetTransferRef,
                    params.args.recipient,
                    params.args.destinationChainId,
                    params.args.receiveToken,
                    params.args.nonce,
                    params.args.feeTokenAmount,
                    params.args.budget,
                ],
        };
    }
    /**
     * Constructs a no op call for the receiveTokens(pay,uint64,byte[32],byte,byte[32],byte[32],uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static receiveTokens(params) {
        return {
            ...params,
            method: "receiveTokens(pay,uint64,byte[32],byte,byte[32],byte[32],uint64)void",
            args: Array.isArray(params.args)
                ? params.args
                : [
                    params.args.paymentRef,
                    params.args.amount,
                    params.args.recipient,
                    params.args.sourceChainId,
                    params.args.receiveToken,
                    params.args.nonce,
                    params.args.receiveAmountMin,
                ],
        };
    }
    /**
     * Constructs a no op call for the registerBridge(byte,byte[32])void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static registerBridge(params) {
        return {
            ...params,
            method: "registerBridge(byte,byte[32])void",
            args: Array.isArray(params.args) ? params.args : [params.args.chainId, params.args.bridgeAddress],
        };
    }
    /**
     * Constructs a no op call for the addBridgeToken(byte,byte[32])void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static addBridgeToken(params) {
        return {
            ...params,
            method: "addBridgeToken(byte,byte[32])void",
            args: Array.isArray(params.args) ? params.args : [params.args.chainId, params.args.tokenAddress],
        };
    }
    /**
     * Constructs a no op call for the removeBridgeToken(byte,byte[32])void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static removeBridgeToken(params) {
        return {
            ...params,
            method: "removeBridgeToken(byte,byte[32])void",
            args: Array.isArray(params.args) ? params.args : [params.args.chainId, params.args.tokenAddress],
        };
    }
    /**
     * Constructs a no op call for the withdrawGasTokens(uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static withdrawGasTokens(params) {
        return {
            ...params,
            method: "withdrawGasTokens(uint64)void",
            args: Array.isArray(params.args) ? params.args : [params.args.amount],
        };
    }
    /**
     * Constructs a no op call for the withdrawBridgingFeeInTokens(uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static withdrawBridgingFeeInTokens(params) {
        return {
            ...params,
            method: "withdrawBridgingFeeInTokens(uint64)void",
            args: Array.isArray(params.args) ? params.args : [params.args.asset],
        };
    }
    /**
     * Constructs a no op call for the getBridgingCostInTokens(byte,uint64)uint64 ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getBridgingCostInTokens(params) {
        return {
            ...params,
            method: "getBridgingCostInTokens(byte,uint64)uint64",
            args: Array.isArray(params.args) ? params.args : [params.args.destinationChainId, params.args.asset],
        };
    }
    /**
     * Constructs a no op call for the hashMessage(uint64,byte[32],byte,byte,byte[32],byte[32])byte[32] ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static hashMessage(params) {
        return {
            ...params,
            method: "hashMessage(uint64,byte[32],byte,byte,byte[32],byte[32])byte[32]",
            args: Array.isArray(params.args)
                ? params.args
                : [
                    params.args.amount,
                    params.args.recipient,
                    params.args.sourceChainId,
                    params.args.destinationChainId,
                    params.args.receiveToken,
                    params.args.nonce,
                ],
        };
    }
    /**
     * Constructs a no op call for the isOtherBridgeTokenSupported(byte,byte[32])bool ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static isOtherBridgeTokenSupported(params) {
        return {
            ...params,
            method: "isOtherBridgeTokenSupported(byte,byte[32])bool",
            args: Array.isArray(params.args) ? params.args : [params.args.chainId, params.args.token],
        };
    }
    /**
     * Constructs a no op call for the getTransactionCost(byte)uint64 ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getTransactionCost(params) {
        return {
            ...params,
            method: "getTransactionCost(byte)uint64",
            args: Array.isArray(params.args) ? params.args : [params.args.chainId],
        };
    }
    /**
     * Constructs a no op call for the getReceiveTokensCost()uint64 ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getReceiveTokensCost(params) {
        return {
            ...params,
            method: "getReceiveTokensCost()uint64",
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the getSendTransactionStorageCost()uint64 ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getSendTransactionStorageCost(params) {
        return {
            ...params,
            method: "getSendTransactionStorageCost()uint64",
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the swap(axfer,uint64,address,uint64,uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static swap(params) {
        return {
            ...params,
            method: "swap(axfer,uint64,address,uint64,uint64)void",
            args: Array.isArray(params.args)
                ? params.args
                : [
                    params.args.assetTransferRef,
                    params.args.receiveAsset,
                    params.args.recipient,
                    params.args.receiveAmountMin,
                    params.args.budget,
                ],
        };
    }
    /**
     * Constructs a no op call for the addPool(uint64,uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static addPool(params) {
        return {
            ...params,
            method: "addPool(uint64,uint64)void",
            args: Array.isArray(params.args) ? params.args : [params.args.poolId, params.args.asset],
        };
    }
    /**
     * Constructs a no op call for the removePool(uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static removePool(params) {
        return {
            ...params,
            method: "removePool(uint64)void",
            args: Array.isArray(params.args) ? params.args : [params.args.tokenId],
        };
    }
    /**
     * Constructs a no op call for the stopSwap()void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static stopSwap(params) {
        return {
            ...params,
            method: "stopSwap()void",
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the startSwap()void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static startSwap(params) {
        return {
            ...params,
            method: "startSwap()void",
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the setStopAuthority(address)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setStopAuthority(params) {
        return {
            ...params,
            method: "setStopAuthority(address)void",
            args: Array.isArray(params.args) ? params.args : [params.args.stopAuthority],
        };
    }
    /**
     * Constructs a no op call for the setRebalancer(address)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setRebalancer(params) {
        return {
            ...params,
            method: "setRebalancer(address)void",
            args: Array.isArray(params.args) ? params.args : [params.args.rebalancer],
        };
    }
    /**
     * Constructs a no op call for the getGasUsage(byte)uint64 ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getGasUsage(params) {
        return {
            ...params,
            method: "getGasUsage(byte)uint64",
            args: Array.isArray(params.args) ? params.args : [params.args.chainId],
        };
    }
    /**
     * Constructs a no op call for the setGasUsage(byte,uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setGasUsage(params) {
        return {
            ...params,
            method: "setGasUsage(byte,uint64)void",
            args: Array.isArray(params.args) ? params.args : [params.args.chainId, params.args.gasAmount],
        };
    }
    /**
     * Constructs a no op call for the setGasOracle(uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setGasOracle(params) {
        return {
            ...params,
            method: "setGasOracle(uint64)void",
            args: Array.isArray(params.args) ? params.args : [params.args.gasOracle],
        };
    }
    /**
     * Constructs a no op call for the getTransactionRelayerCost(byte)uint64 ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getTransactionRelayerCost(params) {
        return {
            ...params,
            method: "getTransactionRelayerCost(byte)uint64",
            args: Array.isArray(params.args) ? params.args : [params.args.chainId],
        };
    }
    /**
     * Constructs a no op call for the transferOwnership(address)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static transferOwnership(params) {
        return {
            ...params,
            method: "transferOwnership(address)void",
            args: Array.isArray(params.args) ? params.args : [params.args.newOwner],
        };
    }
}
exports.BridgeParamsFactory = BridgeParamsFactory;
/**
 * A factory to create and deploy one or more instance of the Bridge smart contract and to create one or more app clients to interact with those (or other) app instances
 */
class BridgeFactory {
    /**
     * The underlying `AppFactory` for when you want to have more flexibility
     */
    appFactory;
    /**
     * Creates a new instance of `BridgeFactory`
     *
     * @param params The parameters to initialise the app factory with
     */
    constructor(params) {
        this.appFactory = new app_factory_1.AppFactory({
            ...params,
            appSpec: exports.APP_SPEC,
        });
    }
    /** The name of the app (from the ARC-32 / ARC-56 app spec or override). */
    get appName() {
        return this.appFactory.appName;
    }
    /** The ARC-56 app spec being used */
    get appSpec() {
        return exports.APP_SPEC;
    }
    /** A reference to the underlying `AlgorandClient` this app factory is using. */
    get algorand() {
        return this.appFactory.algorand;
    }
    /**
     * Returns a new `AppClient` client for an app instance of the given ID.
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    getAppClientById(params) {
        return new BridgeClient(this.appFactory.getAppClientById(params));
    }
    /**
     * Returns a new `AppClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    async getAppClientByCreatorAndName(params) {
        return new BridgeClient(await this.appFactory.getAppClientByCreatorAndName(params));
    }
    /**
     * Idempotently deploys the Bridge smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    async deploy(params = {}) {
        const result = await this.appFactory.deploy({
            ...params,
            createParams: params.createParams?.method
                ? BridgeParamsFactory.create._resolveByMethod(params.createParams)
                : params.createParams
                    ? params.createParams
                    : undefined,
        });
        return { result: result.result, appClient: new BridgeClient(result.appClient) };
    }
    /**
     * Get parameters to create transactions (create and deploy related calls) for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    params = {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the Bridge smart contract using the createApplication(address,byte,uint64,uint64)void ABI method.
             *
             * @param params The params for the smart contract call
             * @returns The create params
             */
            createApplication: (params) => {
                return this.appFactory.params.create(BridgeParamsFactory.create.createApplication(params));
            },
        },
    };
    /**
     * Create transactions for the current app
     */
    createTransaction = {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the Bridge smart contract using the createApplication(address,byte,uint64,uint64)void ABI method.
             *
             * @param params The params for the smart contract call
             * @returns The create transaction
             */
            createApplication: (params) => {
                return this.appFactory.createTransaction.create(BridgeParamsFactory.create.createApplication(params));
            },
        },
    };
    /**
     * Send calls to the current app
     */
    send = {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the Bridge smart contract using an ABI method call using the createApplication(address,byte,uint64,uint64)void ABI method.
             *
             * @param params The params for the smart contract call
             * @returns The create result
             */
            createApplication: async (params) => {
                const result = await this.appFactory.send.create(BridgeParamsFactory.create.createApplication(params));
                return {
                    result: {
                        ...result.result,
                        return: result.result.return,
                    },
                    appClient: new BridgeClient(result.appClient),
                };
            },
        },
    };
}
exports.BridgeFactory = BridgeFactory;
/**
 * A client to make calls to the Bridge smart contract
 */
class BridgeClient {
    /**
     * The underlying `AppClient` for when you want to have more flexibility
     */
    appClient;
    constructor(appClientOrParams) {
        this.appClient =
            appClientOrParams instanceof app_client_1.AppClient
                ? appClientOrParams
                : new app_client_1.AppClient({
                    ...appClientOrParams,
                    appSpec: exports.APP_SPEC,
                });
    }
    /**
     * Checks for decode errors on the given return value and maps the return value to the return type for the given method
     * @returns The typed return value or undefined if there was no value
     */
    decodeReturnValue(method, returnValue) {
        return returnValue !== undefined
            ? (0, app_arc56_1.getArc56ReturnValue)(returnValue, this.appClient.getABIMethod(method), exports.APP_SPEC.structs)
            : undefined;
    }
    /**
     * Returns a new `BridgeClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     * @param params The parameters to create the app client
     */
    static async fromCreatorAndName(params) {
        return new BridgeClient(await app_client_1.AppClient.fromCreatorAndName({ ...params, appSpec: exports.APP_SPEC }));
    }
    /**
     * Returns an `BridgeClient` instance for the current network based on
     * pre-determined network-specific app IDs specified in the ARC-56 app spec.
     *
     * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
     * @param params The parameters to create the app client
     */
    static async fromNetwork(params) {
        return new BridgeClient(await app_client_1.AppClient.fromNetwork({ ...params, appSpec: exports.APP_SPEC }));
    }
    /** The ID of the app instance this client is linked to. */
    get appId() {
        return this.appClient.appId;
    }
    /** The app address of the app instance this client is linked to. */
    get appAddress() {
        return this.appClient.appAddress;
    }
    /** The name of the app. */
    get appName() {
        return this.appClient.appName;
    }
    /** The ARC-56 app spec being used */
    get appSpec() {
        return this.appClient.appSpec;
    }
    /** A reference to the underlying `AlgorandClient` this app client is using. */
    get algorand() {
        return this.appClient.algorand;
    }
    /**
     * Get parameters to create transactions for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    params = {
        /**
         * Makes a clear_state call to an existing instance of the Bridge smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.params.bare.clearState(params);
        },
        /**
         * Makes a call to the Bridge smart contract using the `optInAsset(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        optInAsset: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.optInAsset(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `swapAndBridge(pay,axfer,byte[32],byte,byte[32],byte[32],uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        swapAndBridge: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.swapAndBridge(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `swapAndBridgeWithStable(axfer,byte[32],byte,byte[32],byte[32],uint64,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        swapAndBridgeWithStable: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.swapAndBridgeWithStable(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `receiveTokens(pay,uint64,byte[32],byte,byte[32],byte[32],uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        receiveTokens: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.receiveTokens(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `registerBridge(byte,byte[32])void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        registerBridge: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.registerBridge(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `addBridgeToken(byte,byte[32])void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        addBridgeToken: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.addBridgeToken(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `removeBridgeToken(byte,byte[32])void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        removeBridgeToken: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.removeBridgeToken(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `withdrawGasTokens(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        withdrawGasTokens: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.withdrawGasTokens(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `withdrawBridgingFeeInTokens(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        withdrawBridgingFeeInTokens: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.withdrawBridgingFeeInTokens(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getBridgingCostInTokens(byte,uint64)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        getBridgingCostInTokens: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.getBridgingCostInTokens(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `hashMessage(uint64,byte[32],byte,byte,byte[32],byte[32])byte[32]` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        hashMessage: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.hashMessage(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `isOtherBridgeTokenSupported(byte,byte[32])bool` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        isOtherBridgeTokenSupported: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.isOtherBridgeTokenSupported(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getTransactionCost(byte)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        getTransactionCost: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.getTransactionCost(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getReceiveTokensCost()uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        getReceiveTokensCost: (params = { args: [] }) => {
            return this.appClient.params.call(BridgeParamsFactory.getReceiveTokensCost(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getSendTransactionStorageCost()uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        getSendTransactionStorageCost: (params = { args: [] }) => {
            return this.appClient.params.call(BridgeParamsFactory.getSendTransactionStorageCost(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `swap(axfer,uint64,address,uint64,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        swap: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.swap(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `addPool(uint64,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        addPool: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.addPool(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `removePool(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        removePool: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.removePool(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `stopSwap()void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        stopSwap: (params = { args: [] }) => {
            return this.appClient.params.call(BridgeParamsFactory.stopSwap(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `startSwap()void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        startSwap: (params = { args: [] }) => {
            return this.appClient.params.call(BridgeParamsFactory.startSwap(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `setStopAuthority(address)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setStopAuthority: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.setStopAuthority(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `setRebalancer(address)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setRebalancer: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.setRebalancer(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getGasUsage(byte)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        getGasUsage: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.getGasUsage(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `setGasUsage(byte,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setGasUsage: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.setGasUsage(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `setGasOracle(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setGasOracle: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.setGasOracle(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getTransactionRelayerCost(byte)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        getTransactionRelayerCost: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.getTransactionRelayerCost(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `transferOwnership(address)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        transferOwnership: (params) => {
            return this.appClient.params.call(BridgeParamsFactory.transferOwnership(params));
        },
    };
    /**
     * Create transactions for the current app
     */
    createTransaction = {
        /**
         * Makes a clear_state call to an existing instance of the Bridge smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.createTransaction.bare.clearState(params);
        },
        /**
         * Makes a call to the Bridge smart contract using the `optInAsset(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        optInAsset: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.optInAsset(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `swapAndBridge(pay,axfer,byte[32],byte,byte[32],byte[32],uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        swapAndBridge: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.swapAndBridge(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `swapAndBridgeWithStable(axfer,byte[32],byte,byte[32],byte[32],uint64,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        swapAndBridgeWithStable: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.swapAndBridgeWithStable(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `receiveTokens(pay,uint64,byte[32],byte,byte[32],byte[32],uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        receiveTokens: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.receiveTokens(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `registerBridge(byte,byte[32])void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        registerBridge: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.registerBridge(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `addBridgeToken(byte,byte[32])void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        addBridgeToken: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.addBridgeToken(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `removeBridgeToken(byte,byte[32])void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        removeBridgeToken: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.removeBridgeToken(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `withdrawGasTokens(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        withdrawGasTokens: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.withdrawGasTokens(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `withdrawBridgingFeeInTokens(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        withdrawBridgingFeeInTokens: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.withdrawBridgingFeeInTokens(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getBridgingCostInTokens(byte,uint64)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        getBridgingCostInTokens: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.getBridgingCostInTokens(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `hashMessage(uint64,byte[32],byte,byte,byte[32],byte[32])byte[32]` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        hashMessage: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.hashMessage(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `isOtherBridgeTokenSupported(byte,byte[32])bool` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        isOtherBridgeTokenSupported: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.isOtherBridgeTokenSupported(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getTransactionCost(byte)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        getTransactionCost: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.getTransactionCost(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getReceiveTokensCost()uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        getReceiveTokensCost: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.getReceiveTokensCost(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getSendTransactionStorageCost()uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        getSendTransactionStorageCost: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.getSendTransactionStorageCost(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `swap(axfer,uint64,address,uint64,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        swap: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.swap(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `addPool(uint64,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        addPool: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.addPool(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `removePool(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        removePool: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.removePool(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `stopSwap()void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        stopSwap: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.stopSwap(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `startSwap()void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        startSwap: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.startSwap(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `setStopAuthority(address)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setStopAuthority: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.setStopAuthority(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `setRebalancer(address)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setRebalancer: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.setRebalancer(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getGasUsage(byte)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        getGasUsage: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.getGasUsage(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `setGasUsage(byte,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setGasUsage: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.setGasUsage(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `setGasOracle(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setGasOracle: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.setGasOracle(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `getTransactionRelayerCost(byte)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        getTransactionRelayerCost: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.getTransactionRelayerCost(params));
        },
        /**
         * Makes a call to the Bridge smart contract using the `transferOwnership(address)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        transferOwnership: (params) => {
            return this.appClient.createTransaction.call(BridgeParamsFactory.transferOwnership(params));
        },
    };
    /**
     * Send calls to the current app
     */
    send = {
        /**
         * Makes a clear_state call to an existing instance of the Bridge smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.send.bare.clearState(params);
        },
        /**
         * Makes a call to the Bridge smart contract using the `optInAsset(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        optInAsset: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.optInAsset(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Bridge smart contract using the `swapAndBridge(pay,axfer,byte[32],byte,byte[32],byte[32],uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        swapAndBridge: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.swapAndBridge(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `swapAndBridgeWithStable(axfer,byte[32],byte,byte[32],byte[32],uint64,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        swapAndBridgeWithStable: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.swapAndBridgeWithStable(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `receiveTokens(pay,uint64,byte[32],byte,byte[32],byte[32],uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        receiveTokens: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.receiveTokens(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `registerBridge(byte,byte[32])void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        registerBridge: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.registerBridge(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `addBridgeToken(byte,byte[32])void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        addBridgeToken: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.addBridgeToken(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `removeBridgeToken(byte,byte[32])void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        removeBridgeToken: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.removeBridgeToken(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `withdrawGasTokens(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        withdrawGasTokens: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.withdrawGasTokens(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `withdrawBridgingFeeInTokens(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        withdrawBridgingFeeInTokens: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.withdrawBridgingFeeInTokens(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `getBridgingCostInTokens(byte,uint64)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        getBridgingCostInTokens: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.getBridgingCostInTokens(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `hashMessage(uint64,byte[32],byte,byte,byte[32],byte[32])byte[32]` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        hashMessage: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.hashMessage(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `isOtherBridgeTokenSupported(byte,byte[32])bool` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        isOtherBridgeTokenSupported: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.isOtherBridgeTokenSupported(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `getTransactionCost(byte)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        getTransactionCost: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.getTransactionCost(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `getReceiveTokensCost()uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        getReceiveTokensCost: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.getReceiveTokensCost(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `getSendTransactionStorageCost()uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        getSendTransactionStorageCost: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.getSendTransactionStorageCost(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `swap(axfer,uint64,address,uint64,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        swap: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.swap(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `addPool(uint64,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        addPool: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.addPool(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Bridge smart contract using the `removePool(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        removePool: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.removePool(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Bridge smart contract using the `stopSwap()void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        stopSwap: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.stopSwap(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Bridge smart contract using the `startSwap()void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        startSwap: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.startSwap(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Bridge smart contract using the `setStopAuthority(address)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setStopAuthority: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.setStopAuthority(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `setRebalancer(address)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setRebalancer: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.setRebalancer(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Bridge smart contract using the `getGasUsage(byte)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        getGasUsage: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.getGasUsage(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Bridge smart contract using the `setGasUsage(byte,uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setGasUsage: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.setGasUsage(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `setGasOracle(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setGasOracle: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.setGasOracle(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Bridge smart contract using the `getTransactionRelayerCost(byte)uint64` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        getTransactionRelayerCost: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.getTransactionRelayerCost(params));
            return {
                ...result,
                return: result.return,
            };
        },
        /**
         * Makes a call to the Bridge smart contract using the `transferOwnership(address)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        transferOwnership: async (params) => {
            const result = await this.appClient.send.call(BridgeParamsFactory.transferOwnership(params));
            return {
                ...result,
                return: result.return,
            };
        },
    };
    /**
     * Clone this app client with different params
     *
     * @param params The params to use for the the cloned app client. Omit a param to keep the original value. Set a param to override the original value. Setting to undefined will clear the original value.
     * @returns A new app client with the altered params
     */
    clone(params) {
        return new BridgeClient(this.appClient.clone(params));
    }
    /**
     * Makes a readonly (simulated) call to the Bridge smart contract using the `getBridgingCostInTokens(byte,uint64)uint64` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async getBridgingCostInTokens(params) {
        const result = await this.appClient.send.call(BridgeParamsFactory.getBridgingCostInTokens(params));
        return result.return;
    }
    /**
     * Makes a readonly (simulated) call to the Bridge smart contract using the `hashMessage(uint64,byte[32],byte,byte,byte[32],byte[32])byte[32]` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async hashMessage(params) {
        const result = await this.appClient.send.call(BridgeParamsFactory.hashMessage(params));
        return result.return;
    }
    /**
     * Makes a readonly (simulated) call to the Bridge smart contract using the `isOtherBridgeTokenSupported(byte,byte[32])bool` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async isOtherBridgeTokenSupported(params) {
        const result = await this.appClient.send.call(BridgeParamsFactory.isOtherBridgeTokenSupported(params));
        return result.return;
    }
    /**
     * Makes a readonly (simulated) call to the Bridge smart contract using the `getTransactionCost(byte)uint64` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async getTransactionCost(params) {
        const result = await this.appClient.send.call(BridgeParamsFactory.getTransactionCost(params));
        return result.return;
    }
    /**
     * Makes a readonly (simulated) call to the Bridge smart contract using the `getReceiveTokensCost()uint64` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async getReceiveTokensCost(params = { args: [] }) {
        const result = await this.appClient.send.call(BridgeParamsFactory.getReceiveTokensCost(params));
        return result.return;
    }
    /**
     * Makes a readonly (simulated) call to the Bridge smart contract using the `getSendTransactionStorageCost()uint64` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async getSendTransactionStorageCost(params = { args: [] }) {
        const result = await this.appClient.send.call(BridgeParamsFactory.getSendTransactionStorageCost(params));
        return result.return;
    }
    /**
     * Makes a readonly (simulated) call to the Bridge smart contract using the `getGasUsage(byte)uint64` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async getGasUsage(params) {
        const result = await this.appClient.send.call(BridgeParamsFactory.getGasUsage(params));
        return result.return;
    }
    /**
     * Makes a readonly (simulated) call to the Bridge smart contract using the `getTransactionRelayerCost(byte)uint64` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async getTransactionRelayerCost(params) {
        const result = await this.appClient.send.call(BridgeParamsFactory.getTransactionRelayerCost(params));
        return result.return;
    }
    /**
     * Methods to access state for the current Bridge app
     */
    state = {
        /**
         * Methods to access global state for the current Bridge app
         */
        global: {
            /**
             * Get all current keyed values from global state
             */
            getAll: async () => {
                const result = await this.appClient.state.global.getAll();
                return {
                    chainId: result.chainId,
                    messenger: result.messenger,
                    stopAuthority: result.stopAuthority,
                    rebalancer: result.rebalancer,
                    canSwap: result.canSwap,
                    gasOracle: result.gasOracle,
                    owner: result.owner,
                };
            },
            /**
             * Get the current value of the chainId key in global state
             */
            chainId: async () => {
                return (await this.appClient.state.global.getValue("chainId"));
            },
            /**
             * Get the current value of the messenger key in global state
             */
            messenger: async () => {
                return (await this.appClient.state.global.getValue("messenger"));
            },
            /**
             * Get the current value of the stopAuthority key in global state
             */
            stopAuthority: async () => {
                return (await this.appClient.state.global.getValue("stopAuthority"));
            },
            /**
             * Get the current value of the rebalancer key in global state
             */
            rebalancer: async () => {
                return (await this.appClient.state.global.getValue("rebalancer"));
            },
            /**
             * Get the current value of the canSwap key in global state
             */
            canSwap: async () => {
                return (await this.appClient.state.global.getValue("canSwap"));
            },
            /**
             * Get the current value of the gasOracle key in global state
             */
            gasOracle: async () => {
                return (await this.appClient.state.global.getValue("gasOracle"));
            },
            /**
             * Get the current value of the owner key in global state
             */
            owner: async () => {
                return (await this.appClient.state.global.getValue("owner"));
            },
        },
        /**
         * Methods to access box state for the current Bridge app
         */
        box: {
            /**
             * Get all current keyed values from box state
             */
            getAll: async () => {
                const result = await this.appClient.state.box.getAll();
                return {};
            },
            /**
             * Get values from the processedMessages map in box state
             */
            processedMessages: {
                /**
                 * Get all current values of the processedMessages map in box state
                 */
                getMap: async () => {
                    return (await this.appClient.state.box.getMap("processedMessages"));
                },
                /**
                 * Get a current value of the processedMessages map by key from box state
                 */
                value: async (key) => {
                    return (await this.appClient.state.box.getMapValue("processedMessages", key));
                },
            },
            /**
             * Get values from the sentMessages map in box state
             */
            sentMessages: {
                /**
                 * Get all current values of the sentMessages map in box state
                 */
                getMap: async () => {
                    return (await this.appClient.state.box.getMap("sentMessages"));
                },
                /**
                 * Get a current value of the sentMessages map by key from box state
                 */
                value: async (key) => {
                    return (await this.appClient.state.box.getMapValue("sentMessages", key));
                },
            },
            /**
             * Get values from the otherBridges map in box state
             */
            otherBridges: {
                /**
                 * Get all current values of the otherBridges map in box state
                 */
                getMap: async () => {
                    return (await this.appClient.state.box.getMap("otherBridges"));
                },
                /**
                 * Get a current value of the otherBridges map by key from box state
                 */
                value: async (key) => {
                    return (await this.appClient.state.box.getMapValue("otherBridges", key));
                },
            },
            /**
             * Get values from the otherBridgeTokens map in box state
             */
            otherBridgeTokens: {
                /**
                 * Get all current values of the otherBridgeTokens map in box state
                 */
                getMap: async () => {
                    return (await this.appClient.state.box.getMap("otherBridgeTokens"));
                },
                /**
                 * Get a current value of the otherBridgeTokens map by key from box state
                 */
                value: async (key) => {
                    return (await this.appClient.state.box.getMapValue("otherBridgeTokens", key));
                },
            },
            /**
             * Get values from the pools map in box state
             */
            pools: {
                /**
                 * Get all current values of the pools map in box state
                 */
                getMap: async () => {
                    return (await this.appClient.state.box.getMap("pools"));
                },
                /**
                 * Get a current value of the pools map by key from box state
                 */
                value: async (key) => {
                    return (await this.appClient.state.box.getMapValue("pools", key));
                },
            },
            /**
             * Get values from the fromGasOracleScalingFactor map in box state
             */
            fromGasOracleScalingFactor: {
                /**
                 * Get all current values of the fromGasOracleScalingFactor map in box state
                 */
                getMap: async () => {
                    return (await this.appClient.state.box.getMap("fromGasOracleScalingFactor"));
                },
                /**
                 * Get a current value of the fromGasOracleScalingFactor map by key from box state
                 */
                value: async (key) => {
                    return (await this.appClient.state.box.getMapValue("fromGasOracleScalingFactor", key));
                },
            },
            /**
             * Get values from the bridgingFeeConversionScalingFactor map in box state
             */
            bridgingFeeConversionScalingFactor: {
                /**
                 * Get all current values of the bridgingFeeConversionScalingFactor map in box state
                 */
                getMap: async () => {
                    return (await this.appClient.state.box.getMap("bridgingFeeConversionScalingFactor"));
                },
                /**
                 * Get a current value of the bridgingFeeConversionScalingFactor map by key from box state
                 */
                value: async (key) => {
                    return (await this.appClient.state.box.getMapValue("bridgingFeeConversionScalingFactor", key));
                },
            },
            /**
             * Get values from the gasUsage map in box state
             */
            gasUsage: {
                /**
                 * Get all current values of the gasUsage map in box state
                 */
                getMap: async () => {
                    return (await this.appClient.state.box.getMap("gasUsage"));
                },
                /**
                 * Get a current value of the gasUsage map by key from box state
                 */
                value: async (key) => {
                    return (await this.appClient.state.box.getMapValue("gasUsage", key));
                },
            },
        },
    };
    newGroup() {
        const client = this;
        const composer = this.algorand.newGroup();
        let promiseChain = Promise.resolve();
        const resultMappers = [];
        return {
            /**
             * Add a optInAsset(uint64)void method call against the Bridge contract
             */
            optInAsset(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.optInAsset(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a swapAndBridge(pay,axfer,byte[32],byte,byte[32],byte[32],uint64)void method call against the Bridge contract
             */
            swapAndBridge(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.swapAndBridge(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a swapAndBridgeWithStable(axfer,byte[32],byte,byte[32],byte[32],uint64,uint64)void method call against the Bridge contract
             */
            swapAndBridgeWithStable(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.swapAndBridgeWithStable(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a receiveTokens(pay,uint64,byte[32],byte,byte[32],byte[32],uint64)void method call against the Bridge contract
             */
            receiveTokens(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.receiveTokens(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a registerBridge(byte,byte[32])void method call against the Bridge contract
             */
            registerBridge(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.registerBridge(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a addBridgeToken(byte,byte[32])void method call against the Bridge contract
             */
            addBridgeToken(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.addBridgeToken(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a removeBridgeToken(byte,byte[32])void method call against the Bridge contract
             */
            removeBridgeToken(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.removeBridgeToken(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a withdrawGasTokens(uint64)void method call against the Bridge contract
             */
            withdrawGasTokens(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.withdrawGasTokens(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a withdrawBridgingFeeInTokens(uint64)void method call against the Bridge contract
             */
            withdrawBridgingFeeInTokens(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.withdrawBridgingFeeInTokens(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a getBridgingCostInTokens(byte,uint64)uint64 method call against the Bridge contract
             */
            getBridgingCostInTokens(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getBridgingCostInTokens(params)));
                resultMappers.push((v) => client.decodeReturnValue("getBridgingCostInTokens(byte,uint64)uint64", v));
                return this;
            },
            /**
             * Add a hashMessage(uint64,byte[32],byte,byte,byte[32],byte[32])byte[32] method call against the Bridge contract
             */
            hashMessage(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.hashMessage(params)));
                resultMappers.push((v) => client.decodeReturnValue("hashMessage(uint64,byte[32],byte,byte,byte[32],byte[32])byte[32]", v));
                return this;
            },
            /**
             * Add a isOtherBridgeTokenSupported(byte,byte[32])bool method call against the Bridge contract
             */
            isOtherBridgeTokenSupported(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.isOtherBridgeTokenSupported(params)));
                resultMappers.push((v) => client.decodeReturnValue("isOtherBridgeTokenSupported(byte,byte[32])bool", v));
                return this;
            },
            /**
             * Add a getTransactionCost(byte)uint64 method call against the Bridge contract
             */
            getTransactionCost(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getTransactionCost(params)));
                resultMappers.push((v) => client.decodeReturnValue("getTransactionCost(byte)uint64", v));
                return this;
            },
            /**
             * Add a getReceiveTokensCost()uint64 method call against the Bridge contract
             */
            getReceiveTokensCost(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getReceiveTokensCost(params)));
                resultMappers.push((v) => client.decodeReturnValue("getReceiveTokensCost()uint64", v));
                return this;
            },
            /**
             * Add a getSendTransactionStorageCost()uint64 method call against the Bridge contract
             */
            getSendTransactionStorageCost(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getSendTransactionStorageCost(params)));
                resultMappers.push((v) => client.decodeReturnValue("getSendTransactionStorageCost()uint64", v));
                return this;
            },
            /**
             * Add a swap(axfer,uint64,address,uint64,uint64)void method call against the Bridge contract
             */
            swap(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.swap(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a addPool(uint64,uint64)void method call against the Bridge contract
             */
            addPool(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.addPool(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a removePool(uint64)void method call against the Bridge contract
             */
            removePool(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.removePool(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a stopSwap()void method call against the Bridge contract
             */
            stopSwap(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.stopSwap(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a startSwap()void method call against the Bridge contract
             */
            startSwap(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.startSwap(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a setStopAuthority(address)void method call against the Bridge contract
             */
            setStopAuthority(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setStopAuthority(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a setRebalancer(address)void method call against the Bridge contract
             */
            setRebalancer(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setRebalancer(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a getGasUsage(byte)uint64 method call against the Bridge contract
             */
            getGasUsage(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getGasUsage(params)));
                resultMappers.push((v) => client.decodeReturnValue("getGasUsage(byte)uint64", v));
                return this;
            },
            /**
             * Add a setGasUsage(byte,uint64)void method call against the Bridge contract
             */
            setGasUsage(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setGasUsage(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a setGasOracle(uint64)void method call against the Bridge contract
             */
            setGasOracle(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setGasOracle(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a getTransactionRelayerCost(byte)uint64 method call against the Bridge contract
             */
            getTransactionRelayerCost(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getTransactionRelayerCost(params)));
                resultMappers.push((v) => client.decodeReturnValue("getTransactionRelayerCost(byte)uint64", v));
                return this;
            },
            /**
             * Add a transferOwnership(address)void method call against the Bridge contract
             */
            transferOwnership(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.transferOwnership(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a clear state call to the Bridge contract
             */
            clearState(params) {
                promiseChain = promiseChain.then(() => composer.addAppCall(client.params.clearState(params)));
                return this;
            },
            addTransaction(txn, signer) {
                promiseChain = promiseChain.then(() => composer.addTransaction(txn, signer));
                return this;
            },
            async composer() {
                await promiseChain;
                return composer;
            },
            async simulate(options) {
                await promiseChain;
                const result = await (!options ? composer.simulate() : composer.simulate(options));
                return {
                    ...result,
                    returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i](val) : val.returnValue),
                };
            },
            async send(params) {
                await promiseChain;
                const result = await composer.send(params);
                return {
                    ...result,
                    returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i](val) : val.returnValue),
                };
            },
        };
    }
}
exports.BridgeClient = BridgeClient;
//# sourceMappingURL=BridgeClient.js.map