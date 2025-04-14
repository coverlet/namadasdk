var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-unused-vars */
import { field, option, vec } from "@dao-xyz/borsh";
import { BigNumberSerializer } from "./utils";
/**
 * Transparent Transfer schemas
 */
var TransparentTransferDataMsgValue = /** @class */ (function () {
    function TransparentTransferDataMsgValue(data) {
        Object.assign(this, data);
    }
    __decorate([
        field({ type: "string" })
    ], TransparentTransferDataMsgValue.prototype, "source", void 0);
    __decorate([
        field({ type: "string" })
    ], TransparentTransferDataMsgValue.prototype, "target", void 0);
    __decorate([
        field({ type: "string" })
    ], TransparentTransferDataMsgValue.prototype, "token", void 0);
    __decorate([
        field(BigNumberSerializer)
    ], TransparentTransferDataMsgValue.prototype, "amount", void 0);
    return TransparentTransferDataMsgValue;
}());
export { TransparentTransferDataMsgValue };
var TransparentTransferMsgValue = /** @class */ (function () {
    function TransparentTransferMsgValue(_a) {
        var data = _a.data;
        Object.assign(this, {
            data: data.map(function (transferProps) { return new TransparentTransferDataMsgValue(transferProps); }),
        });
    }
    __decorate([
        field({ type: vec(TransparentTransferDataMsgValue) })
    ], TransparentTransferMsgValue.prototype, "data", void 0);
    return TransparentTransferMsgValue;
}());
export { TransparentTransferMsgValue };
var BparamsSpendMsgValue = /** @class */ (function () {
    function BparamsSpendMsgValue(data) {
        Object.assign(this, data);
    }
    __decorate([
        field({ type: vec("u8") })
    ], BparamsSpendMsgValue.prototype, "rcv", void 0);
    __decorate([
        field({ type: vec("u8") })
    ], BparamsSpendMsgValue.prototype, "alpha", void 0);
    return BparamsSpendMsgValue;
}());
export { BparamsSpendMsgValue };
var BparamsOutputMsgValue = /** @class */ (function () {
    function BparamsOutputMsgValue(data) {
        Object.assign(this, data);
    }
    __decorate([
        field({ type: vec("u8") })
    ], BparamsOutputMsgValue.prototype, "rcv", void 0);
    __decorate([
        field({ type: vec("u8") })
    ], BparamsOutputMsgValue.prototype, "rcm", void 0);
    return BparamsOutputMsgValue;
}());
export { BparamsOutputMsgValue };
var BparamsConvertMsgValue = /** @class */ (function () {
    function BparamsConvertMsgValue(data) {
        Object.assign(this, data);
    }
    __decorate([
        field({ type: vec("u8") })
    ], BparamsConvertMsgValue.prototype, "rcv", void 0);
    return BparamsConvertMsgValue;
}());
export { BparamsConvertMsgValue };
var BparamsMsgValue = /** @class */ (function () {
    function BparamsMsgValue(data) {
        Object.assign(this, data);
    }
    __decorate([
        field({ type: BparamsSpendMsgValue })
    ], BparamsMsgValue.prototype, "spend", void 0);
    __decorate([
        field({ type: BparamsOutputMsgValue })
    ], BparamsMsgValue.prototype, "output", void 0);
    __decorate([
        field({ type: BparamsConvertMsgValue })
    ], BparamsMsgValue.prototype, "convert", void 0);
    return BparamsMsgValue;
}());
export { BparamsMsgValue };
/**
 * Shielded Transfer schemas
 */
var ShieldedTransferDataMsgValue = /** @class */ (function () {
    function ShieldedTransferDataMsgValue(data) {
        Object.assign(this, data);
    }
    __decorate([
        field({ type: "string" })
    ], ShieldedTransferDataMsgValue.prototype, "source", void 0);
    __decorate([
        field({ type: "string" })
    ], ShieldedTransferDataMsgValue.prototype, "target", void 0);
    __decorate([
        field({ type: "string" })
    ], ShieldedTransferDataMsgValue.prototype, "token", void 0);
    __decorate([
        field(BigNumberSerializer)
    ], ShieldedTransferDataMsgValue.prototype, "amount", void 0);
    return ShieldedTransferDataMsgValue;
}());
export { ShieldedTransferDataMsgValue };
var ShieldedTransferMsgValue = /** @class */ (function () {
    function ShieldedTransferMsgValue(_a) {
        var data = _a.data, gasSpendingKey = _a.gasSpendingKey, bparams = _a.bparams;
        Object.assign(this, {
            data: data.map(function (shieldedTransferDataProps) {
                return new ShieldedTransferDataMsgValue(shieldedTransferDataProps);
            }),
            gasSpendingKey: gasSpendingKey,
            bparams: bparams === null || bparams === void 0 ? void 0 : bparams.map(function (bparam) {
                return new BparamsMsgValue({
                    spend: new BparamsSpendMsgValue(bparam.spend),
                    output: new BparamsOutputMsgValue(bparam.output),
                    convert: new BparamsConvertMsgValue(bparam.convert),
                });
            }),
        });
    }
    __decorate([
        field({ type: vec(ShieldedTransferDataMsgValue) })
    ], ShieldedTransferMsgValue.prototype, "data", void 0);
    __decorate([
        field({ type: option("string") })
    ], ShieldedTransferMsgValue.prototype, "gasSpendingKey", void 0);
    __decorate([
        field({ type: option(vec(BparamsMsgValue)) })
    ], ShieldedTransferMsgValue.prototype, "bparams", void 0);
    return ShieldedTransferMsgValue;
}());
export { ShieldedTransferMsgValue };
/**
 * Shielding Transfer schemas
 */
var ShieldingTransferDataMsgValue = /** @class */ (function () {
    function ShieldingTransferDataMsgValue(data) {
        Object.assign(this, data);
    }
    __decorate([
        field({ type: "string" })
    ], ShieldingTransferDataMsgValue.prototype, "source", void 0);
    __decorate([
        field({ type: "string" })
    ], ShieldingTransferDataMsgValue.prototype, "token", void 0);
    __decorate([
        field(BigNumberSerializer)
    ], ShieldingTransferDataMsgValue.prototype, "amount", void 0);
    return ShieldingTransferDataMsgValue;
}());
export { ShieldingTransferDataMsgValue };
var ShieldingTransferMsgValue = /** @class */ (function () {
    function ShieldingTransferMsgValue(_a) {
        var data = _a.data, target = _a.target;
        Object.assign(this, {
            target: target,
            data: data.map(function (shieldingTransferDataProps) {
                return new ShieldingTransferDataMsgValue(shieldingTransferDataProps);
            }),
        });
    }
    __decorate([
        field({ type: "string" })
    ], ShieldingTransferMsgValue.prototype, "target", void 0);
    __decorate([
        field({ type: vec(ShieldingTransferDataMsgValue) })
    ], ShieldingTransferMsgValue.prototype, "data", void 0);
    __decorate([
        field({ type: option(vec(BparamsMsgValue)) })
    ], ShieldingTransferMsgValue.prototype, "bparams", void 0);
    return ShieldingTransferMsgValue;
}());
export { ShieldingTransferMsgValue };
/**
 * Unshielding Transfer schemas
 */
var UnshieldingTransferDataMsgValue = /** @class */ (function () {
    function UnshieldingTransferDataMsgValue(data) {
        Object.assign(this, data);
    }
    __decorate([
        field({ type: "string" })
    ], UnshieldingTransferDataMsgValue.prototype, "target", void 0);
    __decorate([
        field({ type: "string" })
    ], UnshieldingTransferDataMsgValue.prototype, "token", void 0);
    __decorate([
        field(BigNumberSerializer)
    ], UnshieldingTransferDataMsgValue.prototype, "amount", void 0);
    return UnshieldingTransferDataMsgValue;
}());
export { UnshieldingTransferDataMsgValue };
var UnshieldingTransferMsgValue = /** @class */ (function () {
    function UnshieldingTransferMsgValue(_a) {
        var source = _a.source, data = _a.data, gasSpendingKey = _a.gasSpendingKey, bparams = _a.bparams;
        Object.assign(this, {
            source: source,
            data: data.map(function (unshieldingTransferDataProps) {
                return new UnshieldingTransferDataMsgValue(unshieldingTransferDataProps);
            }),
            gasSpendingKey: gasSpendingKey,
            bparams: bparams === null || bparams === void 0 ? void 0 : bparams.map(function (bparam) {
                return new BparamsMsgValue({
                    spend: new BparamsSpendMsgValue(bparam.spend),
                    output: new BparamsOutputMsgValue(bparam.output),
                    convert: new BparamsConvertMsgValue(bparam.convert),
                });
            }),
        });
    }
    __decorate([
        field({ type: "string" })
    ], UnshieldingTransferMsgValue.prototype, "source", void 0);
    __decorate([
        field({ type: vec(UnshieldingTransferDataMsgValue) })
    ], UnshieldingTransferMsgValue.prototype, "data", void 0);
    __decorate([
        field({ type: option("string") })
    ], UnshieldingTransferMsgValue.prototype, "gasSpendingKey", void 0);
    __decorate([
        field({ type: option(vec(BparamsMsgValue)) })
    ], UnshieldingTransferMsgValue.prototype, "bparams", void 0);
    return UnshieldingTransferMsgValue;
}());
export { UnshieldingTransferMsgValue };
/**
 * General Transfer schema used for displaying details
 */
var TransferDataMsgValue = /** @class */ (function () {
    function TransferDataMsgValue() {
    }
    __decorate([
        field({ type: "string" })
    ], TransferDataMsgValue.prototype, "owner", void 0);
    __decorate([
        field({ type: "string" })
    ], TransferDataMsgValue.prototype, "token", void 0);
    __decorate([
        field(BigNumberSerializer)
    ], TransferDataMsgValue.prototype, "amount", void 0);
    return TransferDataMsgValue;
}());
export { TransferDataMsgValue };
/**
 * Used only for serializing transfers during build
 */
var TransferMsgValue = /** @class */ (function () {
    function TransferMsgValue() {
    }
    __decorate([
        field({ type: vec(TransferDataMsgValue) })
    ], TransferMsgValue.prototype, "sources", void 0);
    __decorate([
        field({ type: vec(TransferDataMsgValue) })
    ], TransferMsgValue.prototype, "targets", void 0);
    __decorate([
        field({ type: option(vec("u8")) })
    ], TransferMsgValue.prototype, "shieldedSectionHash", void 0);
    return TransferMsgValue;
}());
export { TransferMsgValue };
/**
 * When deserializing for Transfer Details, return version with
 * shieldedSectionHash encoded as hex instead of Uint8Array
 */
var TransferDetailsMsgValue = /** @class */ (function () {
    function TransferDetailsMsgValue() {
    }
    __decorate([
        field({ type: vec(TransferDataMsgValue) })
    ], TransferDetailsMsgValue.prototype, "sources", void 0);
    __decorate([
        field({ type: vec(TransferDataMsgValue) })
    ], TransferDetailsMsgValue.prototype, "targets", void 0);
    __decorate([
        field({ type: option("string") })
    ], TransferDetailsMsgValue.prototype, "shieldedSectionHash", void 0);
    return TransferDetailsMsgValue;
}());
export { TransferDetailsMsgValue };
