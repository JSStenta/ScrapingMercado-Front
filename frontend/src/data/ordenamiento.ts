/**
 * @prettier
 *
 * Este archivo contiene las opciones de ordenamiento para los productos.
 *
 * Cada opción de ordenamiento está representada como un objeto con las siguientes propiedades:
 * - `label`: Una cadena que describe cómo se ordenarán los productos (por ejemplo, "Precio (menor a mayor)").
 * - `value`: Un objeto que contiene los parámetros de ordenamiento:
 *   - `parametro`: Una cadena que indica el atributo del producto por el cual se ordenará (por ejemplo, "precio", "cantidad", "nombre").
 *   - `orden`: Un valor booleano que indica el orden del ordenamiento:
 *     - `true`: Orden ascendente.
 *     - `false`: Orden descendente.
 */
const atributos: {
	label: string;
	value: { parametro: string; orden: boolean };
}[] = [
	{
		label: "Menor precio",
		value: { parametro: "precio", orden: true },
	},
	{
		label: "Mayor precio",
		value: { parametro: "precio", orden: false },
	},
	{
		label: "Menor precio por cantidad",
		value: { parametro: "precioUnidad", orden: true },
	},
	{
		label: "Mayor precio por cantidad",
		value: { parametro: "precioUnidad", orden: false },
	},
	{ label: "Nombre (A-Z)", value: { parametro: "titulo", orden: true } },
	{ label: "Nombre (Z-A)", value: { parametro: "titulo", orden: false } },
];
export default atributos;
