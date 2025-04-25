<!-- @prettier -->
<script setup>
	defineProps(["producto"]);
	// import type { Producto } from "@/types/producto";
	// const props = defineProps<{
	//     producto: Producto;
	// }>();
</script>
<template>
	<tr>
		<td>
			<a :href="producto.busqueda" target="_blank">
				{{ producto.supermercado }}
			</a>
		</td>
		<td>{{ producto.titulo }}</td>
		<td>
			${{ producto.precioDescuento !== producto.precio ? producto.precio : "" }}
			{{ producto.precioDescuento?.toFixed(2) }}
		</td>
		<td>
			{{ producto.unidad ? `${producto.unidad}: ` : "N/A" }}
			{{
				producto.precioUnidad !== producto.precioDescuentoUnidad
					? `$${producto.precioUnidad}`
					: ""
			}}
			{{ producto.precioDescuentoUnidad?.toFixed(2) }}
		</td>
		<td>
			<img :src="producto.imagen" :alt="producto.titulo" :height="100" />
		</td>
		<td>
			<a :href="producto.enlace" target="_blank"> Ver producto </a>
		</td>
	</tr>
</template>
