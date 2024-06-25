import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { convertBigIntToString } from '../../utils/bigint-to-string';

@Injectable()
export class BlockService {
  private readonly web3: Web3;

  constructor() {
    this.web3 = new Web3('https://ethereum.publicnode.com/');
  }

  async getBlockByHeight(height: number) {
    console.log('height =', height);
    const block = await this.web3.eth.getBlock(height);

    const blockData = {
      number: block.number,
      hash: block.hash,
      parentHash: block.parentHash,
      size: block.size,
      gasLimit: block.gasLimit,
      gasUsed: block.gasUsed,
    };

    const serializedBlockData = convertBigIntToString(blockData);
    console.log('blockData =', serializedBlockData);

    return serializedBlockData;
  }
}
