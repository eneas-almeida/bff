import { AccountEntityInterface, ValidatorInterface } from '@/domain/@shared/contracts';
import { AccountYupValidator } from '../validator/account.validator';

export class AccountValidatorFactory {
    static create(): ValidatorInterface<AccountEntityInterface> {
        return new AccountYupValidator();
    }
}
