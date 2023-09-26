export interface PhotoIntegrationOutputDto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface PhotoIntegrationInterface {
    findAll(): Promise<PhotoIntegrationOutputDto[]>;
    findOneById(id: number): Promise<PhotoIntegrationOutputDto | null>;
}
