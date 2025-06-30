import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: Transaction[] = [
    {
      date: '2025-06-20',
      customer: 'Rajesh Kumar',
      type: 'Sale',
      amount: 1550,
      notes: '2x Oil, 1x Rice Bag',
    },
    {
      date: '2025-06-21',
      customer: 'Rajesh Kumar',
      type: 'Payment',
      amount: 1000,
      notes: 'Paid ₹1000 in cash',
    },
  ];
  getTransactions(): Transaction[] {
    return this.transactions;
  }
}
