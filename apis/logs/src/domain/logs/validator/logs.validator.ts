import * as yup from 'yup';
import { NotificationError } from '@/domain/@shared';
import { LogsEntityInterface, ValidatorInterface } from '@/domain/@shared/contracts';
import { response } from 'express';

export class LogsYupValidator implements ValidatorInterface<LogsEntityInterface> {
    validate(entity: LogsEntityInterface): void {
        try {
            yup.object()
                .shape({
                    origin: yup.string().required('propriedade origin requerida'),
                    key: yup.string().required('propriedade key requerida'),
                    type: yup.string().required('propriedade key requerida'),
                    code: yup
                        .mixed()
                        .nullable()
                        .test(
                            'is-string',
                            'A propriedade code deve conter até 4 caracteres no formato string',
                            (value) => {
                                if (!value) return true;

                                if (typeof value !== 'string') return false;

                                return value.length < 5;
                            }
                        ),
                    request: yup.string().required('propridade request requerida'),
                    response: yup.string().required('propridade response requerida'),
                })
                .validateSync(
                    {
                        origin: entity.origin,
                        key: entity.key,
                        type: entity.type,
                        code: entity.code,
                        request: entity.request,
                        response: entity.response,
                    },
                    { abortEarly: false }
                );
        } catch (e) {
            const yupErrors = e as yup.ValidationError;

            yupErrors.errors.forEach((error) => {
                entity.notification.addError({ context: 'logs', message: error });
            });

            if (yupErrors.errors.length) {
                throw new NotificationError(400, entity.notification.getErrors());
            }
        }
    }
}
