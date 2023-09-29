import { Hateos } from './hateos';
import { PaginationDto } from './pagination';

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

export interface LogOutputCustomDto {
    pagination?: PaginationDto;
    data: LogOutputDto | LogOutputDto[];
    _links?: Hateos[];
}
