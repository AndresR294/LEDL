"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaddingUtilClient = exports.PaddingUtilFactory = exports.PaddingUtilParamsFactory = exports.APP_SPEC = void 0;
const app_arc56_1 = require("@algorandfoundation/algokit-utils/types/app-arc56");
const app_client_1 = require("@algorandfoundation/algokit-utils/types/app-client");
const app_factory_1 = require("@algorandfoundation/algokit-utils/types/app-factory");
exports.APP_SPEC = {
    name: "PaddingUtil",
    structs: {},
    methods: [
        {
            name: "createApplication",
            args: [],
            returns: { type: "void" },
            actions: { create: ["NoOp"], call: [] },
            readonly: false,
            events: [],
            recommendations: {},
        },
    ],
    arcs: [22, 28],
    networks: {},
    state: {
        schema: { global: { ints: 0, bytes: 0 }, local: { ints: 0, bytes: 0 } },
        keys: { global: {}, local: {}, box: {} },
        maps: { global: {}, local: {}, box: {} },
    },
    bareActions: { create: [], call: ["NoOp"] },
    sourceInfo: {
        approval: {
            sourceInfo: [
                { pc: [27], errorMessage: "OnCompletion must be NoOp && can only call when creating" },
                { pc: [37], errorMessage: "OnCompletion must be NoOp && can only call when not creating" },
            ],
            pcOffsetMethod: "none",
        },
        clear: { sourceInfo: [], pcOffsetMethod: "none" },
    },
    source: {
        approval: "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYXJjNC9pbmRleC5kLnRzOjpDb250cmFjdC5hcHByb3ZhbFByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICAvLyBzbWFydF9jb250cmFjdHMvY29udHJhY3RzL3BhZGRpbmctdXRpbC5jb250cmFjdC5hbGdvLnRzOjQKICAgIC8vIGV4cG9ydCBjbGFzcyBQYWRkaW5nVXRpbCBleHRlbmRzIENvbnRyYWN0IGltcGxlbWVudHMgQ29udmVudGlvbmFsUm91dGluZyB7CiAgICB0eG4gTnVtQXBwQXJncwogICAgYnogbWFpbl9wYWRkaW5nQDUKICAgIHB1c2hieXRlcyAweGI4NDQ3YjM2IC8vIG1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBtYWluX2NyZWF0ZUFwcGxpY2F0aW9uX3JvdXRlQDMKICAgIGVycgoKbWFpbl9jcmVhdGVBcHBsaWNhdGlvbl9yb3V0ZUAzOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvbnRyYWN0cy9wYWRkaW5nLXV0aWwuY29udHJhY3QuYWxnby50czo2CiAgICAvLyBjcmVhdGVBcHBsaWNhdGlvbigpOiB2b2lkIHsKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICAhCiAgICAmJgogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBtdXN0IGJlIE5vT3AgJiYgY2FuIG9ubHkgY2FsbCB3aGVuIGNyZWF0aW5nCiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCgptYWluX3BhZGRpbmdANToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb250cmFjdHMvcGFkZGluZy11dGlsLmNvbnRyYWN0LmFsZ28udHM6OQogICAgLy8gQGJhcmVtZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgICYmCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIG11c3QgYmUgTm9PcCAmJiBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg==",
        clear: "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYmFzZS1jb250cmFjdC5kLnRzOjpCYXNlQ29udHJhY3QuY2xlYXJTdGF0ZVByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg==",
    },
    byteCode: { approval: "CzEbQQAZgAS4RHs2NhoAjgEAAQAxGRQxGBQQRIEBQzEZFDEYEESBAUM=", clear: "C4EBQw==" },
    events: [],
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
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the PaddingUtil smart contract
 */
class PaddingUtilParamsFactory {
    /**
     * Gets available create ABI call param factories
     */
    static get create() {
        return {
            _resolveByMethod(params) {
                switch (params.method) {
                    case "createApplication":
                    case "createApplication()void":
                        return PaddingUtilParamsFactory.create.createApplication(params);
                }
                throw new Error(`Unknown ' + verb + ' method`);
            },
            /**
             * Constructs create ABI call params for the PaddingUtil smart contract using the createApplication()void ABI method
             *
             * @param params Parameters for the call
             * @returns An `AppClientMethodCallParams` object for the call
             */
            createApplication(params) {
                return {
                    ...params,
                    method: "createApplication()void",
                    args: Array.isArray(params.args) ? params.args : [],
                };
            },
        };
    }
}
exports.PaddingUtilParamsFactory = PaddingUtilParamsFactory;
/**
 * A factory to create and deploy one or more instance of the PaddingUtil smart contract and to create one or more app clients to interact with those (or other) app instances
 */
class PaddingUtilFactory {
    /**
     * The underlying `AppFactory` for when you want to have more flexibility
     */
    appFactory;
    /**
     * Creates a new instance of `PaddingUtilFactory`
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
        return new PaddingUtilClient(this.appFactory.getAppClientById(params));
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
        return new PaddingUtilClient(await this.appFactory.getAppClientByCreatorAndName(params));
    }
    /**
     * Idempotently deploys the PaddingUtil smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    async deploy(params = {}) {
        const result = await this.appFactory.deploy({
            ...params,
            createParams: params.createParams?.method
                ? PaddingUtilParamsFactory.create._resolveByMethod(params.createParams)
                : params.createParams
                    ? params.createParams
                    : undefined,
        });
        return { result: result.result, appClient: new PaddingUtilClient(result.appClient) };
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
             * Creates a new instance of the PaddingUtil smart contract using the createApplication()void ABI method.
             *
             * @param params The params for the smart contract call
             * @returns The create params
             */
            createApplication: (params = { args: [] }) => {
                return this.appFactory.params.create(PaddingUtilParamsFactory.create.createApplication(params));
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
             * Creates a new instance of the PaddingUtil smart contract using the createApplication()void ABI method.
             *
             * @param params The params for the smart contract call
             * @returns The create transaction
             */
            createApplication: (params = { args: [] }) => {
                return this.appFactory.createTransaction.create(PaddingUtilParamsFactory.create.createApplication(params));
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
             * Creates a new instance of the PaddingUtil smart contract using an ABI method call using the createApplication()void ABI method.
             *
             * @param params The params for the smart contract call
             * @returns The create result
             */
            createApplication: async (params = { args: [] }) => {
                const result = await this.appFactory.send.create(PaddingUtilParamsFactory.create.createApplication(params));
                return {
                    result: {
                        ...result.result,
                        return: result.result.return,
                    },
                    appClient: new PaddingUtilClient(result.appClient),
                };
            },
        },
    };
}
exports.PaddingUtilFactory = PaddingUtilFactory;
/**
 * A client to make calls to the PaddingUtil smart contract
 */
class PaddingUtilClient {
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
            ? // @ts-ignore
                (0, app_arc56_1.getArc56ReturnValue)(returnValue, this.appClient.getABIMethod(method), exports.APP_SPEC.structs)
            : undefined;
    }
    /**
     * Returns a new `PaddingUtilClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     * @param params The parameters to create the app client
     */
    static async fromCreatorAndName(params) {
        return new PaddingUtilClient(await app_client_1.AppClient.fromCreatorAndName({ ...params, appSpec: exports.APP_SPEC }));
    }
    /**
     * Returns an `PaddingUtilClient` instance for the current network based on
     * pre-determined network-specific app IDs specified in the ARC-56 app spec.
     *
     * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
     * @param params The parameters to create the app client
     */
    static async fromNetwork(params) {
        return new PaddingUtilClient(await app_client_1.AppClient.fromNetwork({ ...params, appSpec: exports.APP_SPEC }));
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
         * Makes a clear_state call to an existing instance of the PaddingUtil smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.params.bare.clearState(params);
        },
        /**
         * Makes a call to the PaddingUtil smart contract using a bare call.
         *
         * @param params The params for the bare (raw) call
         * @returns The call result
         */
        bare: (params) => {
            return this.appClient.params.bare.call(params);
        },
    };
    /**
     * Create transactions for the current app
     */
    createTransaction = {
        /**
         * Makes a clear_state call to an existing instance of the PaddingUtil smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.createTransaction.bare.clearState(params);
        },
        /**
         * Makes a call to the PaddingUtil smart contract using a bare call.
         *
         * @param params The params for the bare (raw) call
         * @returns The call result
         */
        bare: (params) => {
            return this.appClient.createTransaction.bare.call(params);
        },
    };
    /**
     * Send calls to the current app
     */
    send = {
        /**
         * Makes a clear_state call to an existing instance of the PaddingUtil smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.send.bare.clearState(params);
        },
        /**
         * Makes a call to the PaddingUtil smart contract using a bare call.
         *
         * @param params The params for the bare (raw) call
         * @returns The call result
         */
        bare: (params) => {
            return this.appClient.send.bare.call(params);
        },
    };
    /**
     * Clone this app client with different params
     *
     * @param params The params to use for the the cloned app client. Omit a param to keep the original value. Set a param to override the original value. Setting to undefined will clear the original value.
     * @returns A new app client with the altered params
     */
    clone(params) {
        return new PaddingUtilClient(this.appClient.clone(params));
    }
    /**
     * Methods to access state for the current PaddingUtil app
     */
    state = {};
    newGroup() {
        const client = this;
        const composer = this.algorand.newGroup();
        let promiseChain = Promise.resolve();
        const resultMappers = [];
        return {
            /**
             * Add a bare method call to the PaddingUtil contract
             */
            bare(params) {
                promiseChain = promiseChain.then(() => composer.addAppCall(client.params.bare(params)));
                return this;
            },
            /**
             * Add a clear state call to the PaddingUtil contract
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
exports.PaddingUtilClient = PaddingUtilClient;
//# sourceMappingURL=PaddingUtilClient.js.map