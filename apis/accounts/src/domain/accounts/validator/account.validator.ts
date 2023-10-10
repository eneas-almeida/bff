import * as yup from 'yup';
import { NotificationError } from '@/domain/@shared';
import { AccountEntityInterface, ValidatorInterface } from '@/domain/@shared/contracts';

export class AccountYupValidator implements ValidatorInterface<AccountEntityInterface> {
    validate(entity: AccountEntityInterface): void {
        try {
            yup.object()
                .shape({
                    email: yup.string().required('propriedade email requerida'),
                    password: yup.string().required('propriedade password requerida'),
                })
                .validateSync(
                    {
                        email: entity.email,
                        password: entity.password,
                    },
                    { abortEarly: false }
                );
        } catch (e) {
            const yupErrors = e as yup.ValidationError;

            yupErrors.errors.forEach((error) => {
                entity.notification.addError({ context: 'accounts', message: error });
            });

            if (yupErrors.errors.length) {
                throw new NotificationError(400, entity.notification.getErrors());
            }
        }
    }
}
