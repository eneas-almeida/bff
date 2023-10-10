import {
    CreateAccountUseCase,
    FilterAccountsUseCase,
    FindOneAccountByEmailUseCase,
    FindOneAccountByIdUseCase,
} from '@/application/usecases/accounts';
import { AccountMongooseRepository } from '@/infra/db/mongoose/repositories';
import { AccountControllerInterface } from '@/presentation/contracts';
import { AccountController } from '@/presentation/controllers';

export const MakeAccountController = async (): Promise<AccountControllerInterface> => {
    const accountMongooseRepository = new AccountMongooseRepository();

    const createAccountUseCase = new CreateAccountUseCase(accountMongooseRepository);
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
