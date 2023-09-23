import { AxiosInstance } from 'axios';
import { OrderIntegrationInterface, OrderIntegrationOutputDto } from './contracts';

export class OrderIntegration implements OrderIntegrationInterface {
    constructor(private readonly axiosInstance: AxiosInstance) {}

    findOneById(id: string): Promise<OrderIntegrationOutputDto> {
        throw new Error('Method not implemented.');
    }

    list(): Promise<OrderIntegrationOutputDto[]> {
        throw new Error('Method not implemented.');
    }
}
