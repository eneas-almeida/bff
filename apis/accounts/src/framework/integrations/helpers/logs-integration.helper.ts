import { envs } from '@/main/configs/envs';

export const getEndpoint = (): string => {
    return `${envs.external.api.logs.baseUrl}/logs`;
};
