// src/features/ProductSearch/components/ResultsTable.tsx
import React from "react";
import { Product } from "@/types/Product";

interface ResultsTableProps {
  products: Product[];
  sortProducts: (parameter: keyof Product) => void;
  sortOrder: boolean; // true: asc, false: desc
  sortParameter: string;
}

export const ResultsTable: React.FC<ResultsTableProps> = ({
  products,
  sortProducts,
  sortOrder,
  sortParameter = 'price',
}) => {
  const getSortIcon = (column: string) => {
    if (sortParameter === column) {
      return sortOrder ? "↓" : "↑";
    }
    return "";
  };

  if (products.length>0) {// Cambiar por condición de si hay productos
    return (
      <table>
        <caption>Cantidad de productos encontrados: {products.length}</caption>
        <thead>
          <tr>
            <th onClick={() => sortProducts("supermarket")}>
              Supermercado {getSortIcon("supermarket")}
            </th>
            <th onClick={() => sortProducts("title")}>
              Producto {getSortIcon("title")}
            </th>
            <th onClick={() => sortProducts("price")}>
              Precio {getSortIcon("price")}
            </th>
            <th onClick={() => sortProducts("unit")}>
              Precio neto {getSortIcon("unit")}
            </th>
            <th>Imagen</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <a href={product.search} target="_blank">
                  {product.supermarket}
                </a>
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                {product.unit ? `${product.unit[0]}: ${product.unit[1]}` : "N/A"}
              </td>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <a href={product.link} target="_blank">
                  Ver producto
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};
