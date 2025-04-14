export type Bip44Path = {
    account: number;
    change: number;
    index: number;
};
export type Zip32Path = {
    account: number;
    index?: number;
};
export type Path = {
    account: number;
    change?: number;
    index?: number;
};
export declare enum AccountType {
    Mnemonic = "mnemonic",
    PrivateKey = "private-key",
    ShieldedKeys = "shielded-keys",
    Ledger = "ledger"
}
export type DerivedAccount = {
    id: string;
    address: string;
    owner?: string;
    publicKey?: string;
    alias: string;
    parentId?: string;
    path: Path;
    type: AccountType;
    modifiedZip32Path?: string;
    pseudoExtendedKey?: string;
    source?: "imported" | "generated";
    timestamp?: number;
    diversifierIndex?: number;
};
export type Account = Pick<DerivedAccount, "address" | "alias" | "type" | "publicKey" | "owner" | "pseudoExtendedKey" | "source" | "timestamp" | "diversifierIndex"> & {
    viewingKey?: string;
};
export type NamadaKeychainAccount = Account & {
    id: string;
    parentId?: string;
};
/**
 * ViewingKey with optional birthday
 */
export type DatedViewingKey = {
    key: string;
    birthday: number;
};
