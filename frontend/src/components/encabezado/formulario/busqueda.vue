<!-- @prettier -->
<script setup>
	import { ref } from "vue";

	import supermercados from "@/data/supermercados.ts";

	// Usamos reactive para el arreglo supermercados
	const consulta = ref("");
	const enviar = defineEmits();
	// Función para realizar la búsqueda

	const enviarBusqueda = async () => {
		enviar("productos", productos);
	};
</script>

<template>
	<header>
		<h1>Comparador de precios</h1>
		<form class="Formulario-Busqueda" @submit.prevent="enviarBusqueda">
			<input type="text" v-model="consulta" placeholder="Buscar producto..." />
		</form>
	</header>
</template>
