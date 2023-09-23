export interface OrderIntegrationOutputDto {
    id: string;
    name: string;
}

export interface OrderIntegrationInterface {
    findOne(orderId: string): Promise<OrderIntegrationOutputDto>;
    list(): Promise<OrderIntegrationOutputDto[]>;
}
