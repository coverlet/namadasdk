var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let wasm;
function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_export_2.set(idx, obj);
    return idx;
}
function handleError(f, args) {
    try {
        return f.apply(this, args);
    }
    catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}
const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available'); } });
if (typeof TextDecoder !== 'undefined') {
    cachedTextDecoder.decode();
}
;
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}
function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
function isLikeNone(x) {
    return x === undefined || x === null;
}
let WASM_VECTOR_LEN = 0;
function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_export_2.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}
function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}
let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}
function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getUint32ArrayMemory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available'); } });
const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    }
    : function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });
function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }
    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;
    const mem = getUint8ArrayMemory0();
    let offset = 0;
    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F)
            break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
}
function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
 * @enum {12 | 24 | 32}
 */
export const ByteSize = Object.freeze({
    N12: 12, "12": "N12",
    N24: 24, "24": "N24",
    N32: 32, "32": "N32",
});
const AESFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_aes_free(ptr >>> 0, 1));
export class AES {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AESFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_aes_free(ptr, 0);
    }
    /**
     * @param {VecU8Pointer} key
     * @param {Uint8Array} iv
     */
    constructor(key, iv) {
        _assertClass(key, VecU8Pointer);
        var ptr0 = key.__destroy_into_raw();
        const ptr1 = passArray8ToWasm0(iv, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.aes_new(ptr0, ptr1, len1);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        AESFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {string} text
     * @returns {Uint8Array}
     */
    encrypt(text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.aes_encrypt(this.__wbg_ptr, ptr0, len0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v2;
    }
    /**
     * @param {Uint8Array} ciphertext
     * @returns {VecU8Pointer}
     */
    decrypt(ciphertext) {
        const ptr0 = passArray8ToWasm0(ciphertext, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.aes_decrypt(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return VecU8Pointer.__wrap(ret[0]);
    }
}
const Argon2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_argon2_free(ptr >>> 0, 1));
export class Argon2 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Argon2Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_argon2_free(ptr, 0);
    }
    /**
     * @param {string} password
     * @param {string | null} [salt]
     * @param {Argon2Params | null} [params]
     */
    constructor(password, salt, params) {
        const ptr0 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(salt) ? 0 : passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        let ptr2 = 0;
        if (!isLikeNone(params)) {
            _assertClass(params, Argon2Params);
            ptr2 = params.__destroy_into_raw();
        }
        const ret = wasm.argon2_new(ptr0, len0, ptr1, len1, ptr2);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        Argon2Finalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {string}
     */
    to_hash() {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.argon2_to_hash(this.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0;
                len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        }
        finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * @param {string} hash
     */
    verify(hash) {
        const ptr0 = passStringToWasm0(hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.argon2_verify(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @returns {Argon2Params}
     */
    params() {
        const ret = wasm.argon2_params(this.__wbg_ptr);
        return Argon2Params.__wrap(ret);
    }
    /**
     * Convert PHC string to serialized key
     * @returns {VecU8Pointer}
     */
    key() {
        const ret = wasm.argon2_key(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return VecU8Pointer.__wrap(ret[0]);
    }
}
const Argon2ParamsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_argon2params_free(ptr >>> 0, 1));
export class Argon2Params {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Argon2Params.prototype);
        obj.__wbg_ptr = ptr;
        Argon2ParamsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Argon2ParamsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_argon2params_free(ptr, 0);
    }
    /**
     * @param {number} m_cost
     * @param {number} t_cost
     * @param {number} p_cost
     */
    constructor(m_cost, t_cost, p_cost) {
        const ret = wasm.argon2params_new(m_cost, t_cost, p_cost);
        this.__wbg_ptr = ret >>> 0;
        Argon2ParamsFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {number}
     */
    get m_cost() {
        const ret = wasm.argon2params_m_cost(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get t_cost() {
        const ret = wasm.argon2params_t_cost(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get p_cost() {
        const ret = wasm.argon2params_p_cost(this.__wbg_ptr);
        return ret >>> 0;
    }
}
const DerivationResultFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_derivationresult_free(ptr >>> 0, 1));
export class DerivationResult {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DerivationResult.prototype);
        obj.__wbg_ptr = ptr;
        DerivationResultFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DerivationResultFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_derivationresult_free(ptr, 0);
    }
    /**
     * @returns {Uint8Array}
     */
    xsk() {
        const ret = wasm.derivationresult_xsk(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    xfvk() {
        const ret = wasm.derivationresult_xfvk(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    payment_address() {
        const ret = wasm.derivationresult_payment_address(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
const HDWalletFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_hdwallet_free(ptr >>> 0, 1));
export class HDWallet {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(HDWallet.prototype);
        obj.__wbg_ptr = ptr;
        HDWalletFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        HDWalletFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_hdwallet_free(ptr, 0);
    }
    /**
     * @param {VecU8Pointer} seed_ptr
     */
    constructor(seed_ptr) {
        _assertClass(seed_ptr, VecU8Pointer);
        var ptr0 = seed_ptr.__destroy_into_raw();
        const ret = wasm.hdwallet_new(ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        HDWalletFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {Uint8Array} seed
     * @returns {HDWallet}
     */
    static from_seed(seed) {
        const ptr0 = passArray8ToWasm0(seed, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.hdwallet_from_seed(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return HDWallet.__wrap(ret[0]);
    }
    /**
     * Derive account from a seed and a path
     * @param {Uint32Array} path
     * @returns {Key}
     */
    derive(path) {
        const ptr0 = passArray32ToWasm0(path, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.hdwallet_derive(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return Key.__wrap(ret[0]);
    }
    /**
     * @returns {Key}
     */
    static disposable_keypair() {
        const ret = wasm.hdwallet_disposable_keypair();
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return Key.__wrap(ret[0]);
    }
}
const KeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_key_free(ptr >>> 0, 1));
export class Key {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Key.prototype);
        obj.__wbg_ptr = ptr;
        KeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        KeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_key_free(ptr, 0);
    }
    /**
     * @param {Uint8Array} bytes
     */
    constructor(bytes) {
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.key_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        KeyFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {Uint8Array}
     */
    to_bytes() {
        const ret = wasm.key_to_bytes(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {StringPointer}
     */
    to_hex() {
        const ret = wasm.key_to_hex(this.__wbg_ptr);
        return StringPointer.__wrap(ret);
    }
}
const MnemonicFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_mnemonic_free(ptr >>> 0, 1));
export class Mnemonic {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Mnemonic.prototype);
        obj.__wbg_ptr = ptr;
        MnemonicFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        MnemonicFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_mnemonic_free(ptr, 0);
    }
    /**
     * @param {number} size
     */
    constructor(size) {
        const ret = wasm.mnemonic_new(size);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        MnemonicFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {string} phrase
     * @returns {boolean}
     */
    static validate(phrase) {
        const ptr0 = passStringToWasm0(phrase, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.mnemonic_validate(ptr0, len0);
        return ret !== 0;
    }
    /**
     * @param {string} phrase
     * @returns {Mnemonic}
     */
    static from_phrase(phrase) {
        const ptr0 = passStringToWasm0(phrase, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.mnemonic_from_phrase(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return Mnemonic.__wrap(ret[0]);
    }
    /**
     * @param {StringPointer | null} [passphrase]
     * @returns {VecU8Pointer}
     */
    to_seed(passphrase) {
        let ptr0 = 0;
        if (!isLikeNone(passphrase)) {
            _assertClass(passphrase, StringPointer);
            ptr0 = passphrase.__destroy_into_raw();
        }
        const ret = wasm.mnemonic_to_seed(this.__wbg_ptr, ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return VecU8Pointer.__wrap(ret[0]);
    }
    /**
     * @returns {VecStringPointer}
     */
    to_words() {
        const ret = wasm.mnemonic_to_words(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return VecStringPointer.__wrap(ret[0]);
    }
    /**
     * @returns {string}
     */
    phrase() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.mnemonic_phrase(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        }
        finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}
const RngFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_rng_free(ptr >>> 0, 1));
export class Rng {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RngFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rng_free(ptr, 0);
    }
    /**
     * @param {ByteSize | null} [size]
     * @returns {Uint8Array}
     */
    static generate_bytes(size) {
        const ret = wasm.rng_generate_bytes(isLikeNone(size) ? 0 : size);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
const SaltFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_salt_free(ptr >>> 0, 1));
export class Salt {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Salt.prototype);
        obj.__wbg_ptr = ptr;
        SaltFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SaltFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_salt_free(ptr, 0);
    }
    /**
     * @param {string} salt
     */
    constructor(salt) {
        const ptr0 = passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.salt_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        SaltFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {Salt}
     */
    static generate() {
        const ret = wasm.salt_generate();
        return Salt.__wrap(ret);
    }
    /**
     * @returns {Uint8Array}
     */
    to_bytes() {
        const ret = wasm.salt_to_bytes(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {string}
     */
    as_string() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.salt_as_string(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        }
        finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}
const ShieldedHDWalletFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_shieldedhdwallet_free(ptr >>> 0, 1));
export class ShieldedHDWallet {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShieldedHDWallet.prototype);
        obj.__wbg_ptr = ptr;
        ShieldedHDWalletFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShieldedHDWalletFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shieldedhdwallet_free(ptr, 0);
    }
    /**
     * @param {any} seed
     * @param {Uint32Array} path
     */
    constructor(seed, path) {
        const ptr0 = passArray32ToWasm0(path, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.shieldedhdwallet_new(seed, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        ShieldedHDWalletFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {Uint8Array} sk_bytes
     * @returns {ShieldedHDWallet}
     */
    static new_from_sk(sk_bytes) {
        const ptr0 = passArray8ToWasm0(sk_bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.shieldedhdwallet_new_from_sk(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ShieldedHDWallet.__wrap(ret[0]);
    }
    /**
     * @param {Uint32Array} path
     * @param {Uint8Array | null} [diversifier]
     * @returns {DerivationResult}
     */
    derive(path, diversifier) {
        const ptr0 = passArray32ToWasm0(path, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(diversifier) ? 0 : passArray8ToWasm0(diversifier, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.shieldedhdwallet_derive(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return DerivationResult.__wrap(ret[0]);
    }
}
const StringPointerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_stringpointer_free(ptr >>> 0, 1));
export class StringPointer {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(StringPointer.prototype);
        obj.__wbg_ptr = ptr;
        StringPointerFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        StringPointerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_stringpointer_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get pointer() {
        const ret = wasm.__wbg_get_stringpointer_pointer(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set pointer(arg0) {
        wasm.__wbg_set_stringpointer_pointer(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get length() {
        const ret = wasm.__wbg_get_stringpointer_length(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set length(arg0) {
        wasm.__wbg_set_stringpointer_length(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} string
     */
    constructor(string) {
        const ptr0 = passStringToWasm0(string, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.stringpointer_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        StringPointerFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
const VecStringPointerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_vecstringpointer_free(ptr >>> 0, 1));
export class VecStringPointer {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(VecStringPointer.prototype);
        obj.__wbg_ptr = ptr;
        VecStringPointerFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        VecStringPointerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_vecstringpointer_free(ptr, 0);
    }
    /**
     * @returns {Uint32Array}
     */
    get pointers() {
        const ret = wasm.vecstringpointer_pointers(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {Uint32Array}
     */
    get lengths() {
        const ret = wasm.vecstringpointer_lengths(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
}
const VecU8PointerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(ptr => wasm.__wbg_vecu8pointer_free(ptr >>> 0, 1));
export class VecU8Pointer {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(VecU8Pointer.prototype);
        obj.__wbg_ptr = ptr;
        VecU8PointerFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        VecU8PointerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_vecu8pointer_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get pointer() {
        const ret = wasm.__wbg_get_stringpointer_pointer(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set pointer(arg0) {
        wasm.__wbg_set_stringpointer_pointer(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get length() {
        const ret = wasm.__wbg_get_stringpointer_length(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set length(arg0) {
        wasm.__wbg_set_stringpointer_length(this.__wbg_ptr, arg0);
    }
    /**
     * @param {Uint8Array} vec
     */
    constructor(vec) {
        const ptr0 = passArray8ToWasm0(vec, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.stringpointer_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        VecU8PointerFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
function __wbg_load(module, imports) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return yield WebAssembly.instantiateStreaming(module, imports);
                }
                catch (e) {
                    if (module.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                    }
                    else {
                        throw e;
                    }
                }
            }
            const bytes = yield module.arrayBuffer();
            return yield WebAssembly.instantiate(bytes, imports);
        }
        else {
            const instance = yield WebAssembly.instantiate(module, imports);
            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            }
            else {
                return instance;
            }
        }
    });
}
function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_buffer_609cc3eee51ed158 = function (arg0) {
        const ret = arg0.buffer;
        return ret;
    };
    imports.wbg.__wbg_call_672a4d21634d4a24 = function () {
        return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments);
    };
    imports.wbg.__wbg_call_7cccdd69e0791ae2 = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments);
    };
    imports.wbg.__wbg_crypto_038798f665f985e2 = function (arg0) {
        const ret = arg0.crypto;
        return ret;
    };
    imports.wbg.__wbg_crypto_ed58b8e10a292839 = function (arg0) {
        const ret = arg0.crypto;
        return ret;
    };
    imports.wbg.__wbg_getRandomValues_371e7ade8bd92088 = function (arg0, arg1) {
        arg0.getRandomValues(arg1);
    };
    imports.wbg.__wbg_getRandomValues_7dfe5bd1b67c9ca1 = function (arg0) {
        const ret = arg0.getRandomValues;
        return ret;
    };
    imports.wbg.__wbg_getRandomValues_bcb4912f16000dc4 = function () {
        return handleError(function (arg0, arg1) {
            arg0.getRandomValues(arg1);
        }, arguments);
    };
    imports.wbg.__wbg_length_a446193dc22c12f8 = function (arg0) {
        const ret = arg0.length;
        return ret;
    };
    imports.wbg.__wbg_msCrypto_0a36e2ec3a343d26 = function (arg0) {
        const ret = arg0.msCrypto;
        return ret;
    };
    imports.wbg.__wbg_msCrypto_ff35fce085fab2a3 = function (arg0) {
        const ret = arg0.msCrypto;
        return ret;
    };
    imports.wbg.__wbg_new_a12002a7f91c75be = function (arg0) {
        const ret = new Uint8Array(arg0);
        return ret;
    };
    imports.wbg.__wbg_newnoargs_105ed471475aaf50 = function (arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return ret;
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function (arg0, arg1, arg2) {
        const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
        return ret;
    };
    imports.wbg.__wbg_newwithlength_a381634e90c276d4 = function (arg0) {
        const ret = new Uint8Array(arg0 >>> 0);
        return ret;
    };
    imports.wbg.__wbg_node_02999533c4ea02e3 = function (arg0) {
        const ret = arg0.node;
        return ret;
    };
    imports.wbg.__wbg_process_5c1d670bc53614b8 = function (arg0) {
        const ret = arg0.process;
        return ret;
    };
    imports.wbg.__wbg_randomFillSync_994ac6d9ade7a695 = function (arg0, arg1, arg2) {
        arg0.randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    };
    imports.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740 = function () {
        return handleError(function (arg0, arg1) {
            arg0.randomFillSync(arg1);
        }, arguments);
    };
    imports.wbg.__wbg_require_0d6aeaec3c042c88 = function (arg0, arg1, arg2) {
        const ret = arg0.require(getStringFromWasm0(arg1, arg2));
        return ret;
    };
    imports.wbg.__wbg_require_79b1e9274cde3c87 = function () {
        return handleError(function () {
            const ret = module.require;
            return ret;
        }, arguments);
    };
    imports.wbg.__wbg_self_25aabeb5a7b41685 = function () {
        return handleError(function () {
            const ret = self.self;
            return ret;
        }, arguments);
    };
    imports.wbg.__wbg_set_65595bdd868b3009 = function (arg0, arg1, arg2) {
        arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function () {
        const ret = typeof global === 'undefined' ? null : global;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function () {
        const ret = typeof globalThis === 'undefined' ? null : globalThis;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_static_accessor_MODULE_ef3aa2eb251158a5 = function () {
        const ret = module;
        return ret;
    };
    imports.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function () {
        const ret = typeof self === 'undefined' ? null : self;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function () {
        const ret = typeof window === 'undefined' ? null : window;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_subarray_aa9065fa9dc5df96 = function (arg0, arg1, arg2) {
        const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
        return ret;
    };
    imports.wbg.__wbg_versions_c71aa1626a93e0a1 = function (arg0) {
        const ret = arg0.versions;
        return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function () {
        const table = wasm.__wbindgen_export_2;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
        ;
    };
    imports.wbg.__wbindgen_is_function = function (arg0) {
        const ret = typeof (arg0) === 'function';
        return ret;
    };
    imports.wbg.__wbindgen_is_object = function (arg0) {
        const val = arg0;
        const ret = typeof (val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbindgen_is_string = function (arg0) {
        const ret = typeof (arg0) === 'string';
        return ret;
    };
    imports.wbg.__wbindgen_is_undefined = function (arg0) {
        const ret = arg0 === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_memory = function () {
        const ret = wasm.memory;
        return ret;
    };
    imports.wbg.__wbindgen_string_new = function (arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return ret;
    };
    imports.wbg.__wbindgen_throw = function (arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    return imports;
}
function __wbg_init_memory(imports, memory) {
}
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}
function initSync(module) {
    if (wasm !== undefined)
        return wasm;
    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({ module } = module);
        }
        else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead');
        }
    }
    const imports = __wbg_get_imports();
    __wbg_init_memory(imports);
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}
function __wbg_init(module_or_path) {
    return __awaiter(this, void 0, void 0, function* () {
        if (wasm !== undefined)
            return wasm;
        if (typeof module_or_path !== 'undefined') {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({ module_or_path } = module_or_path);
            }
            else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead');
            }
        }
        const imports = __wbg_get_imports();
        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }
        __wbg_init_memory(imports);
        const { instance, module } = yield __wbg_load(yield module_or_path, imports);
        return __wbg_finalize_init(instance, module);
    });
}
export { initSync };
export default __wbg_init;
//# sourceMappingURL=crypto.js.map