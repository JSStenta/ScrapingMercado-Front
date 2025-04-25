<!-- @prettier -->
<template>
	<label v-for="supermercado in supermercados" :key="supermercado.valor">
		<input
			type="checkbox"
			:value="supermercado.valor"
			v-model="supermercadosSeleccionados"
			@change="enviarSeleccion"
		/>
		<span>{{ supermercado.nombre }}</span>
	</label>
</template>
<script setup>
	import supermercados from "@/data/supermercados.ts";
	import { ref } from "vue";
	import { useProductosStore } from "@/store/productos";
	const supermercadosSeleccionados = ref([]);
	const enviar = defineEmits(["supermercadosSeleccionados"]);
	const productosStore = useProductosStore();
	const enviarSeleccion = () => {
		productosStore.filtrarPorSupermercado(supermercadosSeleccionados.value);
		enviar("supermercadosSeleccionados", supermercadosSeleccionados.value);
	};
</script>
