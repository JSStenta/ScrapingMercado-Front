// @prettier
import { defineStore } from 'pinia';
import { Producto } from '../types/producto.ts';
// import supermercados  from '../data/supermercados.ts';

export const useProductosStore = defineStore('productos', {
  state: () => ({ productos: [] as Producto[], orden: false }),
  getters: {
    obtenerOrdenados: (state) => (parametro: keyof Producto) => {
      return state.productos.sort((a, b) => {
        const aParam = (a[parametro] ?? a.precioDescuento);
        const bParam = (b[parametro] ?? b.precioDescuento);

        if (!a[parametro]) return 1;
        if (!b[parametro]) return -1;

        return (state.orden ? (aParam < bParam) ? -1 : 1 : (aParam < bParam) ? 1 : -1);
      });
    }
  },
  actions: {
    agregarProducto(producto: Producto) {
      this.productos.push(producto);
    },
    agregarProductos(productos: Producto[]) {
      this.productos = [];
      this.productos.push(...productos);
    },
    limpiarProductos() {
      this.productos = [];
    },
    cambiarOrden() {
      this.orden = !this.orden;
    },
    // aplicarDescuento() {
    //   this.productos = this.productos.map((producto) => {
    //     const descuento = supermercados.find((supermercado) => supermercado.nombre === producto.supermercado)?.descuento || 0;
    //     if (descuento !== 0) {
    //       producto.precioDescuento = producto.precio * descuento;
    //     }
    //     return producto;
    //   });
    //   console.log('Descuentos aplicados a los productos:', this.productos);
    // }
  }
})

// export const useBusquedaStore = defineStore('busqueda', {
//   state: () => ({ busqueda: [] as string[] }),
//   getters: {
//     obtenerBusqueda: (state) => state.busqueda
//   },
//   actions: {
//     cambiarBusqueda(busqueda: string) {
//     }
//   }
// })