export const routesPrefixes = {
  AccountList: "/account-list",
  transfer: "/transfer",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.AccountList,
  editAccount: "/edit-account/:id",
  movements: "/movements/:id",
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}:id`,
};
