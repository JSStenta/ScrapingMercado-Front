<!-- @prettier -->
<template>
	<div class="selector-orden">
		<select
			id="orden-atributo"
			v-model="ordenSeleccionado"
			@change="cambiarOrden"
		>
			<option
				v-for="atributo in atributos"
				:value="JSON.stringify(atributo.value)"
			>
				{{ atributo.label }}
			</option>
		</select>
	</div>
</template>

<script setup>
	import atributos from "@/data/ordenamiento";
	import { useProductosStore } from "@/store/productos";
	import { ref } from "vue";
	const ordenSeleccionado = ref(JSON.stringify(atributos[0].value));
	const cambiarOrden = (event) => {
		const ordenSeleccionado = JSON.parse(event.target.value);
		const productosStore = useProductosStore();
		productosStore.cambiarOrden(
			ordenSeleccionado.parametro,
			ordenSeleccionado.orden
		);
	};
</script>

<style scoped>
	.orden-selector {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	select {
		padding: 5px;
		border-radius: 4px;
		border: 1px solid #ccc;
	}
</style>
