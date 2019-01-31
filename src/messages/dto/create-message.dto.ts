import { CreateMessageInput } from '../../graphql.schema';
import { CreateSenderDto } from './create-sender.dto';

export class CreateMessageDto extends CreateMessageInput {
    subject: string;
    message: string;
    sender: CreateSenderDto;
}