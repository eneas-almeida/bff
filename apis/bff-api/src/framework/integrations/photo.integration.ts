import { AxiosInstance } from 'axios';
import { PhotoIntegrationInterface, PhotoIntegrationOutputDto } from './contracts';

export class PhotoIntegration implements PhotoIntegrationInterface {
    constructor(private readonly axiosInstance: AxiosInstance) {}

    async findOneById(id: number): Promise<PhotoIntegrationOutputDto | null> {
        return null;
    }

    async list(): Promise<PhotoIntegrationOutputDto[]> {
        return [];
    }
}
