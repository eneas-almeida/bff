import { AxiosInstance } from 'axios';
import { UserIntegrationInterface, UserIntegrationOutputDto } from './contracts';
import { IntegrationError } from './errors';
import { toUserOutputDto, toUserOutputDtoCollection } from './mappers';

const ENDPOINTS = {
    users: '/users',
};

export class UserIntegration implements UserIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    async findOneById(id: number): Promise<UserIntegrationOutputDto | null> {
        const baseUrl = 'https://jsonplaceholder.typicode.com';

        const endpoint = `${baseUrl}${ENDPOINTS.users}/${id}`;

        try {
            const { data } = await this.axios.get(endpoint);

            return data ? toUserOutputDto(data) : null;
        } catch (e) {
            const { status, statusText } = e.response;

            if (status === 404) return null;

            throw new IntegrationError(statusText, status);
        }
    }

    async findOneByEmail(email: string): Promise<UserIntegrationOutputDto | null> {
        const baseUrl = 'https://jsonplaceholder.typicode.com';

        const endpoint = `${baseUrl}${ENDPOINTS.users}`;

        try {
            const { data } = await this.axios.get(endpoint);

            const existsUser = data ? data.find((user: any) => user.email.toLowerCase() === email) : null;

            return existsUser ? toUserOutputDto(existsUser) : null;
        } catch (e) {
            const { status, statusText } = e.response;

            throw new IntegrationError(statusText, status);
        }
    }

    async list(): Promise<UserIntegrationOutputDto[]> {
        const baseUrl = 'https://jsonplaceholder.typicode.com';

        const endpoint = `${baseUrl}${ENDPOINTS.users}`;

        try {
            const { data } = await this.axios.get(endpoint);

            return data ? toUserOutputDtoCollection(data) : [];
        } catch (e) {
            const { status, statusText } = e.response;

            throw new IntegrationError(statusText, status);
        }
    }
}
