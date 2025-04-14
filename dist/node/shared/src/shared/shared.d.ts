export function public_key_to_bech32(bytes: Uint8Array): string;
export function gen_payment_address(vk: string, index: number): any;
export function get_inner_tx_hashes(tx_bytes: Uint8Array): string[];
export function deserialize_tx(tx_bytes: Uint8Array, wasm_hashes: any): Uint8Array;
export function initThreadPool(_threads: number): Promise<void>;
export type TxType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export const TxType: Readonly<{
    Bond: 1;
    "1": "Bond";
    Unbond: 2;
    "2": "Unbond";
    Withdraw: 3;
    "3": "Withdraw";
    Transfer: 4;
    "4": "Transfer";
    IBCTransfer: 5;
    "5": "IBCTransfer";
    EthBridgeTransfer: 6;
    "6": "EthBridgeTransfer";
    RevealPK: 7;
    "7": "RevealPK";
    VoteProposal: 8;
    "8": "VoteProposal";
    Redelegate: 9;
    "9": "Redelegate";
    Batch: 10;
    "10": "Batch";
    ClaimRewards: 11;
    "11": "ClaimRewards";
}>;
export function __wbg_abort_775ef1d17fc65868(arg0: any): void;
export function __wbg_append_8c7dd8d641a5f01b(...args: any[]): any;
export function __wbg_arrayBuffer_d1b44c4390db422f(...args: any[]): any;
export function __wbg_buffer_609cc3eee51ed158(arg0: any): any;
export function __wbg_call_672a4d21634d4a24(...args: any[]): any;
export function __wbg_call_7cccdd69e0791ae2(...args: any[]): any;
export function __wbg_crypto_ed58b8e10a292839(arg0: any): any;
export function __wbg_datedviewingkey_unwrap(arg0: any): number;
export function __wbg_dispatchEvent_9e259d7c1d603dfb(...args: any[]): any;
export function __wbg_done_769e5ede4b31c67b(arg0: any): any;
export function __wbg_error_524f506f44df1645(arg0: any): void;
export function __wbg_error_7534b8e9a36f1ab4(arg0: any, arg1: any): void;
export function __wbg_existsSync_5b172b33f0bc28bf(...args: any[]): any;
export function __wbg_fetchAndStoreMaspParams_20478e06a4af47d2(...args: any[]): any;
export function __wbg_fetch_4465c2b10f21a927(arg0: any): Promise<Response>;
export function __wbg_fetch_509096533071c657(arg0: any, arg1: any): any;
export function __wbg_getRandomValues_78e016fdd1d721cf(...args: any[]): any;
export function __wbg_getRandomValues_bcb4912f16000dc4(...args: any[]): any;
export function __wbg_getTime_46267b1c24877e30(arg0: any): any;
export function __wbg_get_67b2ba62fc30de12(...args: any[]): any;
export function __wbg_hasMaspParams_84ed06fe42a69d5b(...args: any[]): any;
export function __wbg_has_a5ea9117f258a0ec(...args: any[]): any;
export function __wbg_headers_9cb51cfd2ac780a4(arg0: any): any;
export function __wbg_info_3daf2e093e091b66(arg0: any): void;
export function __wbg_instanceof_Response_f2cc20d9f7dfd644(arg0: any): boolean;
export function __wbg_iterator_9a24c88df860dc65(): symbol;
export function __wbg_json_1671bfa3e3625686(...args: any[]): any;
export function __wbg_length_a446193dc22c12f8(arg0: any): any;
export function __wbg_log_c222819a41e063d3(arg0: any): void;
export function __wbg_msCrypto_0a36e2ec3a343d26(arg0: any): any;
export function __wbg_new0_f788a2397c7ca929(): Date;
export function __wbg_new_018dcc2d6c8c2f6a(...args: any[]): any;
export function __wbg_new_23a2665fac83c611(arg0: any, arg1: any): Promise<any>;
export function __wbg_new_405e22f390576ce2(): Object;
export function __wbg_new_8a6f238a6ece86ea(): Error;
export function __wbg_new_a12002a7f91c75be(arg0: any): Uint8Array;
export function __wbg_new_e25e5aab09ff45db(...args: any[]): any;
export function __wbg_newnoargs_105ed471475aaf50(arg0: any, arg1: any): Function;
export function __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a(arg0: any, arg1: any, arg2: any): Uint8Array;
export function __wbg_newwitheventinitdict_fae2ef218b85b0d2(...args: any[]): any;
export function __wbg_newwithlength_a381634e90c276d4(arg0: any): Uint8Array;
export function __wbg_newwithstrandinit_06c535e0a867c635(...args: any[]): any;
export function __wbg_next_25feadfc0913fea9(arg0: any): any;
export function __wbg_next_6574e1a8a62d1055(...args: any[]): any;
export function __wbg_node_02999533c4ea02e3(arg0: any): any;
export function __wbg_now_fb0466b5460cff09(arg0: any): any;
export function __wbg_parse_def2e24ef1252aff(...args: any[]): any;
export function __wbg_performance_71b063e177862740(arg0: any): any;
export function __wbg_process_5c1d670bc53614b8(arg0: any): any;
export function __wbg_queueMicrotask_97d92b4fcc8a61c5(arg0: any): void;
export function __wbg_queueMicrotask_d3219def82552485(arg0: any): any;
export function __wbg_randomFillSync_ab2cfe79ebbf2740(...args: any[]): any;
export function __wbg_readFileSync_c99a7075a8348653(...args: any[]): any;
export function __wbg_renameSync_39833dcf2f68390c(...args: any[]): any;
export function __wbg_require_79b1e9274cde3c87(...args: any[]): any;
export function __wbg_resolve_4851785c9c5f573d(arg0: any): Promise<any>;
export function __wbg_setTimeout_25eabdb2fc442ea2(...args: any[]): any;
export function __wbg_set_65595bdd868b3009(arg0: any, arg1: any, arg2: any): void;
export function __wbg_setbody_5923b78a95eedf29(arg0: any, arg1: any): void;
export function __wbg_setcredentials_c3a22f1cd105a2c6(arg0: any, arg1: any): void;
export function __wbg_setdetail_fc5160ccbec4ee24(arg0: any, arg1: any): void;
export function __wbg_setheaders_834c0bdb6a8949ad(arg0: any, arg1: any): void;
export function __wbg_setmethod_3c5280fe5d890842(arg0: any, arg1: any, arg2: any): void;
export function __wbg_setmode_5dc300b865044b65(arg0: any, arg1: any): void;
export function __wbg_setsignal_75b21ef3a81de905(arg0: any, arg1: any): void;
export function __wbg_signal_aaf9ad74119f20a4(arg0: any): any;
export function __wbg_stack_0ed75d68575b0f3c(arg0: any, arg1: any): void;
export function __wbg_static_accessor_GLOBAL_88a902d13a557d07(): any;
export function __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0(): any;
export function __wbg_static_accessor_SELF_37c5d418e4bf5819(): any;
export function __wbg_static_accessor_WINDOW_5de37043a91a9c40(): any;
export function __wbg_status_f6360336ca686bf0(arg0: any): any;
export function __wbg_stringify_f7ed6987935b4a24(...args: any[]): any;
export function __wbg_subarray_aa9065fa9dc5df96(arg0: any, arg1: any, arg2: any): any;
export function __wbg_then_44b73946d2fb3e7d(arg0: any, arg1: any): any;
export function __wbg_then_48b406749878a531(arg0: any, arg1: any, arg2: any): any;
export function __wbg_unlinkSync_8eceac60ddffd654(...args: any[]): any;
export function __wbg_url_ae10c34ca209681d(arg0: any, arg1: any): void;
export function __wbg_value_cd1ffa7b1ab794f1(arg0: any): any;
export function __wbg_versions_c71aa1626a93e0a1(arg0: any): any;
export function __wbg_wasmFetch_c90bbe5639d90d82(...args: any[]): any;
export function __wbg_writeFileSync_39d21d2df2b3af1b(...args: any[]): any;
export function __wbindgen_bigint_from_u64(arg0: any): bigint;
export function __wbindgen_boolean_get(arg0: any): 1 | 0 | 2;
export function __wbindgen_cb_drop(arg0: any): boolean;
export function __wbindgen_closure_wrapper6543(arg0: any, arg1: any, arg2: any): {
    (...args: any[]): any;
    original: {
        a: any;
        b: any;
        cnt: number;
        dtor: any;
    };
};
export function __wbindgen_closure_wrapper7899(arg0: any, arg1: any, arg2: any): {
    (...args: any[]): any;
    original: {
        a: any;
        b: any;
        cnt: number;
        dtor: any;
    };
};
export function __wbindgen_debug_string(arg0: any, arg1: any): void;
export function __wbindgen_error_new(arg0: any, arg1: any): Error;
export function __wbindgen_init_externref_table(): void;
export function __wbindgen_is_function(arg0: any): boolean;
export function __wbindgen_is_object(arg0: any): boolean;
export function __wbindgen_is_string(arg0: any): arg0 is string;
export function __wbindgen_is_undefined(arg0: any): boolean;
export function __wbindgen_memory(): any;
export function __wbindgen_string_get(arg0: any, arg1: any): void;
export function __wbindgen_string_new(arg0: any, arg1: any): string;
export function __wbindgen_throw(arg0: any, arg1: any): never;
export function __wbindgen_uint8_array_new(arg0: any, arg1: any): any;
export class Address {
    /**
     * Address helpers for wasm_bindgen
     * @param {string} secret
     */
    constructor(secret: string);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @returns {string}
     */
    implicit(): string;
    /**
     * @returns {string}
     */
    public(): string;
    /**
     * @returns {string}
     */
    hash(): string;
}
export class BatchTxResult {
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
}
export class DatedViewingKey {
    static __unwrap(jsValue: any): number;
    /**
     * @param {string} key
     * @param {string} birthday
     */
    constructor(key: string, birthday: string);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
}
/**
 * Wrap ExtendedSpendingKey
 */
export class ExtendedSpendingKey {
    static __wrap(ptr: any): any;
    /**
     * @param {string} xsk
     * @returns {ExtendedSpendingKey}
     */
    static from_string(xsk: string): ExtendedSpendingKey;
    /**
     * Instantiate ExtendedSpendingKey from serialized vector
     * @param {Uint8Array} key
     */
    constructor(key: Uint8Array);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @returns {ExtendedViewingKey}
     */
    to_viewing_key(): ExtendedViewingKey;
    /**
     * @returns {any}
     */
    to_default_address(): any;
    /**
     * @returns {ProofGenerationKey}
     */
    to_proof_generation_key(): ProofGenerationKey;
    /**
     * @returns {PseudoExtendedKey}
     */
    to_pseudo_extended_key(): PseudoExtendedKey;
    /**
     * Return ExtendedSpendingKey as Bech32-encoded String
     * @returns {string}
     */
    encode(): string;
}
/**
 * Wrap ExtendedViewingKey
 */
export class ExtendedViewingKey {
    static __wrap(ptr: any): any;
    /**
     * Instantiate ExtendedViewingKey from serialized vector
     * @param {Uint8Array} key
     */
    constructor(key: Uint8Array);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * Return ExtendedViewingKey as Bech32-encoded String
     * @returns {string}
     */
    encode(): string;
    /**
     * @returns {any}
     */
    default_payment_address(): any;
}
/**
 * Wrap PaymentAddress
 */
export class PaymentAddress {
    /**
     * Instantiate PaymentAddress from serialized vector
     * @param {Uint8Array} address
     */
    constructor(address: Uint8Array);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * Retrieve PaymentAddress hash
     * @returns {string}
     */
    hash(): string;
    /**
     * Return PaymentAddress as Bech32-encoded String
     * @returns {string}
     */
    encode(): string;
}
export class ProgressBarNames {
    /**
     * @returns {string}
     */
    static get Scanned(): string;
    /**
     * @returns {string}
     */
    static get Fetched(): string;
    /**
     * @returns {string}
     */
    static get Applied(): string;
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
}
export class ProgressFinish {
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
}
export class ProgressIncrement {
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
}
export class ProgressStart {
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
}
export class ProofGenerationKey {
    static __wrap(ptr: any): any;
    /**
     * @param {Uint8Array} ak
     * @param {Uint8Array} nsk
     * @returns {ProofGenerationKey}
     */
    static from_bytes(ak: Uint8Array, nsk: Uint8Array): ProofGenerationKey;
    /**
     * @param {string} encoded
     * @returns {ProofGenerationKey}
     */
    static decode(encoded: string): ProofGenerationKey;
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
    /**
     * @returns {string}
     */
    encode(): string;
}
/**
 * Wrap ExtendedSpendingKey
 */
export class PseudoExtendedKey {
    static __wrap(ptr: any): any;
    /**
     * @param {string} encoded
     * @returns {PseudoExtendedKey}
     */
    static decode(encoded: string): PseudoExtendedKey;
    /**
     * @param {ExtendedViewingKey} xvk
     * @param {ProofGenerationKey} pgk
     * @returns {PseudoExtendedKey}
     */
    static from(xvk: ExtendedViewingKey, pgk: ProofGenerationKey): PseudoExtendedKey;
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
    /**
     * @returns {string}
     */
    encode(): string;
}
/**
 * Represents an API for querying the ledger
 */
export class Query {
    /**
     * @returns {string[]}
     */
    static code_paths(): string[];
    /**
     * @param {string} url
     * @param {string | null} [masp_url]
     */
    constructor(url: string, masp_url?: string | null | undefined);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * Gets current epoch
     *
     * # Errors
     *
     * Returns an error if the RPC call fails
     * @returns {Promise<bigint>}
     */
    query_epoch(): Promise<bigint>;
    /**
     * Gets all active validator addresses
     *
     * # Errors
     *
     * Returns an error if the RPC call fails
     * @returns {Promise<any>}
     */
    query_all_validator_addresses(): Promise<any>;
    /**
     * Gets total bonds by validator address
     *
     * # Errors
     *
     * Returns an error if the RPC call fails
     * @param {string} address
     * @returns {Promise<any>}
     */
    query_total_bonds(address: string): Promise<any>;
    /**
     * Gets all delegations for every provided address.
     * Returns a tuple of:
     * (owner_address, validator_address, total_bonds, total_unbonds, withdrawable)
     *
     * # Arguments
     *
     * * `owner_addresses` - Account address in form of bech32, base64 encoded string
     *
     * # Errors
     *
     * Panics if address can't be deserialized
     * @param {any[]} owner_addresses
     * @returns {Promise<any>}
     */
    query_my_validators(owner_addresses: any[]): Promise<any>;
    /**
     * @param {any[]} owner_addresses
     * @returns {Promise<any>}
     */
    query_staking_positions(owner_addresses: any[]): Promise<any>;
    /**
     * @param {DatedViewingKey[]} vks
     * @param {string} chain_id
     * @returns {Promise<void>}
     */
    shielded_sync(vks: DatedViewingKey[], chain_id: string): Promise<void>;
    /**
     * @param {string} owner
     * @param {any[]} tokens
     * @param {string} chain_id
     * @returns {Promise<any>}
     */
    query_balance(owner: string, tokens: any[], chain_id: string): Promise<any>;
    /**
     * @param {string} address
     * @returns {Promise<any>}
     */
    query_public_key(address: string): Promise<any>;
    /**
     * @param {any[]} owner_addresses
     * @returns {Promise<any>}
     */
    query_signed_bridge_pool(owner_addresses: any[]): Promise<any>;
    /**
     * @param {bigint} epoch
     * @returns {Promise<any>}
     */
    query_total_staked_tokens(epoch: bigint): Promise<any>;
    /**
     * @returns {Promise<any>}
     */
    query_proposal_counter(): Promise<any>;
    /**
     * @param {bigint} id
     * @returns {Promise<Uint8Array>}
     */
    query_proposal_by_id(id: bigint): Promise<Uint8Array>;
    /**
     * @param {bigint} proposal_id
     * @param {bigint} epoch
     * @returns {Promise<any>}
     */
    query_proposal_votes(proposal_id: bigint, epoch: bigint): Promise<any>;
    /**
     * @param {bigint} proposal_id
     * @param {bigint} epoch
     * @returns {Promise<any>}
     */
    query_proposal_result(proposal_id: bigint, epoch: bigint): Promise<any>;
    /**
     * @param {bigint} proposal_id
     * @returns {Promise<Uint8Array>}
     */
    query_proposal_code(proposal_id: bigint): Promise<Uint8Array>;
    /**
     * Returns a list of all delegations for given addresses and epoch
     *
     * # Arguments
     *
     * * `addresses` - delegators addresses
     * * `epoch` - epoch in which we want to query delegations
     * @param {any[]} addresses
     * @param {bigint | null} [epoch]
     * @returns {Promise<any>}
     */
    get_total_delegations(addresses: any[], epoch?: bigint | null | undefined): Promise<any>;
    /**
     * @returns {Promise<any>}
     */
    masp_reward_tokens(): Promise<any>;
    /**
     * Returns list of delegators that already voted on a proposal
     *
     * # Arguments
     *
     * * `proposal_id` - id of proposal to get delegators votes from
     * @param {bigint} proposal_id
     * @returns {Promise<any>}
     */
    delegators_votes(proposal_id: bigint): Promise<any>;
    /**
     * @returns {Promise<any>}
     */
    query_gas_costs(): Promise<any>;
    /**
     * @returns {Promise<any>}
     */
    query_native_token(): Promise<any>;
    /**
     * @returns {Promise<any>}
     */
    query_wasm_hashes(): Promise<any>;
    /**
     * @param {string} tx_code_path
     * @returns {Promise<string | undefined>}
     */
    query_wasm_hash(tx_code_path: string): Promise<string | undefined>;
}
/**
 * Represents the Sdk public API.
 */
export class Sdk {
    /**
     * @param {string} chain_id
     * @returns {Promise<void>}
     */
    static clear_shielded_context(chain_id: string): Promise<void>;
    /**
     * @returns {Promise<any>}
     */
    static has_masp_params(): Promise<any>;
    /**
     * @param {string | null} [url]
     * @returns {Promise<void>}
     */
    static fetch_and_store_masp_params(url?: string | null | undefined): Promise<void>;
    /**
     * Build a batch Tx from built transactions and return the bytes
     * @param {any} txs
     * @returns {any}
     */
    static build_batch(txs: any): any;
    /**
     * @param {string} url
     * @param {string} native_token
     * @param {string} path_or_db_name
     */
    constructor(url: string, native_token: string, path_or_db_name: string);
    __destroy_into_raw(): number;
    __wbg_ptr: number;
    free(): void;
    /**
     * @param {any} context_dir
     * @param {string} chain_id
     * @returns {Promise<void>}
     */
    load_masp_params(context_dir: any, chain_id: string): Promise<void>;
    /**
     * @param {string} xsk
     * @param {string} alias
     * @returns {Promise<void>}
     */
    add_spending_key(xsk: string, alias: string): Promise<void>;
    /**
     * @param {string} xvk
     * @param {string} alias
     * @returns {Promise<void>}
     */
    add_viewing_key(xvk: string, alias: string): Promise<void>;
    /**
     * @param {string} pa
     * @param {string} alias
     * @returns {Promise<void>}
     */
    add_payment_address(pa: string, alias: string): Promise<void>;
    /**
     * @param {string} xvk
     * @param {string} alias
     * @returns {Promise<void>}
     */
    add_default_payment_address(xvk: string, alias: string): Promise<void>;
    /**
     * @param {string} secret_key
     * @param {string} alias
     * @param {string | null} [password]
     * @returns {Promise<void>}
     */
    add_keypair(secret_key: string, alias: string, password?: string | null | undefined): Promise<void>;
    /**
     * @returns {Promise<void>}
     */
    save_wallet(): Promise<void>;
    /**
     * @returns {Promise<void>}
     */
    load_wallet(): Promise<void>;
    /**
     * @param {string[]} xsks
     * @param {Uint8Array} tx
     * @returns {Promise<any>}
     */
    sign_masp(xsks: string[], tx: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} tx
     * @param {Uint8Array[]} signing_data
     * @param {Uint8Array} signature
     * @returns {any}
     */
    sign_masp_ledger(tx: Uint8Array, signing_data: Uint8Array[], signature: Uint8Array): any;
    /**
     * @param {Uint8Array} tx
     * @param {string[]} private_keys
     * @param {string | null} [chain_id]
     * @returns {Promise<any>}
     */
    sign_tx(tx: Uint8Array, private_keys: string[], chain_id?: string | null | undefined): Promise<any>;
    /**
     * @param {Uint8Array} tx_bytes
     * @param {bigint} deadline
     * @returns {Promise<any>}
     */
    broadcast_tx(tx_bytes: Uint8Array, deadline: bigint): Promise<any>;
    /**
     * @param {Uint8Array} tx_bytes
     * @param {Uint8Array} sig_msg_bytes
     * @returns {any}
     */
    append_signature(tx_bytes: Uint8Array, sig_msg_bytes: Uint8Array): any;
    /**
     * @param {Uint8Array} transfer_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_transparent_transfer(transfer_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} shielded_transfer_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_shielded_transfer(shielded_transfer_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} unshielding_transfer_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_unshielding_transfer(unshielding_transfer_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} shielding_transfer_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_shielding_transfer(shielding_transfer_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} ibc_transfer_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_ibc_transfer(ibc_transfer_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} eth_bridge_transfer_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_eth_bridge_transfer(eth_bridge_transfer_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} vote_proposal_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_vote_proposal(vote_proposal_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} claim_rewards_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_claim_rewards(claim_rewards_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} bond_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_bond(bond_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} unbond_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_unbond(unbond_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} withdraw_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_withdraw(withdraw_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} redelegate_msg
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_redelegate(redelegate_msg: Uint8Array, wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {Uint8Array} wrapper_tx_msg
     * @returns {Promise<any>}
     */
    build_reveal_pk(wrapper_tx_msg: Uint8Array): Promise<any>;
    /**
     * @param {string} signing_key
     * @param {string} data
     * @returns {any}
     */
    sign_arbitrary(signing_key: string, data: string): any;
    /**
     * @param {string} public_key
     * @param {string} signed_hash
     * @param {string} signature
     */
    verify_arbitrary(public_key: string, signed_hash: string, signature: string): void;
    /**
     * @param {string} target
     * @param {string} token
     * @param {string} amount
     * @param {string} channel_id
     * @returns {Promise<any>}
     */
    generate_ibc_shielding_memo(target: string, token: string, amount: string, channel_id: string): Promise<any>;
    /**
     * @param {string} owner
     * @param {string} chain_id
     * @returns {Promise<any>}
     */
    shielded_rewards(owner: string, chain_id: string): Promise<any>;
    /**
     * @param {string} owner
     * @param {string} token
     * @param {string} chain_id
     * @returns {Promise<any>}
     */
    shielded_rewards_per_token(owner: string, token: string, chain_id: string): Promise<any>;
    /**
     * @param {string} chain_id
     * @param {string} token
     * @param {string} amount
     * @returns {Promise<any>}
     */
    simulate_shielded_rewards(chain_id: string, token: string, amount: string): Promise<any>;
    /**
     * @returns {string}
     */
    masp_address(): string;
}
export class SdkEvents {
    /**
     * @returns {string}
     */
    static get ProgressBarStarted(): string;
    /**
     * @returns {string}
     */
    static get ProgressBarIncremented(): string;
    /**
     * @returns {string}
     */
    static get ProgressBarFinished(): string;
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
}
/**
 * Serializable response for process_tx calls
 */
export class TxResponse {
    __destroy_into_raw(): number | undefined;
    __wbg_ptr: number | undefined;
    free(): void;
}
declare let wasm: any;
export { wasm as __wasm };
