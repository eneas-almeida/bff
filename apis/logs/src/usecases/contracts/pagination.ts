export interface PaginationDto {
    page: number;
    limit: number;
    total: number;
    pages: number;
    offset: number;
    hasNext: boolean;
    hasPrevious: boolean;
    next: number | null;
    previous: number | null;
}
