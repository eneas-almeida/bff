import { AccountEntityInterface } from '@/domain/@shared/contracts';
import { EntityAbstract } from '@/domain/@shared';
import { AccountValidatorFactory } from '../factory/account-validator.factory';

export class AccountEntity extends EntityAbstract implements AccountEntityInterface {
    private _email: string;
    private _password: string;

    constructor(id: string, email: string, password: string) {
        super(id);
        this._email = email;
        this._password = password;
        this.validate();
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    setEmail(value: string): void {
        this._email = value;
    }

    setPassword(value: string): void {
        this._password = value;
    }

    validate() {
        AccountValidatorFactory.create().validate(this);
    }
}
