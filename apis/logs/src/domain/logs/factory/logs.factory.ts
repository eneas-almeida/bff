import { LogsEntity } from '..';

export class LogsFactory {
    static create(
        origin: string,
        key: string,
        type: string,
        code: string,
        request: string,
        response: string
    ) {
        return new LogsEntity(null, origin, key, type, code, request, response);
    }

    static createWithId(
        id: string,
        origin: string,
        key: string,
        type: string,
        code: string,
        request: string,
        response: string
    ) {
        return new LogsEntity(id, origin, key, type, code, request, response);
    }
}
