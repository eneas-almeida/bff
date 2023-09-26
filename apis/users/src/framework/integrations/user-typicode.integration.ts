import { AxiosInstance } from 'axios';
import { UserIntegrationInterface, UserIntegrationOutputDto } from './contracts';
import { findOneUserByEmailInCollection, getEndpoint } from './helpers';
import { toUserIntegrationOutputDto, toUserIntegrationOutputDtoCollection } from './mappers';

export class UserTipycodeIntegration implements UserIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    async findAll(): Promise<UserIntegrationOutputDto[]> {
        try {
            const { data } = await this.axios.get(getEndpoint());

            return data && data.length ? toUserIntegrationOutputDtoCollection(data) : [];
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneByEmail(email: string): Promise<UserIntegrationOutputDto | null> {
        try {
            const { data } = await this.axios.get(getEndpoint());

            const users = data && data.length ? findOneUserByEmailInCollection(data, email) : null;

            return users ? toUserIntegrationOutputDto(users) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneById(id: number): Promise<UserIntegrationOutputDto | null> {
        try {
            const endpoint = `${getEndpoint()}/${id}`;

            const { data } = await this.axios.get(endpoint);

            return data ? toUserIntegrationOutputDto(data) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
