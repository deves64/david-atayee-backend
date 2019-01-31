import { Module } from '@nestjs/common';
import { MessagesResolver } from './messages.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entity/message';
import { MessagesService } from './messages.service';
import { Sender } from './entity/sender';

@Module({
    imports: [TypeOrmModule.forFeature([Message, Sender])],
    providers: [MessagesResolver, MessagesService],
})
export class MessagesModule {}
