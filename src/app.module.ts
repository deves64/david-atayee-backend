import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './messages/entity/message';
import { DateScalar } from './common/scallars/DateScalar';
import { Connection } from 'typeorm';
import { Sender } from './messages/entity/sender';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'rJa7oe7rGnqLc1@KV6a',
      database: 'david_atayee_backend',
      entities: [__dirname + '/**/entity/*{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Message, Sender]),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}