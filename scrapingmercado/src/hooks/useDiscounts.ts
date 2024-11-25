import { useState, useEffect } from "react";
import { Product } from "@/types/Product";
import { Supermarket } from "@/types/Supermarket";

export const useDiscounts = (products: Product[]) => {
  const [discounts, setDiscounts] = useState<Map<string, number>>(new Map());
  const [discountedProducts, setDiscountedProducts] = useState<Product[]>(products);

  // Función para actualizar los descuentos
  const updateDiscount = (supermarket: Supermarket, discount: number) => {
    console.log(`Descuento actualizado: ${supermarket.name} | ${supermarket.value} - ${discount}%`);
    setDiscounts((prev) => new Map(prev.set(supermarket.name, discount)));
  };

  // Aplicar descuentos a los productos
  useEffect(() => {
    const newDiscountedProducts = products.map((product) => {
      const discount = discounts.get(product.supermarket) ?? 0;
      const discountPrice = product.price - product.price * (discount / 100);
      const discountPriceUnit = product.unit ? product.unit[1] - product.unit[1] * (discount / 100) : 0;
      return { ...product, discountPrice, discountPriceUnit };
    });
    setDiscountedProducts(newDiscountedProducts);
  }, [products, discounts]);

  return {
    discountedProducts,
    updateDiscount,
  };
};
