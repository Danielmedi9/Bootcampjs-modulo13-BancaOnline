import Axios from "axios";
import { Account, Movement } from "./movement-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<Account[]> =>
  Axios.get<Account[]>(url).then(({ data }) => data);

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );
