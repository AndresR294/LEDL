"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateBlocks = simulateBlocks;
exports.simulateCalls = simulateCalls;
const BlockOverrides = require("ox/BlockOverrides");
const parseAccount_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/accounts/utils/parseAccount.js");
const abi_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/abi.js");
const contract_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/contract.js");
const node_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/errors/node.js");
const decodeFunctionResult_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js");
const encodeFunctionData_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js");
const concat_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/data/concat.js");
const toHex_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/encoding/toHex.js");
const getContractError_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/errors/getContractError.js");
const getNodeError_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/errors/getNodeError.js");
const block_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/formatters/block.js");
const log_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/formatters/log.js");
const transactionRequest_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/formatters/transactionRequest.js");
const stateOverride_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/stateOverride.js");
const assertRequest_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/transaction/assertRequest.js");
async function simulateBlocks(client, parameters) {
    const { blockNumber, blockTag = client.experimental_blockTag ?? 'latest', blocks, returnFullTransactions, traceTransfers, validation, } = parameters;
    try {
        const blockStateCalls = [];
        for (const block of blocks) {
            const blockOverrides = block.blockOverrides
                ? BlockOverrides.toRpc(block.blockOverrides)
                : undefined;
            const calls = block.calls.map((call_) => {
                const call = call_;
                const account = call.account
                    ? (0, parseAccount_js_1.parseAccount)(call.account)
                    : client.account
                        ? (0, parseAccount_js_1.parseAccount)(client.account)
                        : undefined;
                const data = call.abi ? (0, encodeFunctionData_js_1.encodeFunctionData)(call) : call.data;
                const request = {
                    ...call,
                    account,
                    data: call.dataSuffix
                        ? (0, concat_js_1.concat)([data || '0x', call.dataSuffix])
                        : data,
                    from: call.from ?? account?.address,
                };
                (0, assertRequest_js_1.assertRequest)(request);
                return (0, transactionRequest_js_1.formatTransactionRequest)(request);
            });
            const stateOverrides = block.stateOverrides
                ? (0, stateOverride_js_1.serializeStateOverride)(block.stateOverrides)
                : undefined;
            blockStateCalls.push({
                blockOverrides,
                calls,
                stateOverrides,
            });
        }
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const result = await client.request({
            method: 'tempo_simulateV1',
            params: [
                {
                    blockStateCalls,
                    returnFullTransactions,
                    traceTransfers,
                    validation,
                },
                block,
            ],
        });
        return {
            blocks: result.blocks.map((block, i) => ({
                ...(0, block_js_1.formatBlock)(block),
                calls: block.calls?.map((call, j) => {
                    const { abi, args, functionName, to } = blocks[i].calls[j];
                    const data = call.error?.data ?? call.returnData;
                    const gasUsed = BigInt(call.gasUsed);
                    const logs = call.logs?.map((log) => (0, log_js_1.formatLog)(log));
                    const status = call.status === '0x1' ? 'success' : 'failure';
                    const result = abi && status === 'success' && data !== '0x'
                        ? (0, decodeFunctionResult_js_1.decodeFunctionResult)({
                            abi,
                            data,
                            functionName,
                        })
                        : null;
                    const error = (() => {
                        if (status === 'success')
                            return undefined;
                        let error;
                        if (data === '0x')
                            error = new abi_js_1.AbiDecodingZeroDataError();
                        else if (data)
                            error = new contract_js_1.RawContractError({ data });
                        if (!error)
                            return undefined;
                        return (0, getContractError_js_1.getContractError)(error, {
                            abi: (abi ?? []),
                            address: to ?? '0x',
                            args,
                            functionName: functionName ?? '<unknown>',
                        });
                    })();
                    return {
                        data,
                        gasUsed,
                        logs,
                        status,
                        ...(status === 'success'
                            ? {
                                result,
                            }
                            : {
                                error,
                            }),
                    };
                }),
            })),
            tokenMetadata: result.tokenMetadata ?? {},
        };
    }
    catch (e) {
        const cause = e;
        const error = (0, getNodeError_js_1.getNodeError)(cause, {});
        if (error instanceof node_js_1.UnknownNodeError)
            throw cause;
        throw error;
    }
}
async function simulateCalls(client, parameters) {
    const { blockNumber, blockTag, calls, stateOverrides, traceTransfers, validation, } = parameters;
    const account = parameters.account
        ? (0, parseAccount_js_1.parseAccount)(parameters.account)
        : undefined;
    const result = await simulateBlocks(client, {
        blockNumber,
        blockTag: blockTag,
        blocks: [
            {
                calls: calls.map((call) => ({
                    ...call,
                    from: account?.address,
                })),
                stateOverrides,
            },
        ],
        traceTransfers,
        validation,
    });
    const { calls: block_calls, ...block } = result.blocks[0];
    return {
        block,
        results: block_calls,
        tokenMetadata: result.tokenMetadata,
    };
}
//# sourceMappingURL=simulate.js.map