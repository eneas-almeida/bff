export interface Hateos {
    method: string;
    url: string;
    description?: string;
}

export interface HateosOutputDto {
    _links?: Hateos[];
}
