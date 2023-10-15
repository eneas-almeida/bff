import { LogsMongooseRepository } from '@/infra/db/mongoose/repositories';
import { LogControllerInterface } from '@/presentation/contracts';
import { LogController } from '@/presentation/controllers';
import {
    CreateLogUseCase,
    FilterLogsUseCase,
    FindOneLogByIdUseCase,
    FindOneLogByKeyUseCase,
} from '@/application/usecases/logs';

export const MakeLogController = async (): Promise<LogControllerInterface> => {
    const logMongooseRepository = new LogsMongooseRepository();

    const createLogUseCase = new CreateLogUseCase(logMongooseRepository);
    const filterLogsFilterUseCase = new FilterLogsUseCase(logMongooseRepository);
    const findOneLogByIdUseCase = new FindOneLogByIdUseCase(logMongooseRepository);
    const findOneLogByKeyUseCase = new FindOneLogByKeyUseCase(logMongooseRepository);

    return new LogController(
        createLogUseCase,
        filterLogsFilterUseCase,
        findOneLogByIdUseCase,
        findOneLogByKeyUseCase
    );
};
