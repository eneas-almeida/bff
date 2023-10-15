import {
    AccountsCustomOutputDto,
    AccountsOutputDto,
    AccountsRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';

export class FindOneAccountByIdUseCase {
    constructor(private readonly accountsRepository: AccountsRepositoryInterface) {}

    async execute(id: string): Promise<AccountsCustomOutputDto<AccountsOutputDto>> {
        const entity = await this.accountsRepository.findOneById(id);

        if (!entity) {
            throw new Error('Account not found');
        }

        const outputDto = AccountMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
