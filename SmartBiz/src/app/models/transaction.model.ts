export interface Transaction {
  date: string;
  customer: string;
  type: 'Sale' | 'Payment';
  amount: number;
  notes: string;
}
