export interface PhotoIntegrationOutputDto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface PhotoIntegrationInterface {
    findOneById(id: number): Promise<PhotoIntegrationOutputDto | null>;
    list(): Promise<PhotoIntegrationOutputDto[]>;
}
