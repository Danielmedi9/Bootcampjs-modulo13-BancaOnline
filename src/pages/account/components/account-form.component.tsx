import React from "react";
import classes from "./account-form.component.module.css";
import {
  AccountVm,
  AccountError,
  createEmptyAccountError,
  createEmptyAccountVm,
} from "../account.vm";
import { validateForm } from "../validations/account-form.validation";

interface Props {
  onAccount: (accountInfo: AccountVm) => void;
}

export const AccountFormComponent: React.FC<Props> = (props) => {
  const { onAccount } = props;
  const [createAccount, setCreateAccount] = React.useState<AccountVm>(
    createEmptyAccountVm()
  );
  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyAccountError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(createAccount);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onAccount(createAccount);
    }
  };

  const handleAccountChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCreateAccount({ ...createAccount, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              className={classes.accountSelect}
              name="type"
              onChange={handleAccountChange}
            >
              <option>Seleccionar</option>
              <option value="1">Cuenta Corriente</option>
              <option value="2">Cuenta de Ahorro</option>
              <option value="3">Cuenta de Nómina</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              className={classes.small}
              name="name"
              onChange={handleAccountChange}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button className={classes.button} type="submit">
          GUARDAR
        </button>
      </form>
    </div>
  );
};
