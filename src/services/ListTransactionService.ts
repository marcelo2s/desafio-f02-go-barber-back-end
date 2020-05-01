import TransactionsRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

interface Response {
  transactions: Transaction[],
  balance: Balance
}

class ListTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Response {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();

    return { transactions, balance };
  }
}

export default ListTransactionService;