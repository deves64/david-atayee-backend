import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';
import { Message as GraphQlMessage } from '../../graphql.schema';
import { Sender } from './sender';

@Entity()
export class Message extends GraphQlMessage {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @VersionColumn()
    entityVersion: number;

    @Column({ type: 'text'})
    subject: string;

    @Column({ type: 'text'})
    message: string;

    @ManyToOne(type => Sender, sender => sender.messages, {cascade: true})
    sender: Sender;
}