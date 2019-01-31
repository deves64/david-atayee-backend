import { Injectable } from '@nestjs/common';
import { Repository, EntityManager } from 'typeorm';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Message } from './entity/Message';
import {CreateMessageDto} from './dto/create-message.dto';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message) private readonly messageRepository: Repository<Message>,
        @InjectEntityManager() private readonly entityManager: EntityManager,
    ) {}

    async create(message: CreateMessageDto): Promise<Message> {
        return await this.messageRepository.save(message);
    }

    async findOne(id: string): Promise<Message | undefined> {
        return await this.messageRepository.findOne(id);
    }

    async findAll(): Promise<Message[]> {
        return await this.messageRepository.find({ relations: ['sender'] });
    }
}