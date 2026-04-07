import { Component, signal } from '@angular/core';
import { Transaction } from '../../shared/interfaces/Transaction';
import { Balance } from './components/balance/balance';
import { TransactionItem } from './components/transaction-item/transaction-item';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  transactions = signal<Transaction[]>([
    { title: 'Cartão', value: 100, type: 'income' },
    { title: 'Salário', value: 350, type: 'outcome' },
    { title: 'Aluguel', value: 200, type: 'income' },
  ]);
}
