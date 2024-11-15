// src/types/Product.ts
export interface Product {
    id: string; // o el tipo de dato que tenga el identificador único
    supermarket: string;
    search: string;
    title: string;
    price: number;
    unit?: [string, number];
    image: string;
    link: string;
}
