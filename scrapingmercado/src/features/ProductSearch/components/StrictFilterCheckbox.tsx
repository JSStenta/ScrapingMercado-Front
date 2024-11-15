// src/features/ProductSearch/components/StrictFilterCheckbox.tsx
import React from "react";

interface StrictFilterCheckboxProps {
  isStrict: boolean;
  onToggleStrictFilter: (checked: boolean) => void;
}

const StrictFilterCheckbox: React.FC<StrictFilterCheckboxProps> = ({
  isStrict,
  onToggleStrictFilter,
}) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleStrictFilter(e.target.checked);
  };

  return (
    <label>
      <input type="checkbox" checked={isStrict} onChange={handleChange} />
      Filtro estricto
    </label>
  );
};

export default StrictFilterCheckbox;
