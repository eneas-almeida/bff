import { AccountEntity } from '..';

export class AccountFactory {
    static create(email: string, password: string) {
        return new AccountEntity(null, email, password);
    }

    static createWithId(id: string, email: string, password: string) {
        return new AccountEntity(id, email, password);
    }
}
