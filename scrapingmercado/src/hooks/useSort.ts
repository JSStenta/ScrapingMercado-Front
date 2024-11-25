// src/hooks/useSort.ts
import { useState, useEffect } from 'react';
import { Product } from '@/types/Product';

export const useSort = <product extends Product>(
    products: product[],
    initialSortParameter: keyof product
) => {
    const [sortedProducts, setSortedProducts] = useState<Product[]>(products); // sorted products
    const [sortParameter, setSortParameter] = useState<keyof product>(initialSortParameter); // parameter to sort by
    const [loading, setLoading] = useState<boolean>(false); // loading state
    const [sortOrder, setSortOrder] = useState<boolean>(true);// true: asc, false: desc

    const sortProducts = (parameter: keyof Product) => {
        setLoading(true);
        setSortParameter(parameter);
        const newSortOrder = sortParameter === parameter ? !sortOrder : true;
        setSortOrder(newSortOrder);

        const sorted = [...products].sort((a, b) => {
            const aParam = (a[parameter] ?? a.discountPrice);
            const bParam = (b[parameter] ?? b.discountPrice);

            if (!a[parameter]) return 1;
            if (!b[parameter]) return -1;

            return (newSortOrder ? (aParam < bParam) ? -1 : 1 : (aParam < bParam) ? 1 : -1);
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
