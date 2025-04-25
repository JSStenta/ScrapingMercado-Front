// src/types/Product.ts
export interface Producto {
    id: string;
    supermercado: string;
    busqueda: string;
    titulo: string;
    precio: number;
    unidad?: string;
    precioUnidad?: number;
    imagen: string;
    enlace: string;
    precioDescuento: number;
    precioDescuentoUnidad?: number;
}
