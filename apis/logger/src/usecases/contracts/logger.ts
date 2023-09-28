import { Hateos } from './hateos';

export interface LoggerCreateInputDto {
    key: string;
    request: string;
    response: string;
}

export interface LoggerOutputDto {
    id: string;
    key: string;
    request: string;
    response: string;
    createdAt: Date;
    _links?: Hateos[];
}
