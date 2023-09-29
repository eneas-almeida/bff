import { Hateos } from './hateos';

export interface LoggerCreateInputDto {
    origin: string;
    key: string;
    request: string;
    response: string;
}

export interface LoggerOutputDto {
    id: string;
    origin: string;
    key: string;
    request: string;
    response: string;
    createdAt: Date;
}

export interface LoggerOutputHateosDto {
    data: LoggerOutputDto | LoggerOutputDto[];
    _links?: Hateos[];
}
