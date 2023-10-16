import {
    AccountsCommonsInterface,
    AccountsCreateInputDto,
    AccountsUseCaseInterface,
    FilterInputDto,
} from '@/application/contracts';
import {
    CreateAccountUseCase,
    DeleteAllAccountsUseCase,
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
    const axiosInstance = new AxiosHttpClient().getInstance();

    const commons: AccountsCommonsInterface = {
        repositories: {
            accounts: new AccountMongooseRepository(),
        },
        integrations: {
            logs: new LogsIntegration(axiosInstance),
        },
    };

    const createAccountUseCase = new CreateAccountUseCase(commons);
    const filterAccountsFilterUseCase = new FilterAccountsUseCase(commons);
    const findOneAccountByIdUseCase = new FindOneAccountByIdUseCase(commons);
    const findOneAccountByEmailUseCase = new FindOneAccountByEmailUseCase(commons);
    const deleteAllAccountsUseCase = new DeleteAllAccountsUseCase(commons);

    const useCasesAdapter: AccountsUseCaseInterface = {
        create: (input: AccountsCreateInputDto) => createAccountUseCase.execute(input),
        filter: (filter: FilterInputDto) => filterAccountsFilterUseCase.execute(filter),
        findOneById: (id: string) => findOneAccountByIdUseCase.execute(id),
        findOneByEmail: (email: string) => findOneAccountByEmailUseCase.execute(email),
        deleteAll: () => deleteAllAccountsUseCase.execute(),
    };

    return new AccountController(useCasesAdapter);
};
