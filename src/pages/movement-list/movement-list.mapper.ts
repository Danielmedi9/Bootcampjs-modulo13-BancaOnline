import * as apiModel from "./api";
import * as viewModel from "./movement-list.vm";

export const mapAccountListFromApiToVm = (
  accountList: apiModel.Account[]
): viewModel.AccountVm[] =>
  accountList.map((account) => ({
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
    lastTransaction: new Date(account.lastTransaction),
  }));

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    accountId: movement.accountId,
    amount: movement.amount,
    balance: movement.balance,
    description: movement.description,
    realTransaction: new Date(movement.realTransaction),
    transaction: new Date(movement.transaction),
  }));
