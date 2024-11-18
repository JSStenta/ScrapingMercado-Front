/** @format */

import { useState } from "react";
import { SearchForm } from "../features/ProductSearch/components/SearchForm";
import { ResultsTable } from "../features/ProductSearch/components/ResultsTable";
import { useProductSearch } from "../hooks/useProductSearch";
import { useStrictFilter } from "../hooks/useStrictFilter";
import { useSort } from "../hooks/useSort";
import { Product } from "@/types/Product";

const HomePage: React.FC = () => {
  const { products, loading, error, searchProducts } = useProductSearch();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { sortedProducts, sortProducts, sortOrder, sortParameter } = useSort<Product>(products, "price");

  const {
    filteredProducts,
    loading: filterLoading,
    setStrictFilter,
  } = useStrictFilter(sortedProducts, searchTerm);

  const handleSearch = async (
    product: string,
    supermarkets: string[]
  ): Promise<any[]> => {
    setSearchTerm(product);
    const result = (await searchProducts(product, supermarkets)) ?? [];
    return result;
  };

  const handleStrictFilterChange = (isStrict: boolean) => {
    setStrictFilter(isStrict);
  };

  return (
    <div>
      <h1>Buscador de Productos</h1>
      <SearchForm
        onToggleStrictFilter={handleStrictFilterChange}
        onSearch={handleSearch}
      />
      {(loading || filterLoading) && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <ResultsTable
        products={filteredProducts}
        sortProducts={sortProducts}
        sortOrder={sortOrder}
        sortParameter={sortParameter}
      />
    </div>
  );
};

export default HomePage;
