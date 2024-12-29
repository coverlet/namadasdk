import { TxResponseProps } from "../types";
import { BatchTxResultMsgValue } from "./batchTxResult";
export declare class TxResponseMsgValue {
    code: string;
    commitments: BatchTxResultMsgValue[];
    gasUsed: string;
    hash: string;
    height: string;
    info: string;
    log: string;
    constructor(data: TxResponseProps);
}
