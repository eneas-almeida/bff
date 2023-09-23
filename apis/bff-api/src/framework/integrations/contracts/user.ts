export interface UserIntegrationOutputDto {
    id: string;
    name: string;
    document: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserIntegrationInterface {
    findOne(userId: string): Promise<UserIntegrationOutputDto>;
    list(): Promise<UserIntegrationOutputDto[]>;
}
