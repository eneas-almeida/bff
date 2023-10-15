import {
    AccountsCreateInputDto,
    AccountsCustomOutputDto,
    AccountsOutputDto,
    FilterInputDto,
    HealthzOutputDto,
} from '@/application/contracts';
import { HttpResponse } from './http';

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface AccountControllerInterface {
    create: (
        input: AccountsCreateInputDto
    ) => Promise<HttpResponse<AccountsCustomOutputDto<AccountsOutputDto>>>;
    filter: (input: FilterInputDto) => Promise<HttpResponse<AccountsCustomOutputDto<AccountsOutputDto[]>>>;
    findOneById: (id: string) => Promise<HttpResponse<AccountsCustomOutputDto<AccountsOutputDto>>>;
    findOneByEmail: (email: string) => Promise<HttpResponse<AccountsCustomOutputDto<AccountsOutputDto>>>;
    deleteAll: () => Promise<HttpResponse<void>>;
}
