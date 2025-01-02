import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { AccountVm, MovementVm } from "./movement-list.vm";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { getAccountList, getMovements } from "./api";
import { mapAccountListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  React.useEffect(() => {
    if (id) {
      getMovements(id).then((result) => setMovementList(result));
    }
  }, [id]);

  const cuenta = accountList.find((account) => account.id === id);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div>
            <h2>SALDO DISPONIBLE</h2>
            <span>{cuenta?.balance}</span>
          </div>
        </div>
        <div className={classes.headerBot}>
          <h1>Alias: Gastos mes</h1>
          <span>IBAN: {cuenta?.iban}</span>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
