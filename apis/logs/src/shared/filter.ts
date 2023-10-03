type OrderType = 'asc' | 'desc';

export interface FilterInputDto {
    q?: string;
    page?: number;
    pageSize?: number;
    skip?: number;
    order?: string;
    orderBy?: OrderType;
}
