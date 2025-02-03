import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.page.module.css";
import { AccountFormComponent } from "./components";
import { AccountVm } from "./account.vm";
import { saveAccount } from "./api";

export const AccountPage: React.FC = () => {
  const handleAccount = (accountInfo: AccountVm) => {
    saveAccount(accountInfo).then((result) => {
      if (result) {
        alert("Cuenta realizada con éxito");
      } else {
        alert("Error al realizar la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <AccountFormComponent onAccount={handleAccount} />
      </div>
    </AppLayout>
  );
};
