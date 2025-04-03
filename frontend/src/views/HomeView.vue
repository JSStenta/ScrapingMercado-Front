<!-- @prettier -->
<script setup>
	import { ref } from "vue";
	// import { buscarProductos } from "@/services/api";
	import Productos from "@/components/productos/index";
	import formulario from "@/components/encabezado/formulario";
	// import FormularioBusqueda from "@/components/encabezado/formulario/busqueda";
	// import SeleccionSupermercados from "@/components/encabezado/formulario/supermercados";

	const productos = ref([]);
	const manejarProductos = (productosRecibidos) => {
		productos.value = productosRecibidos;
	};
	// const buscar = async (busqueda, supermercados) =>
	// 	(productos.value = await buscarProductos(busqueda, supermercados));
</script>

<template>
	<!-- <FormularioBusqueda @consulta="buscar" /> -->
	<!-- <SeleccionSupermercados /> -->
	<!-- <SeleccionSupermercados @supermercadosSeleccionados="buscar" /> -->
	<formulario/>
	<div>
		<h1 class="text-3xl font-bold text-blue-500">Productos</h1>
		<Productos/>
	</div>
</template>
