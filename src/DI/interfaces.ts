export interface Service {
    getProductsList: (request: any, APIurl: string) => any;
    //(...) other methods like: login(), register etc.
}

export interface GetProductsListRequest {
    email: string,
    password: string,
}