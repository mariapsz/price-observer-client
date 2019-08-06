export interface ProductsListProps {
    productsList: any[],
    handleProductsListChanges: () => void,
    handleSortByName: () => void,
    handleSortByCurrentPrice: () => void,
    handleSortByExpectedPrice: () => void,
    handleSortByAddedAt: () => void,
}