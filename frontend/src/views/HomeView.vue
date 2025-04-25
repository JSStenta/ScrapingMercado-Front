<!-- @prettier -->
<script setup>
	import Productos from "@/components/productos/index";
	import formulario from "@/components/encabezado/formulario";
</script>

<template>
	<!-- <FormularioBusqueda @consulta="buscar" /> -->
	<!-- <SeleccionSupermercados /> -->
	<!-- <SeleccionSupermercados @supermercadosSeleccionados="buscar" /> -->
	<formulario />
	<Productos />
</template>
