import React from "react";
import classes from "./movement-list-table.component.module.css";
import { MovementVm } from "../movement-list.vm";
import { MovementListItemComponent } from "./movement-list-item.component";

interface Props {
  movementList: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;
  console.log(movementList);

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCIÓN</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>

        {movementList.map((movement) => (
          <MovementListItemComponent
            key={movement.accountId}
            movementItem={movement}
          />
        ))}
      </div>
    </>
  );
};
