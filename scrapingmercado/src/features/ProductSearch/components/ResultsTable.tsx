/** @format */

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
  sortParameter,
}) => {
  const getSortIcon = (column: string) => {
    if (sortParameter === column) {
      return sortOrder ? "↓" : "↑";
    }
    return "";
  };

  if (products.length > 0) {
    return (
      <table style={{ border: "1px solid black" }}>
        <caption>Cantidad de productos encontrados: {products.length}</caption>
        <thead>
          <tr>
            <th onClick={() => sortProducts("supermarket")}>
              Supermercado {getSortIcon("supermarket")}
            </th>
            <th onClick={() => sortProducts("title")}>
              Producto {getSortIcon("title")}
            </th>
            <th onClick={() => sortProducts("discountPrice")}>
              Precio {getSortIcon("discountPrice")}
            </th>
            <th onClick={() => sortProducts("discountPriceUnit")}>
              Precio neto {getSortIcon("discountPriceUnit")}
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
              <td>
                {product.discountPrice !== product.price ? (
                  <s>${product.price}</s>
                ) : (
                  ""
                )}
                ${product.discountPrice?.toFixed(2)}
              </td>
              <td>
                {product.unit ? `${product.unit[0]}: ` : "N/A"}
                {product.unit?.[1] &&
                product.unit[1] !== product.discountPriceUnit ? (
                  <s>${product.unit[1]}</s>
                ) : (
                  ""
                )}
                ${product.discountPriceUnit?.toFixed(2)}
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
