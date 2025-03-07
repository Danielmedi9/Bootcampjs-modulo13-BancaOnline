import { FormValidationResult } from "@/common/validations/validation.model";
import { CredentialsformErrors } from "./login.vm";
import {
  validatePasswordField,
  validateUserField,
} from "./login-field.validation";

export const validateForm = (
  credentials: CredentialsformErrors
): FormValidationResult<CredentialsformErrors> => {
  const fieldValidationResults = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password),
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      user: fieldValidationResults[0].errorMessage ?? "",
      password: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
