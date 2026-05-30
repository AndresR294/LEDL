import {
  EvmSigner,
  Network,
  PrivyAdapter,
  PrivyClient,
  PrivyConfigResolver,
  TronSigner,
  WalletType,
  decodePrivateKey,
  deriveKeyFromMnemonic
} from "./chunk-XNDRR2Y5.js";

// src/core/address-resolution.ts
async function resolveWalletAddresses(conf, options) {
  if (conf.type === WalletType.PRIVY) {
    return resolvePrivyAddress(conf.params);
  }
  const privateKey = conf.type === WalletType.LOCAL_SECURE ? loadLocalSecurePrivateKey(conf.params, options) : loadRawSecretPrivateKey(conf.params);
  const [evmAddress, tronAddress] = await Promise.all([
    new EvmSigner(privateKey.eip155, "eip155").getAddress(),
    new TronSigner(privateKey.tron, "tron").getAddress()
  ]);
  return {
    mode: "whitelist",
    entries: [
      { format: "eip155", label: "EVM", address: evmAddress },
      { format: "tron", label: "TRON", address: tronAddress }
    ]
  };
}
async function resolvePrivyAddress(params) {
  const resolved = new PrivyConfigResolver({ source: params }).resolve();
  const wallet = new PrivyAdapter(
    resolved,
    new PrivyClient({
      appId: resolved.appId,
      appSecret: resolved.appSecret
    })
  );
  const address = await wallet.getAddress();
  return {
    mode: "single",
    entries: [{ format: "canonical", label: "Address", address }]
  };
}
function loadLocalSecurePrivateKey(params, options) {
  if (!options.password) {
    throw new Error("Password required for local_secure wallets");
  }
  if (!options.secretLoader) {
    throw new Error("local_secure wallets require a configured secret loader");
  }
  const privateKey = options.secretLoader(options.configDir, options.password, params.secret_ref);
  return { eip155: privateKey, tron: privateKey };
}
function loadRawSecretPrivateKey(params) {
  if (params.source === "private_key") {
    const privateKey = decodePrivateKey(params.private_key);
    return { eip155: privateKey, tron: privateKey };
  }
  return {
    eip155: deriveKeyFromMnemonic(Network.EVM, params.mnemonic, params.account_index),
    tron: deriveKeyFromMnemonic(Network.TRON, params.mnemonic, params.account_index)
  };
}
export {
  resolveWalletAddresses
};
//# sourceMappingURL=address-resolution-3O5OONUF.js.map