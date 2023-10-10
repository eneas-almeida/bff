import {
    AccountCreateInputDto,
    AccountCustomOutputDto,
    AccountOutputDto,
    AccountRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';

export class CreateAccountUseCase {
    constructor(private readonly accountsRepository: AccountRepositoryInterface) {}

    async execute(input: AccountCreateInputDto): Promise<AccountCustomOutputDto<AccountOutputDto>> {
        let entity = AccountMapper.dtoToEntity(input);

        entity = await this.accountsRepository.create(entity);

        const outputDto = AccountMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
