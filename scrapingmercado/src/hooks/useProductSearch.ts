// src/hooks/useProductSearch.ts
import { useState } from 'react';
import { Product } from '@/types/Product';
import { fetchProducts } from '../services/productService';

export const useProductSearch = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const searchProducts = async (product: string, supermarkets: string[]) => {
        setLoading(true);
        setError(null);
        try {
            const results = await fetchProducts(product, supermarkets);
            setProducts(results);
        } catch (err) {
            setError('Error al cargar los productos.');
        } finally {
            setLoading(false);
        }
    };

    return {
        products,
        loading,
        error,
        searchProducts,
    };
};
