// src/hooks/useSort.ts
import { useState, useEffect } from 'react';
import { Product } from '@/types/Product';

export const useSort = <product extends Product>(
    products: product[],
    initialSortParameter: keyof product
) => {
    const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
    const [sortParameter, setSortParameter] = useState<keyof product>(initialSortParameter);
    const [loading, setLoading] = useState<boolean>(false);
    const [sortOrder, setSortOrder] = useState<boolean>(true);// true: asc, false: desc

    const sortProducts = (parameter: keyof Product) => {
        setLoading(true);
        console.log('Products length:', products.length);
        console.log('Sorted products length:', sortedProducts.length);
        const newSortOrder = (products.length == sortedProducts.length) ? (sortParameter === parameter && !sortOrder) : sortOrder;
        setSortParameter(parameter);
        setSortOrder(newSortOrder);

        const sorted = [...products].sort((a, b) => {
            if (a[parameter] === undefined || b[parameter] === undefined) return 0;
            if (parameter == 'unit') {
                if (a.unit && b.unit && a.unit[1] > b.unit[1]) {
                    return newSortOrder ? 1 : -1;
                } else if (a.unit && b.unit && a.unit[1] < b.unit[1]) {
                    return newSortOrder ? -1 : 1;
                }
            }
            if (a[parameter] < b[parameter]) return newSortOrder ? -1 : 1;
            if (a[parameter] > b[parameter]) return newSortOrder ? 1 : -1;
            return 0;
        });
        setSortedProducts(sorted);
        setLoading(false);
    };
    useEffect(() => {
        setSortedProducts(products);
    }, [products]);
    return {
        sortedProducts,
        sortOrder,
        loading,
        sortProducts,
        sortParameter,
    };
};
