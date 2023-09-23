import { AxiosInstance } from 'axios';
import { UserIntegrationInterface, UserIntegrationOutputDto } from './contracts';

export class UserIntegration implements UserIntegrationInterface {
    constructor(private readonly axiosInstrance: AxiosInstance) {}

    findOneById(id: string): Promise<UserIntegrationOutputDto> {
        console.log('chegaaaaa aki!!!!');
        throw new Error('Method not implemented.');
    }

    findOneByDocument(document: string): Promise<UserIntegrationOutputDto> {
        throw new Error('Method not implemented.');
    }

    list(): Promise<UserIntegrationOutputDto[]> {
        throw new Error('Method not implemented.');
    }
}
