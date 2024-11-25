// src/features/ProductSearch/components/ProductSearchInput.tsx
import React, { useEffect } from "react";

interface ProductSearchInputProps {
  product: string;
  onProductChange: (product: string) => void;
}

const ProductSearchInput: React.FC<ProductSearchInputProps> = ({
  product,
  onProductChange,
}) => {
  return (
    <input
      type="text"
      value={product}
      onChange={(e) => onProductChange(e.target.value)}
      placeholder="Buscar producto..."
    />
  );
};

export default ProductSearchInput;