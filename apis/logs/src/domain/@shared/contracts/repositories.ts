import { LogFilterInputDto } from '@/usecases/contracts';
import { LogEntityInterface } from './entities';

export interface LogRepositoryInterface {
    create(entity: LogEntityInterface): Promise<LogEntityInterface>;
    filter(input: LogFilterInputDto): Promise<LogEntityInterface[]>;
    findOneById(id: string): Promise<LogEntityInterface | null>;
    findOneByKey(key: string): Promise<LogEntityInterface | null>;
}
