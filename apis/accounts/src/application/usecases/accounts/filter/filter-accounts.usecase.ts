import {
    FilterInputDto,
    AccountCustomOutputDto,
    AccountOutputDto,
    AccountRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { AccountMapper } from '@/application/mappers';
import { AppError } from '@/main/errors';

export class FilterAccountsUseCase {
    constructor(private readonly accountsRepository: AccountRepositoryInterface) {}

    async execute(input: FilterInputDto): Promise<AccountCustomOutputDto<AccountOutputDto[]>> {
        const entities = await this.accountsRepository.filter(input);

        if (!entities.length) {
            throw new AppError('No accounts found', 204);
        }

        const outputDtoCollection = AccountMapper.entitiesToDtoCollection(entities);

        return customOutputDto(outputDtoCollection);
    }
}
