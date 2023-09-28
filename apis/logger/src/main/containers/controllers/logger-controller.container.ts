import { LoggerMongodbRepository } from '@/infra/db/mongodb/repositories';
import { LoggerControllerInterface } from '@/presentation/contracts';
import { LoggerController } from '@/presentation/controllers';
import { CreateLoggerUseCase, FindLoggersByFilterUseCase, FindOneLoggerByIdUseCase } from '@/usecases';

export const MakeLoggerControllerContainer = async (): Promise<LoggerControllerInterface> => {
    const loggerMongodbRepository = new LoggerMongodbRepository();

    const createLoggerUseCase = new CreateLoggerUseCase(loggerMongodbRepository);
    const findLoggersByFilterUseCase = new FindLoggersByFilterUseCase(loggerMongodbRepository);
    const findOneLoggerByIdUseCase = new FindOneLoggerByIdUseCase(loggerMongodbRepository);

    return new LoggerController(createLoggerUseCase, findLoggersByFilterUseCase, findOneLoggerByIdUseCase);
};
