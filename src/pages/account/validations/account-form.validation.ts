import { FormValidationResult } from "@/common/validations/validation.model";
import { AccountVm, AccountError } from "../account.vm";
import {
  validateNameField,
  validateSelectField,
} from "./account-field.validations";

export const validateForm = (
  account: AccountVm
): FormValidationResult<AccountError> => {
  const fieldValidationResult = [
    validateSelectField(account.type),
    validateNameField(account.name),
  ];

  return {
    succeeded: fieldValidationResult.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResult[0].errorMessage ?? "",
      name: fieldValidationResult[1].errorMessage ?? "",
    },
  };
};
