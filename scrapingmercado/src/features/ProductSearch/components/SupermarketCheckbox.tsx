// src/features/ProductSearch/components/SupermarketCheckbox.tsx
import React from "react";
import { Supermarket } from "@/types/Supermarket";

interface SupermarketCheckboxProps {
  supermarket: Supermarket;
  isSelected: boolean;
  onChange: (supermarket: Supermarket, checked: boolean) => void;
}

const SupermarketCheckbox: React.FC<SupermarketCheckboxProps> = ({
  supermarket,
  isSelected,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(supermarket, e.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        value={supermarket.value}
        checked={isSelected}
        onChange={handleChange}
      />
      {supermarket.name}
    </label>
  );
};

export default SupermarketCheckbox;
