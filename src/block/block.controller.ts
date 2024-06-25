import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BlockService } from './block.service';

@Controller('block')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Get(':height')
  getBlockByHeight(@Param('height', ParseIntPipe) height: number) {
    return this.blockService.getBlockByHeight(height);
  }
}
