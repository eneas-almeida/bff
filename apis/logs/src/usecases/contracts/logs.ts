import { Hateos } from './hateos';
import { PaginationOutputDto } from './pagination';

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
