export interface IApiServiceSearchParams {
    q?: string;
    page?: number;
    limit?: number;
    type?: string;
    fuzzines?: 0 | 1 | 2;
}