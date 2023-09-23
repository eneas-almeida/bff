import { AxiosInstance } from 'axios';
import { OrderIntegrationInterface, OrderIntegrationOutputDto } from './contracts';

export class OrderIntegration implements OrderIntegrationInterface {
    constructor(private readonly axiosInstance: AxiosInstance) {}

    async findOneById(id: string): Promise<OrderIntegrationOutputDto | null> {
        return null;
    }

    async list(): Promise<OrderIntegrationOutputDto[]> {
        return [];
    }
}
