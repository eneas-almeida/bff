import { AxiosInstance } from 'axios';
import { UserIntegrationInterface, UserIntegrationOutputDto } from './contracts';
import { toUserOutputDto, toUserOutputDtoCollection } from './mappers';

const ENDPOINTS = {
    users: '/users',
};

export class UserIntegration implements UserIntegrationInterface {
    constructor(private readonly axiosInstrance: AxiosInstance) {}

    async findOneById(id: number): Promise<UserIntegrationOutputDto | null> {
        const baseUrl = 'https://jsonplaceholder.typicode.com';

        const endpoint = `${baseUrl}${ENDPOINTS.users}/${id}`;

        try {
            const { data } = await this.axiosInstrance.get(endpoint);
            return data ? toUserOutputDto(data) : null;
        } catch (e) {
            throw e;
        }
    }

    async findOneByEmail(email: string): Promise<UserIntegrationOutputDto | null> {
        const baseUrl = 'https://jsonplaceholder.typicode.com';

        const endpoint = `${baseUrl}${ENDPOINTS.users}`;

        try {
            const { data } = await this.axiosInstrance.get(endpoint);
            const existsUser = data ? data.find((user: any) => user.email === email) : null;
            return existsUser ? toUserOutputDto(existsUser) : null;
        } catch (e) {
            throw e;
        }
    }

    async list(): Promise<UserIntegrationOutputDto[]> {
        const baseUrl = 'https://jsonplaceholder.typicode.com';

        const endpoint = `${baseUrl}${ENDPOINTS.users}`;

        try {
            const { data } = await this.axiosInstrance.get(endpoint);
            return data ? toUserOutputDtoCollection(data) : [];
        } catch (e) {
            throw e;
        }
    }
}
