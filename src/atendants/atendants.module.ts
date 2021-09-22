import { Module } from '@nestjs/common';
import { AtendantsService } from './atendants.service';
import { AtendantsController } from './atendants.controller';

@Module({
  controllers: [AtendantsController],
  providers: [AtendantsService],
})
export class AtendantsModule {}
