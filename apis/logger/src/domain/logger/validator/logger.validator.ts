import * as yup from 'yup';
import { LoggerEntityInterface, ValidatorInterface } from '@/domain/@shared/contracts';
import { NotificationError } from '@/domain/@shared/errors';

export class LoggerYupValidator implements ValidatorInterface<LoggerEntityInterface> {
    validate(entity: LoggerEntityInterface): void {
        try {
            yup.object()
                .shape({
                    key: yup.number().required('propriedade key requerida'),
                    request: yup.string().required('propridade request requerida'),
                    response: yup.string().required('propridade response requerida'),
                })
                .validateSync(
                    {
                        key: entity.key,
                        resquest: entity.request,
                        response: entity.response,
                    },
                    { abortEarly: false }
                );
        } catch (e) {
            const yupErrors = e as yup.ValidationError;

            yupErrors.errors.forEach((error) => {
                entity.notification.addError({ context: 'logger', message: error });
            });

            if (yupErrors.errors.length) {
                throw new NotificationError(400, entity.notification.getErrors());
            }
        }
    }
}
