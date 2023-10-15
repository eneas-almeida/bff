import { AccountEntityInterface } from '@/domain/@shared/contracts';
import { FilterInputDto, Hateos, PaginationOutputDto } from './custom';
import { LogsIntegrationInterface } from '@/framework/integrations/contracts';

export interface AccountsCreateInputDto {
    headers?: any;
    body: {
        email: string;
        password: string;
    };
}

export interface AccountsOutputDto {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AccountsCustomOutputDto<T extends AccountsOutputDto | AccountsOutputDto[]> {
    pagination?: PaginationOutputDto;
    data: T;
    _links?: Hateos[];
}

export interface AccountsRepositoryInterface {
    create(entity: AccountEntityInterface): Promise<AccountEntityInterface>;
    filter(input: FilterInputDto): Promise<AccountEntityInterface[]>;
    findOneById(id: string): Promise<AccountEntityInterface | null>;
    findOneByEmail(email: string): Promise<AccountEntityInterface | null>;
    deleteAll(): Promise<void>;
}

export interface AccountsUseCaseInterface {
    create(input: AccountsCreateInputDto): Promise<AccountsCustomOutputDto<AccountsOutputDto>>;
    filter(input: FilterInputDto): Promise<AccountsCustomOutputDto<AccountsOutputDto[]>>;
    findOneById(id: string): Promise<AccountsCustomOutputDto<AccountsOutputDto>>;
    findOneByEmail(email: string): Promise<AccountsCustomOutputDto<AccountsOutputDto>>;
    deleteAll(): Promise<void>;
}

export interface AccountsCommonsInterface {
    repositories: {
        accounts: AccountsRepositoryInterface;
    };
    integrations: {
        logs: LogsIntegrationInterface;
    };
}
