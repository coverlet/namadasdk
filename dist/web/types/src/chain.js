export var BridgeType;
(function (BridgeType) {
    BridgeType["IBC"] = "ibc";
    BridgeType["Ethereum"] = "ethereum-bridge";
})(BridgeType || (BridgeType = {}));
// Define constant with extension properties
export const Extensions = {
    namada: {
        alias: "Namada",
        id: "namada",
        // TODO: Update to most recent release
        url: "https://namada.me",
    },
    keplr: {
        alias: "Keplr",
        id: "keplr",
        url: "https://www.keplr.app/",
    },
    metamask: {
        alias: "Metamask",
        id: "metamask",
        url: "https://metamask.io/",
    },
};
/**
 * Chain name lookup for mainnet and known long-running testnets
 */
export const NamadaChains = new Map([
    ["namada.5f5de2dd1b88cba30586420", "Namada Mainnet"],
    ["housefire-alpaca.cc0d3e0c033be", "Housefire Testnet"],
    ["campfire-square.ff09671d333707", "Campfire Testnet"],
]);
//# sourceMappingURL=chain.js.map