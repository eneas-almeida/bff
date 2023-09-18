export interface OutputUserIntegrationDto {
    id: string;
    name: string;
    document: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface OutputOrderIntegrationDto {
    id: string;
    name: string;
}

export interface UserIntegrationInterface {
    findOne(userId: string): Promise<OutputUserIntegrationDto>;
    list(): Promise<OutputUserIntegrationDto[]>;
}

export interface OrderIntegrationInterface {
    findOne(orderId: string): Promise<OutputOrderIntegrationDto>;
    list(): Promise<OutputOrderIntegrationDto[]>;
}

export interface IntegrationInterface {
    users?: UserIntegrationInterface;
    orders?: OrderIntegrationInterface;
}
