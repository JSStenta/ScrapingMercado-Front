<!-- @prettier -->
<script setup>
	import Producto from "./Producto.vue";
	import { storeToRefs } from "pinia"; // Importa storeToRefs para trabajar con reactividad
	import { useProductosStore } from "@/store/productos";

	// Obtén el store y haz que los productos sean reactivos
	const productosStore = useProductosStore();
	const { productos } = storeToRefs(productosStore); // Usa storeToRefs para que los productos sean reactivos
</script>

<template>
	<table>
		<caption>
			Cantidad de productos encontrados:
			{{
				productos.length
			}}
		</caption>
		<thead>
			<tr>
				<th>Supermercado</th>
				<th>Producto</th>
				<th>Precio</th>
				<th>Precio por cantidad</th>
				<th>Imagen</th>
				<th>Enlace</th>
			</tr>
		</thead>
		<tbody>
			<Producto
				v-for="producto in productos"
				:key="producto.id"
				:producto="producto"
			/>
		</tbody>
	</table>
</template>
