import { AxiosInstance } from 'axios';
import { UserIntegrationInterface, UserIntegrationOutputDto } from './contracts';
import { IntegrationError } from './errors';
import { checkHttpRequest, findOneUserByEmailInCollection, getEndpoint } from './helpers';
import { toUserIntegrationOutputDto, toUserIntegrationOutputDtoCollection } from './mappers';

export class UserIntegration implements UserIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    async findAll(): Promise<UserIntegrationOutputDto[]> {
        try {
            const { data } = await this.axios.get(getEndpoint());

            return data && data.length ? toUserIntegrationOutputDtoCollection(data) : [];
        } catch (e) {
            checkHttpRequest(e);

            const { status, statusText } = e.response;

            throw new IntegrationError(statusText, status);
        }
    }

    async findOneByEmail(email: string): Promise<UserIntegrationOutputDto | null> {
        try {
            const { data } = await this.axios.get(getEndpoint());

            const users = data && data.length ? findOneUserByEmailInCollection(data, email) : null;

            return users ? toUserIntegrationOutputDto(users) : null;
        } catch (e) {
            checkHttpRequest(e);

            const { status, statusText } = e.response;

            throw new IntegrationError(statusText, status);
        }
    }

    async findOneById(id: number): Promise<UserIntegrationOutputDto | null> {
        try {
            const endpoint = `${getEndpoint()}/id/${id}`;

            const { data } = await this.axios.get(endpoint);

            return data ? toUserIntegrationOutputDto(data) : null;
        } catch (e) {
            checkHttpRequest(e);

            const { status, statusText } = e.response;

            if (status === 404) return null;

            throw new IntegrationError(statusText, status);
        }
    }
}
