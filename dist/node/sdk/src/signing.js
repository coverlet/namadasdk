"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signing = void 0;
const types_1 = require("../../types/src");
/**
 * Non-Tx signing functions
 */
class Signing {
    /**
     * Signing constructor
     * @param sdk - Instance of Sdk struct from wasm lib
     */
    constructor(sdk) {
        this.sdk = sdk;
    }
    /**
     * Sign Namada transaction
     * @param txProps - TxProps
     * @param signingKey - private key
     * @param xsks - spending keys
     * @param [chainId] - optional chain ID, will enforce validation if present
     * @returns signed tx bytes - Promise resolving to Uint8Array
     */
    sign(txProps, signingKey, xsks, chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            const txMsgValue = new types_1.TxMsgValue(txProps);
            const msg = new types_1.Message();
            const txBytes = msg.encode(txMsgValue);
            const txBytesFinal = xsks && xsks.length > 0 ?
                yield this.sdk.sign_masp(xsks, txBytes)
                : txBytes;
            return yield this.sdk.sign_tx(txBytesFinal, signingKey, chainId);
        });
    }
    /**
     * Sign arbitrary data
     * @param signingKey - private key
     * @param data - data to sign
     * @returns hash and signature
     */
    signArbitrary(signingKey, data) {
        return this.sdk.sign_arbitrary(signingKey, data);
    }
    /**
     * Verify arbitrary signature. Will throw an error if the signature is invalid
     * @param publicKey - public key to verify with
     * @param hash - signed hash
     * @param signature - Hex-encoded signature
     * @returns void
     */
    verifyArbitrary(publicKey, hash, signature) {
        return this.sdk.verify_arbitrary(publicKey, hash, signature);
    }
}
exports.Signing = Signing;
//# sourceMappingURL=signing.js.map