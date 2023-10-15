import { AccountsCommonsInterface } from '@/application/contracts';

export class DeleteAllAccountsUseCase {
    constructor(private readonly commons: AccountsCommonsInterface) {}

    async execute(): Promise<void> {
        await this.commons.repositories.accounts.deleteAll();
    }
}
