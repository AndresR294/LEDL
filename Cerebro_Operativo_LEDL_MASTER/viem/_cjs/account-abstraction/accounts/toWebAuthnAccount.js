"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toWebAuthnAccount = toWebAuthnAccount;
const Signature = require("ox/Signature");
const WebAuthnP256 = require("ox/WebAuthnP256");
const hashMessage_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/signature/hashMessage.js");
const hashTypedData_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/signature/hashTypedData.js");
function toWebAuthnAccount(parameters) {
    const { getFn, rpId } = parameters;
    const { id, publicKey } = parameters.credential;
    return {
        id,
        publicKey,
        async sign({ hash }) {
            const { metadata, raw, signature } = await WebAuthnP256.sign({
                credentialId: id,
                getFn,
                challenge: hash,
                rpId,
            });
            return {
                signature: Signature.toHex(signature),
                raw,
                webauthn: metadata,
            };
        },
        async signMessage({ message }) {
            return this.sign({ hash: (0, hashMessage_js_1.hashMessage)(message) });
        },
        async signTypedData(parameters) {
            return this.sign({ hash: (0, hashTypedData_js_1.hashTypedData)(parameters) });
        },
        type: 'webAuthn',
    };
}
//# sourceMappingURL=toWebAuthnAccount.js.map