// src/hooks/useStrictFilter.ts
import { useState, useEffect } from 'react';
import { Product } from '@/types/Product';
import { normalizeText } from '@/utils/normalizeText';

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

    useEffect(() => {
        applyStrictFilter();
    }, [strictFilter, products, searchTerm]);

    return {
        setFilteredProducts,
        filteredProducts,
        loading,
        setStrictFilter,
    };
};
