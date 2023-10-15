import {
    AccountsCustomOutputDto,
    AccountsOutputDto,
    AccountsRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';

export class FindOneAccountByEmailUseCase {
    constructor(private readonly accountsRepository: AccountsRepositoryInterface) {}

    async execute(email: string): Promise<AccountsCustomOutputDto<AccountsOutputDto>> {
        const entity = await this.accountsRepository.findOneByEmail(email);

        if (!entity) {
            throw new Error('Account not found');
        }

        const outputDto = AccountMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
