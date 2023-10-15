import { AccountEntityInterface } from '@/domain/@shared/contracts';
import { FilterInputDto, Hateos, PaginationOutputDto } from './custom';

export interface AccountCreateInputDto {
    headers?: any;
    xRequest?: string;
    email: string;
    password: string;
}

export interface AccountOutputDto {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AccountCustomOutputDto<T extends AccountOutputDto | AccountOutputDto[]> {
    pagination?: PaginationOutputDto;
    data: T;
    _links?: Hateos[];
}

export interface AccountRepositoryInterface {
    create(entity: AccountEntityInterface): Promise<AccountEntityInterface>;
    filter(input: FilterInputDto): Promise<AccountEntityInterface[]>;
    findOneById(id: string): Promise<AccountEntityInterface | null>;
    findOneByEmail(email: string): Promise<AccountEntityInterface | null>;
}
