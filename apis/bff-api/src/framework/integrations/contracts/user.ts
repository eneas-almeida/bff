export interface UserIntegrationOutputDto {
    id: string;
    name: string;
    document: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserIntegrationInterface {
    findOneById(id: string): Promise<UserIntegrationOutputDto | null>;
    findOneByDocument(id: string): Promise<UserIntegrationOutputDto | null>;
    list(): Promise<UserIntegrationOutputDto[]>;
}
