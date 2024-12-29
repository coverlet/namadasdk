"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteProposalMsgValue = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const borsh_1 = require("@dao-xyz/borsh");
class VoteProposalMsgValue {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.VoteProposalMsgValue = VoteProposalMsgValue;
__decorate([
    (0, borsh_1.field)({ type: "string" })
], VoteProposalMsgValue.prototype, "signer", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u64" })
], VoteProposalMsgValue.prototype, "proposalId", void 0);
__decorate([
    (0, borsh_1.field)({ type: "string" })
], VoteProposalMsgValue.prototype, "vote", void 0);
//# sourceMappingURL=voteProposal.js.map