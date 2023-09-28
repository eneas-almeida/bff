import { AxiosInstance } from 'axios';
import { PhotoIntegrationInterface, PhotoIntegrationOutputDto } from './contracts';

export class PhotoIntegration implements PhotoIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    async findAll(): Promise<PhotoIntegrationOutputDto[]> {
        return [];
    }

    async findOneById(id: number): Promise<PhotoIntegrationOutputDto | null> {
        return null;
    }
}
