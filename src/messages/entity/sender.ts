import {Entity, Column, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';
import { Message } from './message';
import { Sender as GraphQlSender } from '../../graphql.schema';

@Entity()
export class Sender extends GraphQlSender {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @VersionColumn()
    entityVersion: number;

    @Column({ type: 'text'})
    firstName: string;

    @Column({ type: 'text'})
    lastName: string;

    @Column({ type: 'text'})
    company: string;

    @Column({ type: 'text'})
    email: string;

    @OneToMany(type => Message, message => message.sender)
    messages: Message[];
}