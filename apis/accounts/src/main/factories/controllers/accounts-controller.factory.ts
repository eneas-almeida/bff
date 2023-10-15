import {
    CreateAccountUseCase,
    FilterAccountsUseCase,
    FindOneAccountByEmailUseCase,
    FindOneAccountByIdUseCase,
} from '@/application/usecases/accounts';
import { LogsIntegration } from '@/framework/integrations';
import { AccountMongooseRepository } from '@/infra/db/mongoose/repositories';
import { AxiosHttpClient } from '@/infra/httpclients';
import { AccountControllerInterface } from '@/presentation/contracts';
import { AccountController } from '@/presentation/controllers';

export const MakeAccountController = async (): Promise<AccountControllerInterface> => {
    const accountMongooseRepository = new AccountMongooseRepository();

    const axiosInstance = new AxiosHttpClient().getInstance();
    const logsIntegration = new LogsIntegration(axiosInstance);

    const createAccountUseCase = new CreateAccountUseCase(accountMongooseRepository, logsIntegration);
    const filterAccountsFilterUseCase = new FilterAccountsUseCase(accountMongooseRepository);
    const findOneAccountByIdUseCase = new FindOneAccountByIdUseCase(accountMongooseRepository);
    const findOneAccountByEmailUseCase = new FindOneAccountByEmailUseCase(accountMongooseRepository);

    return new AccountController(
        createAccountUseCase,
        filterAccountsFilterUseCase,
        findOneAccountByIdUseCase,
        findOneAccountByEmailUseCase
    );
};
