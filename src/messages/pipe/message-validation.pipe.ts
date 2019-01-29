import { PipeTransform, Injectable, ArgumentMetadata, HttpException } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class MessageValidationPipe implements PipeTransform<any> {
    async transform(value, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const schema = {
            data: Joi.object().required().keys({
                type: Joi.string().trim().required(),
                attributes: Joi.object().required().keys({
                    subject:   Joi.string().trim().max(255, 'utf8').required(),
                    message:   Joi.string().trim().max(1024, 'utf8').required(),
                }),
            }),
        };

        const result = Joi.validate(value, schema, { abortEarly: false, stripUnknown: true });

        if (result.error != null) {
            throw new HttpException(result, 400);
        }

        return value;
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
}