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

export interface LogFilterInputDto {
    q?: string;
    query?: any;
    limit?: number;
    skip?: number;
    page?: number;
    order?: string;
    orderBy?: string;
    initDate?: Date;
    endDate?: Date;
}

export interface LogCustomOutputDto<T extends LogOutputDto | LogOutputDto[]> {
    pagination?: PaginationDto;
    data: T;
    _links?: Hateos[];
}
