export interface Product {
    name: string,
    brand: string,
    amount: number,
    unit: UnitProduct,
    price: number,
    date: string,
    id?: number,
}

export interface UnitProduct {
    name: string;
    acronym: string;
}