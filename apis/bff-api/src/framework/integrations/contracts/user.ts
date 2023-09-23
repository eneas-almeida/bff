export interface UserIntegrationOutputDto {
    id: string;
    name: string;
    document: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserIntegrationInterface {
    findOneById(id: string): Promise<UserIntegrationOutputDto>;
    findOneByDocument(id: string): Promise<UserIntegrationOutputDto>;
    list(): Promise<UserIntegrationOutputDto[]>;
}
