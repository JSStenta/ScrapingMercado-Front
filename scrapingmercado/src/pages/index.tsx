/** @format */

import { useState } from "react";
import { SearchForm } from "../features/ProductSearch/components/SearchForm";
import { ResultsTable } from "../features/ProductSearch/components/ResultsTable";
import { useProductSearch } from "../hooks/useProductSearch";
import { useStrictFilter } from "../hooks/useStrictFilter";
import { useSort } from "../hooks/useSort";
import { useDiscounts } from "../hooks/useDiscounts";
import { Product } from "@/types/Product";

const HomePage: React.FC = () => {
  //Buscador
  const { products, loading, error, searchProducts } = useProductSearch();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = async (
    product: string,
    supermarkets: string[]
  ): Promise<any[]> => {
    setSearchTerm(product);
    const result = (await searchProducts(product, supermarkets)) ?? [];
    return result;
  };

   const handleSearchTermChange = (term: string) => {
     setSearchTerm(term); // Actualiza el término sin consultar el backend
   };

  let productos = products;
  //Descontador
  const { discountedProducts, updateDiscount } = useDiscounts(productos);
  productos = discountedProducts;
  //Ordenador
  const { sortedProducts, sortProducts, sortOrder, sortParameter } =
    useSort<Product>(productos, "price");
  productos = sortedProducts;
  
  //Filtrador
  const {
    filteredProducts,
    loading: filterLoading,
    setStrictFilter,
  } = useStrictFilter(productos, searchTerm);

  const handleStrictFilterChange = (isStrict: boolean) => {
    setStrictFilter(isStrict);
  };

  return (
    <div>
      <h1>Buscador de Productos</h1>
      <SearchForm
        onToggleStrictFilter={handleStrictFilterChange}
        onSearch={handleSearch}
        onUpdateDiscount={updateDiscount}
        onSearchTermChange={handleSearchTermChange}
        isLoading={loading}
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
