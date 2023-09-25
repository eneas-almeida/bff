import { envs } from '@/infra/main/configs/envs';
import { BadRequestError } from '../errors';

export const getEndpoint = (): string => {
    return `${envs.externalApi.user.baseUrl}/users`;
};

export const checkHttpRequest = (error: any) => {
    const codes = ['ERR_BAD_REQUEST', 'ECONNREFUSED', 'ECONNRESET', 'ECONNABORTED', 'ENOTFOUND', 'ETIMEDOUT'];

    console.log('akkiiiii sim!!!! 1');
    if (error.code && codes.includes(error.code)) {
        throw new BadRequestError(error.message);
    }
};

export const findOneUserByEmailInCollection = (collection: any[], email: string) => {
    return collection.find((user: any) => user.email.toLowerCase() === email);
};
