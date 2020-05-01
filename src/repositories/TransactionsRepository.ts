import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const balance = this.transactions
    .reduce((acc, transaction) => {
      let key = transaction['type'];
      let value = transaction['value'];
      
      if(key === 'income') {
        acc[key] += value;
      } else {
        acc[key] += value;
      }

      return acc;
    }, {income: 0, outcome: 0, total: 0});

    balance['total'] = balance['income'] - balance['outcome'];

    return balance;
  }

  public create(title: string, value: number, type: 'income' | 'outcome'): Transaction {
    const transaction = new Transaction({title, value, type});

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
