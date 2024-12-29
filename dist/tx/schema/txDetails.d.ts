import { WrapperTxMsgValue } from "./wrapperTx";
export declare class CommitmentMsgValue {
    txType: number;
    hash: string;
    txCodeId: string;
    data: Uint8Array;
    memo?: string;
}
export declare class TxDetailsMsgValue {
    wrapperTx: WrapperTxMsgValue;
    commitments: CommitmentMsgValue[];
}
