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
            if (a[parameter] === undefined || b[parameter] === undefined) {
                if (a['price'] < b['price']) return newSortOrder ? -1 : 1;
                if (a['price'] > b['price']) return newSortOrder ? 1 : -1;
            } else {

                if (parameter == 'unit') {
                    if (a.unit === undefined || a.unit[1] === null) return 1;
                    if (b.unit === undefined || b.unit[1] === null) return -1;
                    if (a.unit[1] > b.unit[1]) {
                        return newSortOrder ? 1 : -1;
                    } else if (a.unit[1] < b.unit[1]) {
                        return newSortOrder ? -1 : 1;
                    }
                }
                if (a[parameter] < b[parameter]) return newSortOrder ? -1 : 1;
                if (a[parameter] > b[parameter]) return newSortOrder ? 1 : -1;
            }
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
