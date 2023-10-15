import {
    FilterInputDto,
    AccountsCustomOutputDto,
    AccountsOutputDto,
    AccountsRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';
import { AppError } from '@/main/errors';

export class FilterAccountsUseCase {
    constructor(private readonly accountsRepository: AccountsRepositoryInterface) {}

    async execute(input: FilterInputDto): Promise<AccountsCustomOutputDto<AccountsOutputDto[]>> {
        const entities = await this.accountsRepository.filter(input);

        if (!entities.length) {
            throw new AppError('No accounts found', 204);
        }

        const outputDtoCollection = AccountMapper.entitiesToDtoCollection(entities);

        return customOutputDto(outputDtoCollection);
    }
}
