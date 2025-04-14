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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ledger = exports.DEFAULT_LEDGER_ZIP32_PATH = exports.DEFAULT_LEDGER_BIP44_PATH = exports.requestLedgerDevice = exports.ledgerUSBList = exports.initLedgerUSBTransport = exports.LEDGER_MASP_BLACKLISTED = exports.LEDGER_MIN_VERSION_ZIP32 = void 0;
const hw_transport_webusb_1 = __importDefault(require("@ledgerhq/hw-transport-webusb"));
const chains_1 = require("../../chains/src");
const ledger_namada_1 = require("@zondax/ledger-namada");
const semver_1 = __importDefault(require("semver"));
const utils_1 = require("./utils");
const { coinType } = chains_1.chains.namada.bip44;
exports.LEDGER_MIN_VERSION_ZIP32 = "3.0.0";
exports.LEDGER_MASP_BLACKLISTED = "nanoS";
/**
 * Initialize USB transport
 * @async
 * @returns Transport object
 */
const initLedgerUSBTransport = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield hw_transport_webusb_1.default.create();
});
exports.initLedgerUSBTransport = initLedgerUSBTransport;
/**
 * Returns a list of ledger devices
 * @async
 * @returns List of USB devices
 */
const ledgerUSBList = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield hw_transport_webusb_1.default.list();
});
exports.ledgerUSBList = ledgerUSBList;
/**
 * Request ledger device - opens a popup to request the user to connect a ledger device
 * @async
 * @returns Transport object
 */
const requestLedgerDevice = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield hw_transport_webusb_1.default.request();
});
exports.requestLedgerDevice = requestLedgerDevice;
exports.DEFAULT_LEDGER_BIP44_PATH = (0, utils_1.makeBip44Path)(coinType, {
    account: 0,
    change: 0,
    index: 0,
});
exports.DEFAULT_LEDGER_ZIP32_PATH = (0, utils_1.makeSaplingPath)(coinType, {
    account: 0,
});
/**
 * Functionality for interacting with NamadaApp for Ledger Hardware Wallets
 */
class Ledger {
    /**
     * @param namadaApp - Inititalized NamadaApp class from Zondax package
     */
    constructor(namadaApp) {
        this.namadaApp = namadaApp;
    }
    /**
     * Initialize and return Ledger class instance with initialized Transport
     * @async
     * @param [transport] Ledger transport
     * @returns Ledger class instance
     */
    static init(transport) {
        return __awaiter(this, void 0, void 0, function* () {
            const initializedTransport = transport !== null && transport !== void 0 ? transport : (yield (0, exports.initLedgerUSBTransport)());
            try {
                const namadaApp = new ledger_namada_1.NamadaApp(initializedTransport);
                const ledger = new Ledger(namadaApp);
                return ledger;
            }
            catch (e) {
                throw new Error(`${e}`);
            }
        });
    }
    /**
     * Return status and version info of initialized NamadaApp.
     * Throw exception if app is not initialized.
     * @async
     * @returns Version and info of NamadaApp
     */
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            const version = yield this.namadaApp.getVersion();
            const info = yield this.namadaApp.getAppInfo();
            const device = this.namadaApp.transport.deviceModel;
            return {
                version,
                info,
                deviceId: device === null || device === void 0 ? void 0 : device.id,
                deviceName: device === null || device === void 0 ? void 0 : device.productName,
            };
        });
    }
    /**
     * Get address and public key associated with optional path, otherwise, use default path
     * Throw exception if app is not initialized.
     * @async
     * @param [path] Bip44 path for deriving key
     * @returns Address and public key
     */
    getAddressAndPublicKey() {
        return __awaiter(this, arguments, void 0, function* (path = exports.DEFAULT_LEDGER_BIP44_PATH) {
            const { address, pubkey } = yield this.namadaApp.getAddressAndPubKey(path);
            return {
                // Return address as bech32-encoded string
                address: address.toString(),
                // Return public key as bech32-encoded string
                publicKey: pubkey.toString(),
            };
        });
    }
    /**
     * Prompt user to get address and public key associated with optional path, otherwise, use default path.
     * Throw exception if app is not initialized.
     * @async
     * @param [path] Bip44 path for deriving key
     * @returns Address and public key
     */
    showAddressAndPublicKey() {
        return __awaiter(this, arguments, void 0, function* (path = exports.DEFAULT_LEDGER_BIP44_PATH) {
            try {
                const { address, pubkey } = yield this.namadaApp.showAddressAndPubKey(path);
                return {
                    // Return address as bech32-encoded string
                    address: address.toString(),
                    // Return public key as bech32-encoded string
                    publicKey: pubkey.toString(),
                };
            }
            catch (e) {
                throw new Error(`Connect Ledger rejected by user: ${e}`);
            }
        });
    }
    /**
     * Get Bparams for masp transactions
     * @async
     * @returns bparams
     */
    getBparams() {
        return __awaiter(this, void 0, void 0, function* () {
            // We need to clean the randomness buffers before getting randomness
            // to ensure that the randomness is not reused
            yield this.namadaApp.cleanRandomnessBuffers();
            const results = [];
            let tries = 0;
            // This should not happen usually, but in case some of the responses are not valid, we will retry.
            // 15 is a maximum number of spend/output/convert description randomness parameters that can be
            // generated on the hardware wallet. This also means that ledger can sign maximum of 15 spend, output
            // and convert descriptions in one tx.
            while (results.length < 15) {
                tries++;
                if (tries === 20) {
                    throw new Error("Could not get valid Bparams, too many tries");
                }
                const spend_response = yield this.namadaApp.getSpendRandomness();
                const output_response = yield this.namadaApp.getOutputRandomness();
                const convert_response = yield this.namadaApp.getConvertRandomness();
                if (spend_response.returnCode !== ledger_namada_1.LedgerError.NoErrors ||
                    output_response.returnCode !== ledger_namada_1.LedgerError.NoErrors ||
                    convert_response.returnCode !== ledger_namada_1.LedgerError.NoErrors) {
                    continue;
                }
                results.push({
                    spend: {
                        rcv: spend_response.rcv,
                        alpha: spend_response.alpha,
                    },
                    output: {
                        rcv: output_response.rcv,
                        rcm: output_response.rcm,
                    },
                    convert: {
                        rcv: convert_response.rcv,
                    },
                });
            }
            return results;
        });
    }
    /**
     * Prompt user to get viewing key associated with optional path, otherwise, use default path.
     * Throw exception if app is not initialized, zip32 is not supported, or key is not returned.
     * @async
     * @param [path] Zip32 path for deriving key
     * @param [promptUser] boolean to determine whether to display on Ledger device and require approval
     * @returns ShieldedKeys
     */
    getViewingKey() {
        return __awaiter(this, arguments, void 0, function* (path = exports.DEFAULT_LEDGER_ZIP32_PATH, promptUser = true) {
            try {
                yield this.validateZip32Support();
                const { xfvk } = yield this.namadaApp.retrieveKeys(path, ledger_namada_1.NamadaKeys.ViewKey, promptUser);
                if (!xfvk) {
                    throw new Error("Did not receive viewing key!");
                }
                return {
                    xfvk: new Uint8Array(xfvk),
                };
            }
            catch (e) {
                throw new Error(`${e}`);
            }
        });
    }
    /**
     * Prompt user to get proof generation key associated with optional path, otherwise, use default path.
     * Throw exception if app is not initialized, zip32 is not supported, or key is not returned.
     * @async
     * @param [path] Zip32 path for deriving key
     * @param [promptUser] boolean to determine whether to display on Ledger device and require approval
     * @returns ShieldedKeys
     */
    getProofGenerationKey() {
        return __awaiter(this, arguments, void 0, function* (path = exports.DEFAULT_LEDGER_ZIP32_PATH, promptUser = true) {
            try {
                yield this.validateZip32Support();
                const { ak, nsk } = yield this.namadaApp.retrieveKeys(path, ledger_namada_1.NamadaKeys.ProofGenerationKey, promptUser);
                if (!ak || !nsk) {
                    throw new Error("Did not receive proof generation key!");
                }
                return {
                    ak: new Uint8Array(ak),
                    nsk: new Uint8Array(nsk),
                };
            }
            catch (e) {
                throw new Error(`${e}`);
            }
        });
    }
    /**
     * Sign tx bytes with the key associated with the provided (or default) path.
     * Throw exception if app is not initialized.
     * @async
     * @param tx - tx data blob to sign
     * @param [path] Bip44 path for signing account
     * @returns Response signature
     */
    sign(tx_1) {
        return __awaiter(this, arguments, void 0, function* (tx, path = exports.DEFAULT_LEDGER_BIP44_PATH) {
            const buffer = Buffer.from(tx);
            return yield this.namadaApp.sign(path, buffer);
        });
    }
    /**
     * Query status to determine if device has thrown an error.
     * Throw exception if app is not initialized.
     * @async
     * @returns Error message if error is found
     */
    queryErrors() {
        return __awaiter(this, void 0, void 0, function* () {
            const { info: { returnCode, errorMessage }, } = yield this.status();
            if (returnCode !== ledger_namada_1.LedgerError.NoErrors) {
                return errorMessage;
            }
            return "";
        });
    }
    /**
     * Close the initialized transport, which may be needed if Ledger needs to be reinitialized due to error state
     * Throw exception if app is not initialized.
     * @async
     * @returns void
     */
    closeTransport() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.namadaApp.transport.close();
        });
    }
    /**
     * Check if Zip32 is supported by the installed app's version.
     * Throws error if app is not initialized
     * @async
     * @returns boolean
     */
    isZip32Supported() {
        return __awaiter(this, void 0, void 0, function* () {
            const { info: { appVersion }, deviceId, } = yield this.status();
            const isSupportedVersion = !semver_1.default.lt(appVersion, exports.LEDGER_MIN_VERSION_ZIP32);
            const isSupportedDevice = deviceId !== exports.LEDGER_MASP_BLACKLISTED;
            return isSupportedVersion && isSupportedDevice;
        });
    }
    /**
     * Validate the version against the minimum required version and
     * device type for Zip32 functionality.
     * Throw error if it is unsupported or app is not initialized.
     * @async
     * @returns void
     */
    validateZip32Support() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.isZip32Supported())) {
                const { info: { appVersion }, deviceId, deviceName, } = yield this.status();
                if (deviceId === exports.LEDGER_MASP_BLACKLISTED) {
                    throw new Error(`This method is not supported on ${deviceName}!`);
                }
                throw new Error(`This method requires Zip32 and is unsupported in ${appVersion}! ` +
                    `Please update to at least ${exports.LEDGER_MIN_VERSION_ZIP32}!`);
            }
        });
    }
}
exports.Ledger = Ledger;
//# sourceMappingURL=ledger.js.map