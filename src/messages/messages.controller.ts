import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { CreateMessagesDto } from './dto/create-messages.dto';
import { MessageValidationPipe } from './pipe/message-validation.pipe';

@Controller('messages')
export class MessagesController {
    @Post()
    @UsePipes(new MessageValidationPipe())
    create(@Body() createMessagesDto: CreateMessagesDto) {
        return createMessagesDto;
    }
}
