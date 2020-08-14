export type fAddTransaction = (sign: boolean) => void;
export type fChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type fClickEvent = (e: React.MouseEvent) => void;


export interface iTransaction  {
  id: string;
  description: string;
  amount: number;
  sign: boolean;
}

export interface iTransactionProps {
  transaction: iTransaction;
  delTransaction: (keystring)=>void;
}

export interface iTransactions  {
  transactions: iTransaction[];
  delTransaction: (keystring)=>void;
  }


export interface iOperation {
  addTransaction: fAddTransaction;
  addDescription: fChangeEvent;
  addAmount: fChangeEvent;
  description: string;
  amount: number;
} 

export interface iTotal {
  inc: number;
  exp: number;
} 
