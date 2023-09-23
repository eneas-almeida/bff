export interface OrderIntegrationOutputDto {
    id: string;
    name: string;
}

export interface OrderIntegrationInterface {
    findOneById(orderId: string): Promise<OrderIntegrationOutputDto>;
    list(): Promise<OrderIntegrationOutputDto[]>;
}
