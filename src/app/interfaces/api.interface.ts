export interface IApiService {
    get: (path: string, options: { [param: string]: unknown }) => Promise<unknown>
}