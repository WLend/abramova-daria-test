import {
  Controller,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from '../transactions/dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get(':hash')
  @UsePipes(new ValidationPipe({ transform: true }))
  getTransactionByHash(@Param() params: CreateTransactionDto) {
    return this.transactionsService.getTransactionByHash(params.hash);
  }
}
