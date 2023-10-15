import { envs } from '@/main/configs/envs';

export const getEndpoint = (): string => {
    return `${envs.integrations.logs.baseUrl}/users`;
};

export const findOneLogByIdInCollection = (collection: any[], id: string) => {
    return collection.find((log: any) => log.id.toLowerCase() === id);
};
