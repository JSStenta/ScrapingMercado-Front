<!-- @prettier -->
<template>
	<header>
		<h1>Comparador de precios</h1>
		<form class="FormularioBusqueda" @submit.prevent="busquedaProducto">
			<input type="text" v-model="consulta" placeholder="Buscar producto..." />
			<CheckboxSupermercados @supermercadosSeleccionados="supermercados" />
			<button type="submit">Buscar</button>
		</form>
		<div v-if="supermercadosSeleccionados.length > 0">
			{{ supermercadosSeleccionados }}
		</div>
	</header>
</template>

<script setup>
	import { ref } from "vue";
	import { buscarProductos } from "@/services/api";
	import CheckboxSupermercados from "./formulario/supermercados";
	import { useProductosStore } from "@/store/productos";

	// Usamos reactive para el arreglo supermercados
	const consulta = ref("");
	const supermercadosSeleccionados = ref([]); // Array de supermercados seleccionados
	// const enviar = defineEmits(["productos"]);

	const supermercados = (seleccionados) => {
		supermercadosSeleccionados.value = seleccionados;
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
		const productosStore = useProductosStore();
		const productos = await buscarProductos(consulta.value, supermercadosSeleccionados.value);
		// productosStore.limpiarProductos(); // Limpiar productos antes de agregar nuevos
		productosStore.agregarProductos(productos);
	};

	import { watch } from "vue";

	watch(supermercadosSeleccionados, (newSelection) => {
		console.log("Supermercados seleccionados:", newSelection);
	});
</script>
