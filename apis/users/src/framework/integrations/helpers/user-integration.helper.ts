import { envs } from '@/main/configs/envs';

export const getEndpoint = (): string => {
    return `${envs.integrations.typicode.baseUrl}/users`;
};

export const findOneUserByEmailInCollection = (collection: any[], email: string) => {
    return collection.find((user: any) => user.email.toLowerCase() === email);
};
