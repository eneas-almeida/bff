import { LogsMongooseRepository } from '@/infra/db/mongoose/repositories';
import { LogsControllerInterface } from '@/presentation/contracts';
import { LogsController } from '@/presentation/controllers';
import {
    CreateLogUseCase,
    DeleteAllLogsUseCase,
    FilterLogsUseCase,
    FindOneLogByIdUseCase,
    FindOneLogByKeyUseCase,
} from '@/application/usecases/logs';
import { FilterInputDto, LogsCreateInputDto, LogsUseCaseInterface } from '@/application/contracts';

export const MakeLogController = async (): Promise<LogsControllerInterface> => {
    const logMongooseRepository = new LogsMongooseRepository();

    const createLogUseCase = new CreateLogUseCase(logMongooseRepository);
    const filterLogsFilterUseCase = new FilterLogsUseCase(logMongooseRepository);
    const findOneLogByIdUseCase = new FindOneLogByIdUseCase(logMongooseRepository);
    const findOneLogByKeyUseCase = new FindOneLogByKeyUseCase(logMongooseRepository);
    const deleteAllLogsUseCase = new DeleteAllLogsUseCase(logMongooseRepository);

    const useCasesAdapter: LogsUseCaseInterface = {
        create: (input: LogsCreateInputDto) => createLogUseCase.execute(input),
        filter: (filter: FilterInputDto) => filterLogsFilterUseCase.execute(filter),
        findOneById: (id: string) => findOneLogByIdUseCase.execute(id),
        findOneByKey: (email: string) => findOneLogByKeyUseCase.execute(email),
        deleteAll: () => deleteAllLogsUseCase.execute(),
    };

    return new LogsController(useCasesAdapter);
};
