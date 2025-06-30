import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model'; // ✅ Ensure correct path
import { TransactionService } from '../services/transaction.service'; // ✅ Must match class name in service

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {} // ✅ Correct injection

  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactions(); // ✅ Correct usage
  }
}
