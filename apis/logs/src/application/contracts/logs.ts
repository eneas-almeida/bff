import { LogEntityInterface } from '@/domain/@shared/contracts';
import { FilterInputDto, Hateos, PaginationOutputDto } from './custom';

export interface LogCreateInputDto {
    origin: string;
    key: string;
    request: string;
    response: string;
}

export interface LogOutputDto {
    id: string;
    origin: string;
    key: string;
    request: string;
    response: string;
    createdAt: Date;
}

export interface LogCustomOutputDto<T extends LogOutputDto | LogOutputDto[]> {
    pagination?: PaginationOutputDto;
    data: T;
    _links?: Hateos[];
}

export interface LogRepositoryInterface {
    create(entity: LogEntityInterface): Promise<LogEntityInterface>;
    filter(input: FilterInputDto): Promise<LogEntityInterface[]>;
    findOneById(id: string): Promise<LogEntityInterface | null>;
    findOneByKey(key: string): Promise<LogEntityInterface | null>;
}
