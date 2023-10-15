import {
    AccountsCreateInputDto,
    AccountsCustomOutputDto,
    AccountsOutputDto,
    AccountsUseCaseInterface,
    FilterInputDto,
} from '@/application/contracts';
import { AccountControllerInterface, HttpResponse } from '../contracts';
import { create, ok } from '../helpers';

export class AccountController implements AccountControllerInterface {
    constructor(private readonly useCases: AccountsUseCaseInterface) {}

    async create(
        input: AccountsCreateInputDto
    ): Promise<HttpResponse<AccountsCustomOutputDto<AccountsOutputDto>>> {
        const output = await this.useCases.create(input);
        return create(output);
    }

    async filter(input: FilterInputDto): Promise<HttpResponse<AccountsCustomOutputDto<AccountsOutputDto[]>>> {
        const output = await this.useCases.filter(input);
        return ok(output);
    }

    async findOneById(id: string): Promise<HttpResponse<AccountsCustomOutputDto<AccountsOutputDto>>> {
        const output = await this.useCases.findOneById(id);
        return ok(output);
    }

    async findOneByEmail(email: string): Promise<HttpResponse<AccountsCustomOutputDto<AccountsOutputDto>>> {
        const output = await this.useCases.findOneByEmail(email);
        return ok(output);
    }

    async deleteAll(): Promise<HttpResponse<void>> {
        await this.useCases.deleteAll();
        return ok();
    }
}
