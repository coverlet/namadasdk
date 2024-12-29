import BigNumber from "bignumber.js";
import { WrapperTxProps } from "../types";
export declare class WrapperTxMsgValue {
    token: string;
    feeAmount: BigNumber;
    gasLimit: BigNumber;
    chainId: string;
    publicKey?: string;
    memo?: string;
    force?: boolean;
    constructor(data: WrapperTxProps);
}
