import { Id } from '@/domain/@shared/contracts';
import { LoggerEntity } from '../entity';

export class LoggerFactory {
    static create(origin: string, key: string, request: string, response: string) {
        return new LoggerEntity(null, origin, key, request, response);
    }

    static createWithId(id: Id, origin: string, key: string, request: string, response: string) {
        return new LoggerEntity(id, origin, key, request, response);
    }
}
