import { Id } from '@/domain/@shared/contracts';
import { LoggerEntity } from '../entity';

export class LoggerFactory {
    static create(key: string, request: string, response: string) {
        return new LoggerEntity(null, key, request, response);
    }

    static createWithId(id: Id, key: string, request: string, response: string) {
        return new LoggerEntity(id, key, request, response);
    }
}
