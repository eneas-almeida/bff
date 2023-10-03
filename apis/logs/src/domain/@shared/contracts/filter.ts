type OrderType = 'asc' | 'desc';

export interface FilterEntityCustomInputDto<T> {
    fields?: T;
    page?: number;
    pageSize?: number;
    skip?: number;
    order?: T;
    orderBy?: OrderType;
}
