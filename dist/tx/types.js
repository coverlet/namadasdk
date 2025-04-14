var _a;
export var ResultCode;
(function (ResultCode) {
    ResultCode[ResultCode["Ok"] = 0] = "Ok";
    ResultCode[ResultCode["WasmRuntimeError"] = 1] = "WasmRuntimeError";
    ResultCode[ResultCode["InvalidTx"] = 2] = "InvalidTx";
    ResultCode[ResultCode["InvalidSig"] = 3] = "InvalidSig";
    ResultCode[ResultCode["AllocationError"] = 4] = "AllocationError";
    ResultCode[ResultCode["ReplayTx"] = 5] = "ReplayTx";
    ResultCode[ResultCode["InvalidChainId"] = 6] = "InvalidChainId";
    ResultCode[ResultCode["ExpiredTx"] = 7] = "ExpiredTx";
    ResultCode[ResultCode["TxGasLimit"] = 8] = "TxGasLimit";
    ResultCode[ResultCode["FeeError"] = 9] = "FeeError";
    ResultCode[ResultCode["InvalidVoteExtension"] = 10] = "InvalidVoteExtension";
    ResultCode[ResultCode["TooLarge"] = 11] = "TooLarge";
    ResultCode[ResultCode["TxNotAllowlisted"] = 12] = "TxNotAllowlisted";
})(ResultCode || (ResultCode = {}));
export var ResultCodes = (_a = {},
    _a[ResultCode.Ok] = "",
    _a[ResultCode.WasmRuntimeError] = "Error in WASM tx execution",
    _a[ResultCode.InvalidTx] = "Invalid tx",
    _a[ResultCode.InvalidSig] = "Invalid signature",
    _a[ResultCode.AllocationError] = "The block is full",
    _a[ResultCode.ReplayTx] = "Replayed tx",
    _a[ResultCode.InvalidChainId] = "Invalid chain ID",
    _a[ResultCode.ExpiredTx] = "Expired tx",
    _a[ResultCode.TxGasLimit] = "Exceeded gas limit",
    _a[ResultCode.FeeError] = "Error in paying tx fee",
    _a[ResultCode.InvalidVoteExtension] = "Invalid vote extension",
    _a[ResultCode.TooLarge] = "Tx is too large",
    _a[ResultCode.TxNotAllowlisted] = "Tx code is not allowlisted",
    _a);
