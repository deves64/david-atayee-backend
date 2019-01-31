/* tslint:disable */
export class CreateMessageInput {
    subject?: string;
    message?: string;
    sender?: CreateSenderInput;
}

export class CreateSenderInput {
    firstName?: string;
    lastName?: string;
    company?: string;
    email?: string;
}

export class Message {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    entityVersion?: number;
    subject?: string;
    message?: string;
    sender?: Sender;
}

export abstract class IMutation {
    abstract createMessage(createMessageInput?: CreateMessageInput): Message | Promise<Message>;
}

export abstract class IQuery {
    abstract getMessage(id: string): Message | Promise<Message>;

    abstract getAllMessages(): Message[] | Promise<Message[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Sender {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    entityVersion?: number;
    firstName?: string;
    lastName?: string;
    company?: string;
    email?: string;
    messages?: Message[];
}

export type Date = any;
