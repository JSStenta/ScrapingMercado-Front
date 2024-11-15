// src/context/AppContext.tsx
/*
import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextType {
  // Define aquí las propiedades que necesites, por ejemplo:
  products: any[];
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
*/