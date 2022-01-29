import React, {
  useState, useEffect, ReactElement, useMemo, ProviderProps, SetStateAction,
} from 'react';
import { IChildren } from '../interfaces/interfaces';
import Context from './ProductsContext';

export default function ProductProvider({ children }: IChildren): ReactElement {
  const [category, setCategory] = useState<string>('');
  const [site, setSite] = useState<string>('');
  const [input, setInput] = useState<string>('');
  return (
    <Context.Provider value={{
      setCategory,
      setSite,
      setInput,
    }}
    >
      {children}
    </Context.Provider>
  );
}
