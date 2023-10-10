import {
    AccountCustomOutputDto,
    AccountOutputDto,
    AccountRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';

export class FindOneAccountByIdUseCase {
    constructor(private readonly accountsRepository: AccountRepositoryInterface) {}

    async execute(id: string): Promise<AccountCustomOutputDto<AccountOutputDto>> {
        const entity = await this.accountsRepository.findOneById(id);

        if (!entity) {
            throw new Error('Account not found');
        }

        const outputDto = AccountMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
