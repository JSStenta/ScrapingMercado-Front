// src/services/productService.ts
export const fetchProducts = async (producto: string, supermercados: string[]): Promise<any> => {
    const queryParams = new URLSearchParams({
        producto,
        supermercados: supermercados.join(",")||"coto",
    });

    try {
        console.log(`${process.env.NEXT_PUBLIC_API_URL}/buscar?${queryParams.toString()}`);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buscar?${queryParams.toString()}`, {
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
