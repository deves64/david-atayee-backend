import {CreateSenderInput} from '../../graphql.schema';

export class CreateSenderDto extends CreateSenderInput {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
}