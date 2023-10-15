import { envs } from '@/main/configs';
import { api } from '@/main/utils';
import { LogsCustomOutputDto, LogsOutputDto } from '../contracts';

export const customOutputDto = <T extends LogsOutputDto | LogsOutputDto[]>(
    data: T
): LogsCustomOutputDto<T> => {
    const output: LogsCustomOutputDto<T> = {
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
            { method: 'get', url: `${url}/key/:key`, description: 'Find a log by key' },
        ];
    }

    return output;
};

export const outputFilterDto = <T>(input: T): T => {
    return { ...input };
};
