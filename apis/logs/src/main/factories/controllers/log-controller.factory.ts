import { LogMongooseRepository } from '@/infra/db/mongoose/repositories';
import { LogControllerInterface } from '@/presentation/contracts';
import { LogController } from '@/presentation/controllers';
import { CreateLogUseCase, FilterLogsUseCase, FindOneLogByIdUseCase } from '@/usecases';

export const MakeLogController = async (): Promise<LogControllerInterface> => {
    const logMongooseRepository = new LogMongooseRepository();

    const createLogUseCase = new CreateLogUseCase(logMongooseRepository);
    const filterLogsFilterUseCase = new FilterLogsUseCase(logMongooseRepository);
    const findOneLogByIdUseCase = new FindOneLogByIdUseCase(logMongooseRepository);

    return new LogController(createLogUseCase, filterLogsFilterUseCase, findOneLogByIdUseCase);
};
