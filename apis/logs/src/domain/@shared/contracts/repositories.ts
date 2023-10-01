import { LogEntityInterface } from './entities';

export interface LogRepositoryInterface {
    create(entity: LogEntityInterface): Promise<void>;
    filter(): Promise<LogEntityInterface[]>;
    findOneById(id: string): Promise<LogEntityInterface | null>;
    findOneByKey(key: string): Promise<LogEntityInterface | null>;
}
