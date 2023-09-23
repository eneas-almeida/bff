import { AxiosInstance } from 'axios';
import { UserIntegrationInterface, UserIntegrationOutputDto } from './contracts';

export class UserIntegration implements UserIntegrationInterface {
    constructor(private readonly axiosInstrance: AxiosInstance) {}

    async findOneById(id: string): Promise<UserIntegrationOutputDto | null> {
        return null;
    }

    async findOneByDocument(document: string): Promise<UserIntegrationOutputDto | null> {
        return null;
    }

    async list(): Promise<UserIntegrationOutputDto[]> {
        return [];
    }
}
