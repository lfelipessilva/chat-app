import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { UsersModule } from './users/users.module';
import { ConnectionsModule } from './connections/connections.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [PrismaModule, UsersModule, ConnectionsModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
