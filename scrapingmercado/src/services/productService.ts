// src/services/productService.ts
export const fetchProducts = async (product: string, supermarkets: string[]): Promise<any> => {
    const queryParams = new URLSearchParams({
        product,
        supermarkets: supermarkets.join(",")||"coto",
    });

    try {
        console.log(queryParams.toString());
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search?${queryParams.toString()}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error en productService.ts: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
