// src/core/base.ts
var Network = {
  EVM: "evm",
  TRON: "tron"
};
var WalletType = {
  LOCAL_SECURE: "local_secure",
  RAW_SECRET: "raw_secret",
  PRIVY: "privy"
};

// src/core/adapters/evm.ts
import { parseTransaction } from "viem";
import { privateKeyToAccount } from "viem/accounts";

// src/core/errors.ts
var WalletError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "WalletError";
  }
};
var WalletNotFoundError = class extends WalletError {
  constructor(message) {
    super(message);
    this.name = "WalletNotFoundError";
  }
};
var DecryptionError = class extends WalletError {
  constructor(message) {
    super(message);
    this.name = "DecryptionError";
  }
};
var SigningError = class extends WalletError {
  constructor(message) {
    super(message);
    this.name = "SigningError";
  }
};
var UnsupportedOperationError = class extends WalletError {
  constructor(message) {
    super(message);
    this.name = "UnsupportedOperationError";
  }
};
var PrivyConfigError = class extends WalletError {
  constructor(message) {
    super(message);
    this.name = "PrivyConfigError";
  }
};
var PrivyRequestError = class extends WalletError {
  constructor(message) {
    super(message);
    this.name = "PrivyRequestError";
  }
};
var PrivyRateLimitError = class extends WalletError {
  constructor(message) {
    super(message);
    this.name = "PrivyRateLimitError";
  }
};
var PrivyAuthError = class extends WalletError {
  constructor(message) {
    super(message);
    this.name = "PrivyAuthError";
  }
};

// src/core/adapters/evm.ts
var EvmSigner = class {
  account;
  network;
  constructor(privateKey, network = "eip155") {
    const hex = `0x${Buffer.from(privateKey).toString("hex")}`;
    this.account = privateKeyToAccount(hex);
    this.network = network;
  }
  async getAddress() {
    return this.account.address;
  }
  async signRaw(rawTx, _options) {
    try {
      const serialized = `0x${Buffer.from(rawTx).toString("hex")}`;
      const parsed = parseTransaction(serialized);
      const {
        r: _r,
        s: _s,
        v: _v,
        yParity: _yParity,
        ...transaction
      } = parsed;
      const sig = await this.account.signTransaction(
        transaction
      );
      return sig.slice(2);
    } catch (e) {
      throw new SigningError(`EVM sign_raw failed: ${e}`);
    }
  }
  async signTransaction(payload, _options) {
    try {
      const sig = await this.account.signTransaction(
        payload
      );
      return sig.slice(2);
    } catch (e) {
      throw new SigningError(`EVM sign_transaction failed: ${e}`);
    }
  }
  async signMessage(msg, _options) {
    try {
      const sig = await this.account.signMessage({
        message: { raw: msg }
      });
      return sig.slice(2);
    } catch (e) {
      throw new SigningError(`EVM sign_message failed: ${e}`);
    }
  }
  async signTypedData(data, _options) {
    try {
      const { domain, types, primaryType, message } = data;
      const { EIP712Domain: _domain, ...messageTypes } = types;
      const sig = await this.account.signTypedData({
        domain,
        types: messageTypes,
        primaryType,
        message
      });
      return sig.slice(2);
    } catch (e) {
      throw new SigningError(`EVM sign_typed_data failed: ${e}`);
    }
  }
};

// src/core/adapters/tron.ts
import { keccak256 } from "viem";
import { privateKeyToAccount as privateKeyToAccount2 } from "viem/accounts";
import { secp256k1 } from "@noble/curves/secp256k1";
import bs58checkModule from "bs58check";
import { createHash } from "crypto";

// src/core/utils/hex.ts
function stripHexPrefix(value) {
  return value.startsWith("0x") ? value.slice(2) : value;
}

// src/core/adapters/tron.ts
var bs58checkInterop = bs58checkModule;
var bs58check = typeof bs58checkInterop.encode === "function" ? bs58checkModule : bs58checkInterop.default ?? bs58checkModule;
var TronSigner = class {
  privateKeyBytes;
  address;
  network;
  constructor(privateKey, network = "tron") {
    this.privateKeyBytes = privateKey;
    this.network = network;
    const hex = `0x${Buffer.from(privateKey).toString("hex")}`;
    const account = privateKeyToAccount2(hex);
    const ethAddrBytes = Buffer.from(account.address.slice(2), "hex");
    const tronAddrBytes = Buffer.concat([Buffer.from([65]), ethAddrBytes]);
    this.address = bs58check.encode(tronAddrBytes);
  }
  async getAddress() {
    return this.address;
  }
  async signRaw(rawTx, _options) {
    try {
      return this.ecdsaSign(rawTx);
    } catch (e) {
      throw new SigningError(`Tron sign_raw failed: ${e}`);
    }
  }
  /**
   * Sign a pre-built unsigned transaction from TronGrid.
   *
   * Accepts an unsigned tx object with { raw_data_hex } and optional txID/raw_data.
   * If txID is missing, compute SHA256(raw_data_hex) locally.
   * Sign the txID directly with secp256k1 and return the signed tx with signature attached.
   */
  async signTransaction(payload, _options) {
    try {
      if (!payload.raw_data_hex) {
        throw new Error(
          "Payload must be an unsigned transaction with {raw_data_hex}. Use TronGrid API to build the transaction first."
        );
      }
      const rawDataHex = stripHexPrefix(payload.raw_data_hex);
      const txId = typeof payload.txID === "string" ? stripHexPrefix(payload.txID) : "";
      const txIdHex = txId ? validateTxId(txId) : sha256Hex(rawDataHex);
      const txIdBytes = Buffer.from(txIdHex, "hex");
      const signature = this.signDigest(txIdBytes);
      const signedTx = { ...payload, txID: txIdHex, signature: [signature] };
      return JSON.stringify(signedTx);
    } catch (e) {
      if (e instanceof SigningError) throw e;
      throw new SigningError(`Tron sign_transaction failed: ${e}`);
    }
  }
  async signMessage(msg, _options) {
    try {
      return this.ecdsaSign(msg);
    } catch (e) {
      throw new SigningError(`Tron sign_message failed: ${e}`);
    }
  }
  async signTypedData(data, _options) {
    try {
      const hex = `0x${Buffer.from(this.privateKeyBytes).toString("hex")}`;
      const account = privateKeyToAccount2(hex);
      const { domain, types, primaryType, message } = data;
      const { EIP712Domain: _domain, ...messageTypes } = types;
      const sig = await account.signTypedData({
        domain,
        types: messageTypes,
        primaryType,
        message
      });
      return sig.slice(2);
    } catch (e) {
      throw new SigningError(`Tron sign_typed_data failed: ${e}`);
    }
  }
  /**
   * Raw ECDSA sign: keccak256(data) → secp256k1 sign → r || s || v (65 bytes hex)
   * This matches tronpy's PrivateKey.sign_msg() behavior.
   */
  ecdsaSign(data) {
    const hash = keccak256(data);
    const hashBytes = Buffer.from(hash.slice(2), "hex");
    return this.signDigest(hashBytes);
  }
  /**
   * Sign a pre-hashed 32-byte digest directly with secp256k1.
   * Used for transaction signing where the txID (SHA256 hash) is already computed.
   */
  signDigest(digest) {
    const sig = secp256k1.sign(digest, this.privateKeyBytes);
    const r = sig.r.toString(16).padStart(64, "0");
    const s = sig.s.toString(16).padStart(64, "0");
    const v = (sig.recovery + 27).toString(16).padStart(2, "0");
    return r + s + v;
  }
};
function sha256Hex(hex) {
  return createHash("sha256").update(Buffer.from(hex, "hex")).digest("hex");
}
function validateTxId(txId) {
  if (!/^[0-9a-fA-F]{64}$/.test(txId)) {
    throw new Error("Payload txID must be a 32-byte hex string");
  }
  return txId;
}

// src/core/utils/keys.ts
import { mnemonicToAccount } from "viem/accounts";
function decodePrivateKey(privateKey) {
  const normalized = privateKey.trim().replace(/^0x/, "");
  if (normalized.length !== 64) {
    throw new Error("Private key must be 32 bytes (64 hex characters)");
  }
  if (!/^[0-9a-fA-F]+$/.test(normalized)) {
    throw new Error("Private key must be a valid hex string");
  }
  return Uint8Array.from(Buffer.from(normalized, "hex"));
}
function deriveKeyFromMnemonic(network, mnemonic, accountIndex) {
  const path = network === Network.TRON ? `m/44'/195'/0'/0/${accountIndex}` : void 0;
  const account = path ? mnemonicToAccount(mnemonic, { path }) : mnemonicToAccount(mnemonic, { addressIndex: accountIndex });
  const privateKey = account.getHdKey().privateKey;
  if (!privateKey) {
    throw new Error(`Failed to derive private key from mnemonic for ${network}`);
  }
  return privateKey;
}

// src/core/adapters/privy.ts
import { keccak256 as keccak2562, hashTypedData } from "viem";
import { secp256k1 as secp256k12 } from "@noble/curves/secp256k1";
import bs58checkModule2 from "bs58check";
import { createHash as createHash2 } from "crypto";
var bs58checkInterop2 = bs58checkModule2;
var bs58check2 = typeof bs58checkInterop2.encode === "function" ? bs58checkModule2 : bs58checkInterop2.default ?? bs58checkModule2;
var PrivyAdapter = class {
  config;
  client;
  cachedAddress = null;
  cachedChainType = null;
  constructor(config, client) {
    this.config = config;
    this.client = client;
  }
  async getAddress() {
    if (this.cachedAddress) return this.cachedAddress;
    const wallet = await this.client.getWallet(this.config.walletId);
    this.cachedAddress = wallet.address;
    this.cachedChainType = wallet.chainType ?? null;
    return wallet.address;
  }
  async signRaw(_rawTx, options) {
    const chain = await this.getChainType();
    if (chain === "tron") {
      return this.tronSignBytes(_rawTx, options);
    }
    throw new UnsupportedOperationError("Privy adapter does not support raw transaction signing");
  }
  async signTransaction(payload, options) {
    const chain = await this.getChainType();
    if (chain === "tron") {
      return this.tronSignTransaction(payload, options);
    }
    const response = await this.rpc(
      "eth_signTransaction",
      normalizeTransactionPayload(payload),
      options
    );
    const signed = response.data.signed_transaction;
    if (!signed) {
      throw new SigningError("Privy eth_signTransaction did not return signed_transaction");
    }
    return stripHexPrefix(signed);
  }
  async signMessage(msg, options) {
    const chain = await this.getChainType();
    if (chain === "tron") {
      return this.tronSignBytes(msg, options);
    }
    const hex = `0x${Buffer.from(msg).toString("hex")}`;
    const response = await this.rpc(
      "personal_sign",
      {
        message: hex,
        encoding: "hex"
      },
      options
    );
    return extractSignature(response);
  }
  async signTypedData(data, options) {
    const chain = await this.getChainType();
    if (chain === "tron") {
      return this.tronSignTypedData(data, options);
    }
    const response = await this.rpc("eth_signTypedData_v4", normalizeTypedDataPayload(data), options);
    return extractSignature(response);
  }
  async rpc(method, params, options) {
    return this.client.rpc(this.config.walletId, method, params, options);
  }
  async getChainType() {
    if (this.cachedChainType) return this.cachedChainType;
    const wallet = await this.client.getWallet(this.config.walletId);
    this.cachedAddress = wallet.address;
    this.cachedChainType = wallet.chainType?.toLowerCase() ?? "";
    return this.cachedChainType;
  }
  async tronSignTransaction(payload, options) {
    const { txId } = normalizeTronTxPayload(payload);
    const signature = await this.tronSignHash(Buffer.from(txId, "hex"), options);
    const signedTx = { ...payload, txID: txId, signature: [signature] };
    return JSON.stringify(signedTx);
  }
  async tronSignBytes(bytes, options) {
    const hashHex = keccak2562(bytes);
    const hash = Buffer.from(hashHex.slice(2), "hex");
    return this.tronSignHash(hash, options);
  }
  async tronSignTypedData(data, options) {
    const typed = normalizeTypedDataPayload(data).typed_data;
    if (!typed) {
      throw new SigningError("Privy TRON typed data payload is missing typed_data");
    }
    const { domain, types, message } = typed;
    const primaryType = typed.primary_type ?? typed.primaryType;
    if (!primaryType) {
      throw new SigningError("Privy TRON typed data payload is missing primaryType");
    }
    const { EIP712Domain: _domain, ...messageTypes } = types ?? {};
    const hashHex = hashTypedData({
      domain,
      types: messageTypes,
      primaryType,
      message
    });
    const hash = Buffer.from(hashHex.slice(2), "hex");
    return this.tronSignHash(hash, options);
  }
  async tronSignHash(hash, options) {
    const hashHex = `0x${Buffer.from(hash).toString("hex")}`;
    const response = await this.client.rawSign(this.config.walletId, { hash: hashHex }, options);
    const signature = extractSignature(response);
    const sigHex = stripHexPrefix(signature);
    const sigBytes = Buffer.from(sigHex, "hex");
    if (sigBytes.length !== 64) {
      throw new SigningError("Privy raw_sign response must be 64-byte r||s for TRON");
    }
    const v = await recoverTronRecoveryId(sigBytes, hash, await this.getAddress());
    const vHex = (v + 27).toString(16).padStart(2, "0");
    return `${sigHex}${vHex}`;
  }
};
function extractSignature(response) {
  const signature = response.data.signature;
  if (!signature) {
    throw new SigningError("Privy signing response missing signature");
  }
  return stripHexPrefix(signature);
}
function normalizeTransactionPayload(payload) {
  const hasTransaction = payload.transaction && typeof payload.transaction === "object";
  const tx = hasTransaction ? payload.transaction : payload;
  if (!tx || typeof tx !== "object") return payload;
  const normalized = {};
  const mappedKeys = /* @__PURE__ */ new Set([
    "to",
    "data",
    "value",
    "nonce",
    "chain_id",
    "chainId",
    "gas_limit",
    "gas",
    "max_fee_per_gas",
    "maxFeePerGas",
    "max_priority_fee_per_gas",
    "maxPriorityFeePerGas",
    "gas_price",
    "gasPrice",
    "access_list",
    "accessList",
    "type"
  ]);
  const pick = (...keys) => keys.map((k) => tx[k]).find((v) => v !== void 0);
  const assign = (key, value) => {
    if (value !== void 0) normalized[key] = value;
  };
  assign("to", tx.to);
  assign("data", tx.data);
  assign("value", pick("value"));
  assign("nonce", pick("nonce"));
  assign("chain_id", pick("chain_id", "chainId"));
  assign("gas_limit", pick("gas_limit", "gas"));
  assign("max_fee_per_gas", pick("max_fee_per_gas", "maxFeePerGas"));
  assign("max_priority_fee_per_gas", pick("max_priority_fee_per_gas", "maxPriorityFeePerGas"));
  assign("gas_price", pick("gas_price", "gasPrice"));
  assign("access_list", pick("access_list", "accessList"));
  assign("type", pick("type"));
  for (const [key, value] of Object.entries(tx)) {
    if (!mappedKeys.has(key) && !(key in normalized)) {
      normalized[key] = value;
    }
  }
  const hexFields = [
    "value",
    "gas_limit",
    "nonce",
    "chain_id",
    "max_fee_per_gas",
    "max_priority_fee_per_gas",
    "gas_price"
  ];
  for (const field of hexFields) {
    if (field in normalized) {
      normalized[field] = toHexValue(normalized[field]);
    }
  }
  if (hasTransaction) {
    return { ...payload, transaction: normalized };
  }
  return { transaction: normalized };
}
function toHexValue(value) {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return value;
    if (trimmed.startsWith("0x")) return trimmed;
    if (/^\d+$/.test(trimmed)) {
      return `0x${BigInt(trimmed).toString(16)}`;
    }
    return value;
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return `0x${BigInt(Math.trunc(value)).toString(16)}`;
  }
  if (typeof value === "bigint") {
    return `0x${value.toString(16)}`;
  }
  return value;
}
function normalizeTypedDataPayload(data) {
  const payload = "typed_data" in data ? data : { typed_data: data };
  const typed = payload.typed_data;
  if (!typed) return payload;
  if ("primaryType" in typed && !("primary_type" in typed)) {
    typed.primary_type = typed.primaryType;
    delete typed.primaryType;
  }
  return payload;
}
function normalizeTronTxPayload(payload) {
  const rawDataHexRaw = payload.raw_data_hex;
  if (typeof rawDataHexRaw !== "string" || !rawDataHexRaw.trim()) {
    throw new SigningError("Payload must include raw_data_hex for TRON signing");
  }
  const rawDataHex = stripHexPrefix(rawDataHexRaw.trim());
  const txIdRaw = payload.txID ?? payload.txId ?? payload.tx_id;
  if (typeof txIdRaw === "string" && txIdRaw.trim()) {
    const txId = stripHexPrefix(txIdRaw.trim());
    if (!/^[0-9a-fA-F]{64}$/.test(txId)) {
      throw new SigningError("Payload txID must be a 32-byte hex string");
    }
    return { txId, rawDataHex };
  }
  const digest = createHash2("sha256").update(Buffer.from(rawDataHex, "hex")).digest("hex");
  return { txId: digest, rawDataHex };
}
async function recoverTronRecoveryId(signature, hash, address) {
  for (const recovery of [0, 1]) {
    try {
      const sig = secp256k12.Signature.fromCompact(signature).addRecoveryBit(recovery);
      const pub = sig.recoverPublicKey(hash);
      const tronAddress = tronAddressFromPublicKey(pub.toRawBytes(false));
      if (tronAddress === address) {
        return recovery;
      }
    } catch {
      continue;
    }
  }
  throw new UnsupportedOperationError("Unable to derive recovery id for TRON signature");
}
function tronAddressFromPublicKey(pubkey) {
  const uncompressed = pubkey[0] === 4 ? pubkey.slice(1) : pubkey;
  const hash = keccak2562(uncompressed);
  const addrBytes = Buffer.from(hash.slice(2), "hex").slice(-20);
  const tronAddrBytes = Buffer.concat([Buffer.from([65]), addrBytes]);
  return bs58check2.encode(tronAddrBytes);
}

// src/core/clients/privy.ts
var PrivyClient = class {
  appId;
  appSecret;
  baseUrl;
  retries;
  sleep;
  constructor(config) {
    this.appId = config.appId;
    this.appSecret = config.appSecret;
    this.baseUrl = "https://api.privy.io";
    this.retries = config.retries ?? 2;
    this.sleep = config.sleep ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  }
  async getWallet(walletId) {
    const result = await this.request("GET", `/v1/wallets/${walletId}`);
    const data = readDataObject(result);
    if (!data?.address) {
      throw new PrivyRequestError("Privy wallet response missing address");
    }
    return { address: data.address, chainType: data.chain_type ?? "" };
  }
  async rpc(walletId, method, params, options) {
    return this.request(
      "POST",
      `/v1/wallets/${walletId}/rpc`,
      {
        method,
        params
      },
      options
    );
  }
  async rawSign(walletId, params, options) {
    return this.request(
      "POST",
      `/v1/wallets/${walletId}/raw_sign`,
      {
        params
      },
      options
    );
  }
  async request(method, path, body, options) {
    let attempt = 0;
    while (true) {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method,
        headers: this.buildHeaders(options),
        body: body ? JSON.stringify(body) : void 0
      });
      if (response.status === 429) {
        if (attempt >= this.retries) {
          throw new PrivyRateLimitError("Privy rate limit exceeded");
        }
        attempt += 1;
        await this.sleep(backoffMs(attempt));
        continue;
      }
      const payload = await readJson(response);
      if (!response.ok) {
        const message = extractErrorMessage(payload) ?? `Privy request failed with status ${response.status}`;
        if (response.status === 401 || response.status === 403) {
          throw new PrivyAuthError(message);
        }
        throw new PrivyRequestError(message);
      }
      return payload;
    }
  }
  buildHeaders(options) {
    const auth = Buffer.from(`${this.appId}:${this.appSecret}`).toString("base64");
    const headers = {
      "content-type": "application/json",
      authorization: `Basic ${auth}`,
      "privy-app-id": this.appId
    };
    if (options?.authorizationSignature) {
      headers["privy-authorization-signature"] = options.authorizationSignature;
    }
    return headers;
  }
};
function backoffMs(attempt) {
  return Math.min(1e3, 200 * attempt);
}
async function readJson(response) {
  try {
    return await response.json();
  } catch {
    return void 0;
  }
}
function readDataObject(payload) {
  if (!payload || typeof payload !== "object") return null;
  const record = payload;
  if (record.data && typeof record.data === "object") {
    return record.data;
  }
  if ("address" in record || "chain_type" in record) {
    return record;
  }
  return null;
}
function extractErrorMessage(payload) {
  if (!payload || typeof payload !== "object") return void 0;
  const record = payload;
  if (record.error && typeof record.error === "object") {
    const error = record.error;
    if (typeof error.message === "string") return error.message;
  }
  if (typeof record.message === "string") return record.message;
  return void 0;
}

// src/core/providers/privy-config.ts
var PrivyConfigResolver = class {
  source;
  constructor(opts) {
    this.source = opts.source;
  }
  isEnabled() {
    const merged = this.merge();
    if (!merged.app_id || !merged.app_secret || !merged.wallet_id) return false;
    return true;
  }
  resolve() {
    const merged = this.merge();
    const missing = requiredMissing(merged);
    if (missing.length > 0) {
      throw new PrivyConfigError(`Missing required Privy config keys: ${missing.join(", ")}`);
    }
    return {
      appId: merged.app_id,
      appSecret: merged.app_secret,
      walletId: merged.wallet_id
    };
  }
  merge() {
    const source = normalizeSource(this.source);
    return {
      app_id: source.app_id,
      app_secret: source.app_secret,
      wallet_id: source.wallet_id
    };
  }
};
function normalizeSource(input) {
  return {
    app_id: normalizeValue(input?.app_id),
    app_secret: normalizeValue(input?.app_secret),
    wallet_id: normalizeValue(input?.wallet_id)
  };
}
function normalizeValue(value) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : void 0;
}
function requiredMissing(config) {
  const missing = [];
  if (!config.app_id) missing.push("app_id");
  if (!config.app_secret) missing.push("app_secret");
  if (!config.wallet_id) missing.push("wallet_id");
  return missing;
}

export {
  Network,
  WalletType,
  WalletError,
  WalletNotFoundError,
  DecryptionError,
  UnsupportedOperationError,
  EvmSigner,
  TronSigner,
  decodePrivateKey,
  deriveKeyFromMnemonic,
  PrivyAdapter,
  PrivyClient,
  PrivyConfigResolver
};
//# sourceMappingURL=chunk-XNDRR2Y5.js.map