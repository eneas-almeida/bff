import { AccountsRepositoryInterface } from '@/application/contracts';

export class DeleteAllAccountsUseCase {
    constructor(private readonly accountsRepository: AccountsRepositoryInterface) {}

    async execute(): Promise<void> {
        await this.accountsRepository.deleteAll();
    }
}
