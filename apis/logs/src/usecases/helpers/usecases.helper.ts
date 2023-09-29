import { envs } from '@/main/configs';
import { api } from '@/main/utils';
import { LogOutputCustomDto, LogOutputDto } from '../contracts';

export const outputCustomDto = (data: LogOutputDto | LogOutputDto[]): LogOutputCustomDto => {
    const output: LogOutputCustomDto = {
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
        const url = `${api}/logs`;

        output._links = [
            { method: 'post', url, description: 'Create a new log' },
            { method: 'get', url, description: 'Filters logs' },
            { method: 'get', url: `${url}/:id`, description: 'Find a log by id' },
        ];
    }

    return output;
};
