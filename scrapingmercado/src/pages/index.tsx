import { useState } from "react";
import { SearchForm } from "../features/ProductSearch/components/SearchForm";
import { ResultsTable } from "../features/ProductSearch/components/ResultsTable";
import { useProductSearch } from "../hooks/useProductSearch";
import { useStrictFilter } from "../hooks/useStrictFilter";
import { useSort } from "../hooks/useSort";
import { Product } from "@/types/Product"; // Asegúrate de importar este tipo

const HomePage: React.FC = () => {
  const { products, loading, error, searchProducts } = useProductSearch();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    filteredProducts,
    loading: filterLoading,
    setStrictFilter,
  } = useStrictFilter(products, searchTerm);

  const { sortedProducts, sortProducts, sortOrder, sortParameter } =
    useSort<Product>(filteredProducts, "price");

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
    // Mantener el orden actual en los productos filtrados
    sortProducts(sortParameter);
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
        products={sortedProducts}
        sortProducts={sortProducts}
        sortOrder={sortOrder}
        sortParameter={sortParameter}
      />
    </div>
  );
};

export default HomePage;
