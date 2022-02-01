import React, { useState, ReactElement } from 'react';
import { IChildren } from '../interfaces/interfaces';
import Context from './ProductsContext';

export default function ProductProvider({ children }: IChildren): ReactElement {
  const [category, setCategory] = useState<null>(null);
  const [site, setSite] = useState<string>('mercadolivre');
  const [input, setInput] = useState<null>(null);
  const [dataMercadoLivre, setDataMercadoLivre] = useState();
  return (
    <Context.Provider value={{
      setCategory,
      setSite,
      setInput,
      setDataMercadoLivre,
      category,
      input,
      dataMercadoLivre,
      site,
    }}
    >
      {children}
    </Context.Provider>
  );
}
