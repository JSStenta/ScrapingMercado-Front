<!-- @prettier -->
<script setup>
    defineProps(["producto"]);
</script>
<template>
    <tr>
        <td>
            <a :href="producto.search" target="_blank">
                {{ producto.supermarket }}
            </a>
        </td>
        <td>{{ producto.title }}</td>
        <td>
            ${{ producto.discountPrice !== producto.price ? producto.price : "" }}
            {{ producto.discountPrice?.toFixed(2) }}
        </td>
        <td>
            {{ producto.unit ? `${producto.unit[0]}: ` : "N/A" }}
            ${{ producto.unit?.[1] && producto.unit[1] !== producto.discountPriceUnit ? producto.unit[1] : "" }}
            {{ producto.discountPriceUnit?.toFixed(2) }}
        </td>
        <td>
            <img :src="producto.image" :alt="producto.title" :height="100" />
        </td>
        <td>
            <a :href="producto.link" target="_blank"> Ver producto </a>
        </td>
    </tr>
</template>