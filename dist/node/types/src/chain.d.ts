export type Currency = {
    token: string;
    address?: string;
    symbol: string;
    gasPriceStep?: {
        low: number;
        average: number;
        high: number;
    };
};
export declare enum BridgeType {
    IBC = "ibc",
    Ethereum = "ethereum-bridge"
}
export type ExtensionKey = "namada" | "keplr" | "metamask";
export type ChainKey = "namada" | "cosmos" | "ethereum";
export type ExtensionInfo = {
    alias: string;
    id: ExtensionKey;
    url: string;
};
export declare const Extensions: {
    namada: {
        alias: string;
        id: "namada";
        url: string;
    };
    keplr: {
        alias: string;
        id: "keplr";
        url: string;
    };
    metamask: {
        alias: string;
        id: "metamask";
        url: string;
    };
};
export type Chain = {
    id: ChainKey;
    alias: string;
    bech32Prefix: string;
    bip44: {
        coinType: number;
    };
    bridgeType: BridgeType[];
    chainId: string;
    currency: Currency;
    extension: ExtensionInfo;
    rpc: string;
    ibc?: {
        portId: string;
    };
};
