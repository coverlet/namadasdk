export type ByteSize = 12 | 24 | 32;
export const ByteSize: Readonly<{
    N12: 12;
    "12": "N12";
    N24: 24;
    "24": "N24";
    N32: 32;
    "32": "N32";
}>;
export function __wbg_buffer_609cc3eee51ed158(arg0: any): any;
export function __wbg_call_672a4d21634d4a24(...args: any[]): any;
export function __wbg_call_7cccdd69e0791ae2(...args: any[]): any;
export function __wbg_crypto_038798f665f985e2(arg0: any): any;
export function __wbg_crypto_ed58b8e10a292839(arg0: any): any;
export function __wbg_getRandomValues_371e7ade8bd92088(arg0: any, arg1: any): void;
export function __wbg_getRandomValues_7dfe5bd1b67c9ca1(arg0: any): any;
export function __wbg_getRandomValues_bcb4912f16000dc4(...args: any[]): any;
export function __wbg_length_a446193dc22c12f8(arg0: any): any;
export function __wbg_msCrypto_0a36e2ec3a343d26(arg0: any): any;
export function __wbg_msCrypto_ff35fce085fab2a3(arg0: any): any;
export function __wbg_new_a12002a7f91c75be(arg0: any): Uint8Array;
export function __wbg_newnoargs_105ed471475aaf50(arg0: any, arg1: any): Function;
export function __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a(arg0: any, arg1: any, arg2: any): Uint8Array;
export function __wbg_newwithlength_a381634e90c276d4(arg0: any): Uint8Array;
export function __wbg_node_02999533c4ea02e3(arg0: any): any;
export function __wbg_process_5c1d670bc53614b8(arg0: any): any;
export function __wbg_randomFillSync_994ac6d9ade7a695(arg0: any, arg1: any, arg2: any): void;
export function __wbg_randomFillSync_ab2cfe79ebbf2740(...args: any[]): any;
export function __wbg_require_0d6aeaec3c042c88(arg0: any, arg1: any, arg2: any): any;
export function __wbg_require_79b1e9274cde3c87(...args: any[]): any;
export function __wbg_self_25aabeb5a7b41685(...args: any[]): any;
export function __wbg_set_65595bdd868b3009(arg0: any, arg1: any, arg2: any): void;
export function __wbg_static_accessor_GLOBAL_88a902d13a557d07(): any;
export function __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0(): any;
export function __wbg_static_accessor_MODULE_ef3aa2eb251158a5(): {
    exports: typeof module.exports;
};
export function __wbg_static_accessor_SELF_37c5d418e4bf5819(): any;
export function __wbg_static_accessor_WINDOW_5de37043a91a9c40(): any;
export function __wbg_subarray_aa9065fa9dc5df96(arg0: any, arg1: any, arg2: any): any;
export function __wbg_versions_c71aa1626a93e0a1(arg0: any): any;
export function __wbindgen_init_externref_table(): void;
export function __wbindgen_is_function(arg0: any): boolean;
export function __wbindgen_is_object(arg0: any): boolean;
export function __wbindgen_is_string(arg0: any): arg0 is string;
export function __wbindgen_is_undefined(arg0: any): boolean;
export function __wbindgen_memory(): any;
export function __wbindgen_string_new(arg0: any, arg1: any): string;
export function __wbindgen_throw(arg0: any, arg1: any): never;
export class AES {
    /**
     * @param {VecU8Pointer} key
     * @param {Uint8Array} iv
     */
    constructor(key: VecU8Pointer, iv: Uint8Array);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @param {string} text
     * @returns {Uint8Array}
     */
    encrypt(text: string): Uint8Array;
    /**
     * @param {Uint8Array} ciphertext
     * @returns {VecU8Pointer}
     */
    decrypt(ciphertext: Uint8Array): VecU8Pointer;
}
export class Argon2 {
    /**
     * @param {string} password
     * @param {string | null} [salt]
     * @param {Argon2Params | null} [params]
     */
    constructor(password: string, salt?: string | null | undefined, params?: Argon2Params | null | undefined);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @returns {string}
     */
    to_hash(): string;
    /**
     * @param {string} hash
     */
    verify(hash: string): void;
    /**
     * @returns {Argon2Params}
     */
    params(): Argon2Params;
    /**
     * Convert PHC string to serialized key
     * @returns {VecU8Pointer}
     */
    key(): VecU8Pointer;
}
export class Argon2Params {
    static __wrap(ptr: any): any;
    /**
     * @param {number} m_cost
     * @param {number} t_cost
     * @param {number} p_cost
     */
    constructor(m_cost: number, t_cost: number, p_cost: number);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @returns {number}
     */
    get m_cost(): number;
    /**
     * @returns {number}
     */
    get t_cost(): number;
    /**
     * @returns {number}
     */
    get p_cost(): number;
}
export class DerivationResult {
    static __wrap(ptr: any): any;
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
    /**
     * @returns {Uint8Array}
     */
    xsk(): Uint8Array;
    /**
     * @returns {Uint8Array}
     */
    xfvk(): Uint8Array;
    /**
     * @returns {Uint8Array}
     */
    payment_address(): Uint8Array;
}
export class HDWallet {
    static __wrap(ptr: any): any;
    /**
     * @param {Uint8Array} seed
     * @returns {HDWallet}
     */
    static from_seed(seed: Uint8Array): HDWallet;
    /**
     * @returns {Key}
     */
    static disposable_keypair(): Key;
    /**
     * @param {VecU8Pointer} seed_ptr
     */
    constructor(seed_ptr: VecU8Pointer);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * Derive account from a seed and a path
     * @param {Uint32Array} path
     * @returns {Key}
     */
    derive(path: Uint32Array): Key;
}
export class Key {
    static __wrap(ptr: any): any;
    /**
     * @param {Uint8Array} bytes
     */
    constructor(bytes: Uint8Array);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @returns {Uint8Array}
     */
    to_bytes(): Uint8Array;
    /**
     * @returns {StringPointer}
     */
    to_hex(): StringPointer;
}
export class Mnemonic {
    static __wrap(ptr: any): any;
    /**
     * @param {string} phrase
     * @returns {boolean}
     */
    static validate(phrase: string): boolean;
    /**
     * @param {string} phrase
     * @returns {Mnemonic}
     */
    static from_phrase(phrase: string): Mnemonic;
    /**
     * @param {number} size
     */
    constructor(size: number);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @param {StringPointer | null} [passphrase]
     * @returns {VecU8Pointer}
     */
    to_seed(passphrase?: StringPointer | null | undefined): VecU8Pointer;
    /**
     * @returns {VecStringPointer}
     */
    to_words(): VecStringPointer;
    /**
     * @returns {string}
     */
    phrase(): string;
}
export class Rng {
    /**
     * @param {ByteSize | null} [size]
     * @returns {Uint8Array}
     */
    static generate_bytes(size?: ByteSize | null | undefined): Uint8Array;
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
}
export class Salt {
    static __wrap(ptr: any): any;
    /**
     * @returns {Salt}
     */
    static generate(): Salt;
    /**
     * @param {string} salt
     */
    constructor(salt: string);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @returns {Uint8Array}
     */
    to_bytes(): Uint8Array;
    /**
     * @returns {string}
     */
    as_string(): string;
}
export class ShieldedHDWallet {
    static __wrap(ptr: any): any;
    /**
     * @param {Uint8Array} sk_bytes
     * @returns {ShieldedHDWallet}
     */
    static new_from_sk(sk_bytes: Uint8Array): ShieldedHDWallet;
    /**
     * @param {any} seed
     * @param {Uint32Array} path
     */
    constructor(seed: any, path: Uint32Array);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @param {Uint32Array} path
     * @param {Uint8Array | null} [diversifier]
     * @returns {DerivationResult}
     */
    derive(path: Uint32Array, diversifier?: Uint8Array | null | undefined): DerivationResult;
}
export class StringPointer {
    static __wrap(ptr: any): any;
    /**
     * @param {string} string
     */
    constructor(string: string);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @param {number} arg0
     */
    set pointer(arg0: number);
    /**
     * @returns {number}
     */
    get pointer(): number;
    /**
     * @param {number} arg0
     */
    set length(arg0: number);
    /**
     * @returns {number}
     */
    get length(): number;
}
export class VecStringPointer {
    static __wrap(ptr: any): any;
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
    /**
     * @returns {Uint32Array}
     */
    get pointers(): Uint32Array;
    /**
     * @returns {Uint32Array}
     */
    get lengths(): Uint32Array;
}
export class VecU8Pointer {
    static __wrap(ptr: any): any;
    /**
     * @param {Uint8Array} vec
     */
    constructor(vec: Uint8Array);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @param {number} arg0
     */
    set pointer(arg0: number);
    /**
     * @returns {number}
     */
    get pointer(): number;
    /**
     * @param {number} arg0
     */
    set length(arg0: number);
    /**
     * @returns {number}
     */
    get length(): number;
}
declare namespace module {
    namespace exports {
        export { ByteSize, AES, Argon2, Argon2Params, DerivationResult, HDWallet, Key, Mnemonic, Rng, Salt, ShieldedHDWallet, StringPointer, VecStringPointer, VecU8Pointer, __wbg_buffer_609cc3eee51ed158, __wbg_call_672a4d21634d4a24, __wbg_call_7cccdd69e0791ae2, __wbg_crypto_038798f665f985e2, __wbg_crypto_ed58b8e10a292839, __wbg_getRandomValues_371e7ade8bd92088, __wbg_getRandomValues_7dfe5bd1b67c9ca1, __wbg_getRandomValues_bcb4912f16000dc4, __wbg_length_a446193dc22c12f8, __wbg_msCrypto_0a36e2ec3a343d26, __wbg_msCrypto_ff35fce085fab2a3, __wbg_new_a12002a7f91c75be, __wbg_newnoargs_105ed471475aaf50, __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a, __wbg_newwithlength_a381634e90c276d4, __wbg_node_02999533c4ea02e3, __wbg_process_5c1d670bc53614b8, __wbg_randomFillSync_994ac6d9ade7a695, __wbg_randomFillSync_ab2cfe79ebbf2740, __wbg_require_0d6aeaec3c042c88, __wbg_require_79b1e9274cde3c87, __wbg_self_25aabeb5a7b41685, __wbg_set_65595bdd868b3009, __wbg_static_accessor_GLOBAL_88a902d13a557d07, __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0, __wbg_static_accessor_MODULE_ef3aa2eb251158a5, __wbg_static_accessor_SELF_37c5d418e4bf5819, __wbg_static_accessor_WINDOW_5de37043a91a9c40, __wbg_subarray_aa9065fa9dc5df96, __wbg_versions_c71aa1626a93e0a1, __wbindgen_init_externref_table, __wbindgen_is_function, __wbindgen_is_object, __wbindgen_is_string, __wbindgen_is_undefined, __wbindgen_memory, __wbindgen_string_new, __wbindgen_throw, wasm as __wasm };
    }
}
declare let wasm: any;
export { wasm as __wasm };
