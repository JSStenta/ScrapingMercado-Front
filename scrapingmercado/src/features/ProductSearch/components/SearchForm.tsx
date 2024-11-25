/** @format */
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
  onUpdateDiscount: (supermarket: Supermarket, discount: number) => void;
  onSearchTermChange: (term: string) => void;
  isLoading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  onToggleStrictFilter,
  onUpdateDiscount,
  onSearchTermChange,
  isLoading,
}) => {
  const [product, setProduct] = useState<string>("");
  const [selectedSupermarkets, setSelectedSupermarkets] = useState<
    Map<Supermarket, boolean>
  >(new Map(supermarkets.map((supermarket) => [supermarket, false])));
  const [isStrict, setIsStrict] = useState<boolean>(true);

  const handleDiscountChange = (supermarket: Supermarket, value: string) => {
    const discount = parseFloat(value) || 0;
    onUpdateDiscount(supermarket, discount);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const selectedSupermarketValues = Array.from(selectedSupermarkets.keys())
      .filter((key) => selectedSupermarkets.get(key))
      .map((supermarket) => supermarket.value);
    await onSearch(product, selectedSupermarketValues);
  };

  const handleProductChange = (term: string) => {
    setProduct(term);
    onSearchTermChange(term);
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
      <fieldset>
        <ProductSearchInput
          product={product}
          onProductChange={handleProductChange}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Buscando..." : "Buscar"}
        </button>
        <StrictFilterCheckbox
          isStrict={isStrict}
          onToggleStrictFilter={(checked) => {
            setIsStrict(checked);
            onToggleStrictFilter(checked);
          }}
        />
      </fieldset>

      <fieldset>
        {supermarkets.map((supermarket) => (
          <SupermarketCheckbox
            key={supermarket.value}
            supermarket={supermarket}
            isSelected={selectedSupermarkets.get(supermarket) || false}
            onChange={handleSupermarketChange}
          />
        ))}
      </fieldset>
      <fieldset>
        {Array.from(selectedSupermarkets.entries()).filter(
          ([_, isSelected]) => isSelected
        ).length > 0
          ? "Procentaje de descuento:"
          : ""}
        {Array.from(selectedSupermarkets.entries())
          .filter(([_, isSelected]) => isSelected)
          .map(([supermarket]) => (
            <div key={supermarket.name}>
              {supermarket.name}:
              <input
                type="number"
                min="0"
                max="99"
                step="1"
                onChange={(e) =>
                  handleDiscountChange(supermarket, e.target.value)
                }
              />
            </div>
          ))}
      </fieldset>
    </form>
  );
};
