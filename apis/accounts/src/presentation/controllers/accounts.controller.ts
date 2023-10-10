import {
    AccountCreateInputDto,
    AccountCustomOutputDto,
    AccountOutputDto,
    FilterInputDto,
} from '@/application/contracts';
import {
    CreateAccountUseCase,
    FilterAccountsUseCase,
    FindOneAccountByEmailUseCase,
    FindOneAccountByIdUseCase,
} from '@/application/usecases/accounts';
import { AccountControllerInterface, HttpResponse } from '../contracts';
import { create, ok } from '../helpers';

export class AccountController implements AccountControllerInterface {
    constructor(
        private readonly createAccountUseCase: CreateAccountUseCase,
        private readonly filterAccountsUseCase: FilterAccountsUseCase,
        private readonly findOneAccountByIdUseCase: FindOneAccountByIdUseCase,
        private readonly findOneAccountByEmailUseCase: FindOneAccountByEmailUseCase
    ) {}

    async create(
        input: AccountCreateInputDto
    ): Promise<HttpResponse<AccountCustomOutputDto<AccountOutputDto>>> {
        return create(await this.createAccountUseCase.execute(input));
    }

    async filter(input: FilterInputDto): Promise<HttpResponse<AccountCustomOutputDto<AccountOutputDto[]>>> {
        return ok(await this.filterAccountsUseCase.execute(input));
    }

    async findOneById(id: string): Promise<HttpResponse<AccountCustomOutputDto<AccountOutputDto>>> {
        return ok(await this.findOneAccountByIdUseCase.execute(id));
    }

    async findOneByEmail(email: string): Promise<HttpResponse<AccountCustomOutputDto<AccountOutputDto>>> {
        return ok(await this.findOneAccountByEmailUseCase.execute(email));
    }
}
