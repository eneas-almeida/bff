import { AccountsCreateInputDto, AccountsUseCaseInterface, FilterInputDto } from '@/application/contracts';
import {
    CreateAccountUseCase,
    FilterAccountsUseCase,
    FindOneAccountByEmailUseCase,
    FindOneAccountByIdUseCase,
} from '@/application/usecases/accounts';
import { DeleteAllAccountsUseCase } from '@/application/usecases/accounts/delete-all/delete-all-accounts.usecase';
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
    const deleteAllAccountsUseCase = new DeleteAllAccountsUseCase(accountMongooseRepository);

    const useCases: AccountsUseCaseInterface = {
        create: (input: AccountsCreateInputDto) => createAccountUseCase.execute(input),
        filter: (filter: FilterInputDto) => filterAccountsFilterUseCase.execute(filter),
        findOneById: (id: string) => findOneAccountByIdUseCase.execute(id),
        findOneByEmail: (email: string) => findOneAccountByEmailUseCase.execute(email),
        deleteAll: () => deleteAllAccountsUseCase.execute(),
    };

    return new AccountController(useCases);
};
