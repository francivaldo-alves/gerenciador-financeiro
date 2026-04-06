import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

type CardType = 'income' | 'autcome' | 'balance';
enum ValueCssClass {
  income = 'income',
  outcome = 'autcome',
}
@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
})
export class BalanceCard {
  type = input.required<CardType>();
  label = input.required<string>();
  value = input.required<number>();

  cssClass = computed<ValueCssClass>(() => {
    if (this.type() === 'income') {
      return ValueCssClass.income;
    }
    if (this.type() === 'autcome') {
      return ValueCssClass.outcome;
    }
    return this.value() > 0 ? ValueCssClass.income : ValueCssClass.outcome;
  });
}
