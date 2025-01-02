export const routesPrefixes = {
  AccountList: "/account-list",
  transfer: "/transfer",
  movements: "/movements",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.AccountList,
  editAccount: "/edit-account/:id",
  movements: `${routesPrefixes.movements}/:id`,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
