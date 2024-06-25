import { IsString, Length } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @Length(66, 66, { message: 'Transaction hash must be 66 characters long' })
  hash: string;
}
