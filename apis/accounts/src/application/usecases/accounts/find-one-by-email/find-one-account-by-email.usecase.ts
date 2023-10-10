import {
    AccountCustomOutputDto,
    AccountOutputDto,
    AccountRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';

export class FindOneAccountByEmailUseCase {
    constructor(private readonly accountsRepository: AccountRepositoryInterface) {}

    async execute(email: string): Promise<AccountCustomOutputDto<AccountOutputDto>> {
        const entity = await this.accountsRepository.findOneByEmail(email);

        if (!entity) {
            throw new Error('Account not found');
        }

        const outputDto = AccountMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
