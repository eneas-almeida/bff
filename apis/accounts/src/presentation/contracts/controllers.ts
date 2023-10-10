import {
    AccountCreateInputDto,
    AccountCustomOutputDto,
    AccountOutputDto,
    FilterInputDto,
    HealthzOutputDto,
} from '@/application/contracts';
import { HttpResponse } from './http';

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface AccountControllerInterface {
    create: (input: AccountCreateInputDto) => Promise<HttpResponse<AccountCustomOutputDto<AccountOutputDto>>>;
    filter: (input: FilterInputDto) => Promise<HttpResponse<AccountCustomOutputDto<AccountOutputDto[]>>>;
    findOneById: (id: string) => Promise<HttpResponse<AccountCustomOutputDto<AccountOutputDto>>>;
    findOneByEmail: (email: string) => Promise<HttpResponse<AccountCustomOutputDto<AccountOutputDto>>>;
}
