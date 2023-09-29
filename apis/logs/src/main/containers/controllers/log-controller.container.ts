import { LogMongodbRepository } from '@/infra/db/mongodb/repositories';
import { LogControllerInterface } from '@/presentation/contracts';
import { LogController } from '@/presentation/controllers';
import { CreateLogUseCase, FilterLogsUseCase, FindOneLogByIdUseCase } from '@/usecases';

export const MakeLogControllerContainer = async (): Promise<LogControllerInterface> => {
    const logMongodbRepository = new LogMongodbRepository();

    const createLogUseCase = new CreateLogUseCase(logMongodbRepository);
    const filterLogsFilterUseCase = new FilterLogsUseCase(logMongodbRepository);
    const findOneLogByIdUseCase = new FindOneLogByIdUseCase(logMongodbRepository);

    return new LogController(createLogUseCase, filterLogsFilterUseCase, findOneLogByIdUseCase);
};
