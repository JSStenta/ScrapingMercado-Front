/**
 * @prettier
 */
const API_URL = "http://localhost:8000";

export async function buscarProductos(
	producto: string,
	supermercados: string[]
) {
	console.log("Llego a api.ts");
	const params = new URLSearchParams({
		producto,
		supermercados: supermercados.join(","),
	});
    console.log(params.toString())
	const response = await fetch(`${API_URL}/buscar?${params.toString()}`);
    // console.log(response)
	return response.json();
}
