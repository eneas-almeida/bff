import { envs } from '@/main/configs/envs';

export const logsBaseUrl = (): string => {
    return `${envs.external.api.logs.baseUrl}`;
};
