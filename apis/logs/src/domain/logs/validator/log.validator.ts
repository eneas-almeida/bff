import * as yup from 'yup';
import { NotificationError } from '@/domain/@shared';
import { LogEntityInterface, ValidatorInterface } from '@/domain/@shared/contracts';

export class LogYupValidator implements ValidatorInterface<LogEntityInterface> {
    validate(entity: LogEntityInterface): void {
        try {
            yup.object()
                .shape({
                    origin: yup.string().required('propriedade origin requerida'),
                    key: yup.string().required('propriedade key requerida'),
                    request: yup.string().required('propridade request requerida'),
                    response: yup.string().required('propridade response requerida'),
                })
                .validateSync(
                    {
                        origin: entity.origin,
                        key: entity.key,
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
