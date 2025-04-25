// @prettier
import { defineStore } from 'pinia';
import { Producto } from '../types/producto.ts';
// import { supermercado } from "../types/supermercado.ts";

export const useProductosStore = defineStore('productos', {
  state: () => ({ productos: [] as Producto[], productosAPI: [] as Producto[], orden: { parametro: 'precio' as keyof Producto, ascendente: true as boolean} }),
  getters: {
    cargarProductos: (state) => state.productos,
  },
  actions: {
    filtrarPorProducto(nombre: string) {
      // console.log('Filtrando por producto: ', nombre);
      const productosFiltrados = this.productosAPI.filter((producto: Producto) => producto.titulo.toLowerCase().includes(nombre.toLowerCase()))
      this.productos = productosFiltrados.length 
      ? productosFiltrados
      : this.productosAPI;
      console.log('Filtrando por producto: ', nombre, 'Cantidad filtrados: ', this.productos.length);
    },
    filtrarPorSupermercado(nombre: string) {
      console.log('Filtrando por supermercado: ', nombre);
      this.productos = this.productosAPI.filter((producto: Producto) => producto.supermercado === nombre);
    },
    agregarProductos(productos: Producto[]) {
      this.productosAPI = [];
      this.productosAPI.push(...productos);
      this.productos = this.productosAPI;
      this.ordenar();
    },
    limpiarProductos() {
      this.productosAPI = [];
    },
    cambiarOrden(parametro: keyof Producto, ascendente: boolean) {
      this.orden.parametro = parametro;
      this.orden.ascendente = ascendente;
      this.ordenar();
    },
    ordenar() {
      const param: keyof Producto = this.orden.parametro;
      const orden = this.orden.ascendente;
      if (this.productos.length === 0) return;
      console.log('Ordenando productos por:', param, 'Orden:', orden);
      this.productos.sort((a: Producto, b: Producto) => {
        const aParam = (a[param] ?? a.precio);
        const bParam = (b[param] ?? b.precio);
        if (!aParam) return 1;
        if (!bParam) return -1;
        return (orden ? (aParam < bParam) ? -1 : 1 : (aParam < bParam) ? 1 : -1);
      });
    },
  }
})