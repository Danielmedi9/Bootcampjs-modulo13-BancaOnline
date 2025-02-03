export const routesPrefixes = {
  AccountList: "/account-list",
  transfer: "/transfer",
  movements: "/movements",
  newAccount: "/account",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.AccountList,
  editAccount: routesPrefixes.newAccount,
  movements: `${routesPrefixes.movements}/:id`,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
