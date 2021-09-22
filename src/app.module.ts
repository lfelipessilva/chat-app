import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtendantsModule } from './atendants/atendants.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PrismaModule, AtendantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
