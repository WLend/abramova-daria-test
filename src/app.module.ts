import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockModule } from './block/block.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [BlockModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
