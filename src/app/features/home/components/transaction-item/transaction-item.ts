import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { Transaction } from '../../../../shared/interfaces/Transaction';

@Component({
  selector: 'app-transaction-item',
  imports: [MatCard, MatButtonModule],
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.scss',
})
export class TransactionItem {
  transaction = input.required<Transaction>();
}
