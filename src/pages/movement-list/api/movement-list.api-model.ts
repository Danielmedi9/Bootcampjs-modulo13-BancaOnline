export interface Account {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: string;
}

export interface Movement {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}
