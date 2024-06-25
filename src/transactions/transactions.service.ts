import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { convertBigIntToString } from '../../utils/bigint-to-string';

@Injectable()
export class TransactionsService {
  private readonly web3: Web3;

  constructor() {
    this.web3 = new Web3('https://ethereum.publicnode.com/');
  }

  async getTransactionByHash(hash: string) {
    const transaction = await this.web3.eth.getTransaction(hash);
    const transactionData = {
      hash: transaction.hash,
      to: transaction.to,
      from: transaction.from,
      value: transaction.value,
      input: transaction.input,
      maxFeePerGas: transaction.maxFeePerGas,
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
      gasPrice: transaction.gasPrice,
    };

    return convertBigIntToString(transactionData);
  }
}
