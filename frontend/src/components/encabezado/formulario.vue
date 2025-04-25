<!-- @prettier -->
<template>
	<header>
		<h1>Comparador de precios</h1>
		<form class="FormularioBusqueda" @submit.prevent="busquedaProducto">
			<input
				type="text"
				v-model="consulta"
				@input="filtrarBusqueda"
				placeholder="Buscar producto..."
			/>
			<label v-if="productosStore.productos.length > 0" for="FormularioBusqueda">Escribir para refinar la busqueda...</label>
			<CheckboxSupermercados @supermercadosSeleccionados="supermercados" />
			{{ supermercadosSeleccionados }}
			<Orden />
			<button type="submit">Buscar</button>
		</form>
	</header>
</template>

<script setup>
	import { ref } from "vue";
	import { buscarProductos } from "@/services/api";
	import CheckboxSupermercados from "./formulario/supermercados";
	import Orden from "./formulario/orden";
	import { useProductosStore } from "@/store/productos";

	// Usamos reactive para el arreglo supermercados
	const consulta = ref("");
	const supermercadosSeleccionados = ref([]);
	const productosStore = useProductosStore();

	const supermercados = (seleccionados) => {
		supermercadosSeleccionados.value = seleccionados;
	};

	const filtrarBusqueda = () => {
		productosStore.filtrarPorProducto(consulta.value);
	};

	// Función para realizar la búsqueda
	const busquedaProducto = async () => {
		if (!consulta.value) {
			alert("Por favor, ingresa un producto para buscar.");
			return;
		}
		if (!supermercadosSeleccionados.value.length) {
			alert("Por favor, selecciona al menos un supermercado.");
			return;
		}

		// Realizar la consulta con los supermercados seleccionados
		const productos = await buscarProductos(
			consulta.value,
			supermercadosSeleccionados.value
		);
		productosStore.agregarProductos(productos);
	};
</script>
