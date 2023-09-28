import { LoggerEntityInterface } from './entities';

export interface LoggerRepositoryInterface {
    create(entity: LoggerEntityInterface): Promise<LoggerEntityInterface>;
    findByFilter(): Promise<LoggerEntityInterface[]>;
    findOneById(id: string): Promise<LoggerEntityInterface | null>;
}
