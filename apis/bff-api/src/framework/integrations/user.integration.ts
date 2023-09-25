import { AxiosInstance } from 'axios';
import { UserIntegrationInterface, UserIntegrationOutputDto } from './contracts';
import { checkError, findOneUserByEmailInCollection, getEndpoint } from './helpers';
import { toUserIntegrationOutputDto, toUserIntegrationOutputDtoCollection } from './mappers';

export class UserIntegration implements UserIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    async findAll(): Promise<UserIntegrationOutputDto[]> {
        try {
            const { data } = await this.axios.get(getEndpoint());

            return data && data.length ? toUserIntegrationOutputDtoCollection(data) : [];
        } catch (e) {
            checkError(e);
        }
    }

    async findOneByEmail(email: string): Promise<UserIntegrationOutputDto | null> {
        try {
            const { data } = await this.axios.get(getEndpoint());

            const users = data && data.length ? findOneUserByEmailInCollection(data, email) : null;

            return users ? toUserIntegrationOutputDto(users) : null;
        } catch (e) {
            checkError(e);
        }
    }

    async findOneById(id: number): Promise<UserIntegrationOutputDto | null> {
        try {
            const endpoint = `${getEndpoint()}/id/${id}`;

            const { data } = await this.axios.get(endpoint);

            return data ? toUserIntegrationOutputDto(data) : null;
        } catch (e) {
            checkError(e);
        }
    }
}
