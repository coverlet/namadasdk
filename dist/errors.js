var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ResultCodes } from "./tx";
/**
 * Custom error for Broadcast Tx
 */
var BroadcastTxError = /** @class */ (function (_super) {
    __extends(BroadcastTxError, _super);
    /**
     * @param message - string
     * @returns BroadcastTxError
     */
    function BroadcastTxError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "BroadcastTxError";
        return _this;
    }
    /**
     * @returns string
     */
    BroadcastTxError.prototype.toString = function () {
        try {
            var code = this.toProps().code;
            var message = ResultCodes[code];
            return message;
            // eslint-disable-next-line
        }
        catch (_) {
            // If not able to be parsed as JSON, return
            // original error message
            return this.message;
        }
    };
    /**
     * @returns TxResponseProps
     */
    BroadcastTxError.prototype.toProps = function () {
        try {
            var props = JSON.parse(this.message);
            return props;
        }
        catch (e) {
            throw new Error("".concat(e));
        }
    };
    return BroadcastTxError;
}(Error));
export { BroadcastTxError };
