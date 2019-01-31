import { Message } from '../graphql.schema';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message as TypeOrmMessage } from './entity/message';
import { Sender as TypeOrmSender } from './entity/sender';

@Resolver('Message')
export class MessagesResolver {
    constructor(private readonly messagesService: MessagesService) {}

    @Mutation()
    async createMessage(@Args('createMessageInput') createMessageDto: CreateMessageDto): Promise<Message> {
        return await this.messagesService.create(createMessageDto);
    }

    @Query()
    async getMessage(@Args('id') id: string): Promise<Message> {
        return await this.messagesService.findOne(id);
    }

    @Query()
    async getAllMessages(): Promise<Message[]> {
        return await this.messagesService.findAll();
    }
}