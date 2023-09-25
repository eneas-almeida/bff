import { envs } from '@/infra/main/configs/envs';

export const getEndpoint = (): string => {
    return `${envs.externalApi.user.baseUrl}/users`;
};

export const findOneUserByEmailInCollection = (collection: any[], email: string) => {
    return collection.find((user: any) => user.email.toLowerCase() === email);
};
