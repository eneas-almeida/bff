import { Id } from '@/domain/@shared/contracts';
import { LogEntity } from '../entity';

export class LogFactory {
    static create(origin: string, key: string, request: string, response: string) {
        return new LogEntity(null, origin, key, request, response);
    }

    static createWithId(id: Id, origin: string, key: string, request: string, response: string) {
        return new LogEntity(id, origin, key, request, response);
    }
}
