// src/hooks/useStrictFilter.ts
import { useState, useEffect } from 'react';
import { Product } from '@/types/Product';
import { normalizeText } from '@/utils/normalizeText';

/**
 * Custom hook to filter products based on a search term with an optional strict filter.
 *
 * @param {Product[]} products - The list of products to filter.
 * @param {string} searchTerm - The term to search for within the product titles.
 * @returns {Object} - An object containing:
 *   - `setFilteredProducts`: Function to manually set the filtered products.
 *   - `filteredProducts`: The list of filtered products.
 *   - `loading`: Boolean indicating if the filtering is in progress.
 *   - `setStrictFilter`: Function to enable or disable strict filtering.
 */
export const useStrictFilter = (products: Product[], searchTerm: string) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [strictFilter, setStrictFilter] = useState<boolean>(false);

    const applyStrictFilter = () => {
        setLoading(true);
        if (strictFilter) {
            const keywords = searchTerm.split(' ').map(normalizeText);
            const filtered = products.filter(product =>
                keywords.every(keyword => normalizeText(product.title).includes(keyword))
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
        setLoading(false);
    };

    useEffect(() => { applyStrictFilter(); }, [strictFilter, products, searchTerm]);

    return {
        setFilteredProducts,
        filteredProducts,
        loading,
        setStrictFilter,
    };
};
