import { envs } from '@/main/configs';
import { api } from '@/main/utils';
import { AccountCreateInputDto, AccountCustomOutputDto, AccountOutputDto } from '../contracts';
import { LogsIntegrationCreateInputDto } from '@/framework/integrations/contracts';

export const generateLog = (
    origin: string,
    type: string,
    code: string,
    key: string,
    request: string,
    response: string
): LogsIntegrationCreateInputDto => {
    return { origin, key, type, code, request, response };
};

export const customOutputDto = <T extends AccountOutputDto | AccountOutputDto[]>(
    data: T
): AccountCustomOutputDto<T> => {
    const output: AccountCustomOutputDto<T> = {
        data,
    };

    if (data instanceof Array) {
        output.pagination = {
            page: 0,
            limit: 0,
            total: 0,
            pages: 0,
            offset: 0,
            hasNext: false,
            hasPrevious: false,
            next: null,
            previous: null,
        };
    }

    if (envs.api.hateosActivated) {
        const url = `${api}/accounts`;

        output._links = [
            { method: 'post', url, description: 'Create a new account' },
            { method: 'get', url, description: 'Filters accounts' },
            { method: 'get', url: `${url}/:id`, description: 'Find a account by id' },
            { method: 'get', url: `${url}/email/:email`, description: 'Find a account by email' },
        ];
    }

    return output;
};

export const outputFilterDto = <T>(input: T): T => {
    return { ...input };
};
