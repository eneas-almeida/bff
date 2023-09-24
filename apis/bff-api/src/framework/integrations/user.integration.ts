import { AxiosInstance } from 'axios';
import { UserIntegrationInterface, UserIntegrationOutputDto } from './contracts';
import { BadRequestError, IntegrationError } from './errors';
import { toUserIntegrationOutputDto, toUserIntegrationOutputDtoCollection } from './mappers';
import { envs } from '@/infra/main/configs/envs';

const ENDPOINTS = {
    users: '/users',
};

export class UserIntegration implements UserIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    async findAll(): Promise<UserIntegrationOutputDto[]> {
        const { baseUrl } = envs.externalApi.user;

        const endpoint = `${baseUrl}${ENDPOINTS.users}`;

        try {
            const { data } = await this.axios.get(endpoint);

            return data ? toUserIntegrationOutputDtoCollection(data) : [];
        } catch (e) {
            if (e.code && e.code === 'ERR_BAD_REQUEST') {
                throw new BadRequestError(e.message);
            }

            const { status, statusText } = e.response;

            throw new IntegrationError(statusText, status);
        }
    }

    async findOneByEmail(email: string): Promise<UserIntegrationOutputDto | null> {
        const { baseUrl } = envs.externalApi.user;

        const endpoint = `${baseUrl}${ENDPOINTS.users}`;

        try {
            const { data } = await this.axios.get(endpoint);

            const existsUser = data ? data.find((user: any) => user.email.toLowerCase() === email) : null;

            return existsUser ? toUserIntegrationOutputDto(existsUser) : null;
        } catch (e) {
            if (e.code && e.code === 'ERR_BAD_REQUEST') {
                throw new BadRequestError(e.message);
            }

            const { status, statusText } = e.response;

            throw new IntegrationError(statusText, status);
        }
    }

    async findOneById(id: number): Promise<UserIntegrationOutputDto | null> {
        const { baseUrl } = envs.externalApi.user;

        const endpoint = `${baseUrl}${ENDPOINTS.users}/id/${id}`;

        console.log(endpoint);

        try {
            const { data } = await this.axios.get(endpoint);

            return data ? toUserIntegrationOutputDto(data) : null;
        } catch (e) {
            if (e.code && e.code === 'ERR_BAD_REQUEST') {
                throw new BadRequestError(e.message);
            }

            const { status, statusText } = e.response;

            if (status === 404) return null;

            throw new IntegrationError(statusText, status);
        }
    }
}
