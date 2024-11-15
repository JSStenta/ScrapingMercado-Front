// src/features/ProductSearch/components/SearchForm.tsx
import React, { useState } from "react";
import { Supermarket } from "@/types/Supermarket";
import { supermarkets } from "@/data/supermarkets";
import ProductSearchInput from "./ProductSearchInput";
import SupermarketCheckbox from "./SupermarketCheckbox";
import StrictFilterCheckbox from "./StrictFilterCheckbox";

interface SearchFormProps {
  onSearch: (product: string, supermarkets: string[]) => Promise<any[]>;
  onToggleStrictFilter: (strict: boolean) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  onToggleStrictFilter,
}) => {
  const [product, setProduct] = useState<string>("");
  const [selectedSupermarkets, setSelectedSupermarkets] = useState<Map<Supermarket, boolean>>(new Map(supermarkets.map((supermarket) => [supermarket, false])));
  const [isStrict, setIsStrict] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const selectedSupermarketValues = Array.from(selectedSupermarkets.keys())
      .filter((key) => selectedSupermarkets.get(key))
      .map((supermarket) => supermarket.value);
    await onSearch(product, selectedSupermarketValues);
  };

  const handleSupermarketChange = (
    supermarket: Supermarket,
    checked: boolean
  ) => {
    setSelectedSupermarkets((prev) => {
      const newSelectedSupermarkets = new Map(prev);
      newSelectedSupermarkets.set(supermarket, checked);
      return newSelectedSupermarkets;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProductSearchInput product={product} onProductChange={setProduct} />
      <div>
        {supermarkets.map((supermarket) => (
          <SupermarketCheckbox
            key={supermarket.value}
            supermarket={supermarket}
            isSelected={selectedSupermarkets.get(supermarket) || false}
            onChange={handleSupermarketChange}
          />
        ))}
      </div>
      <StrictFilterCheckbox
        isStrict={isStrict}
        onToggleStrictFilter={(checked) => {
          setIsStrict(checked);
          onToggleStrictFilter(checked);
        }}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
