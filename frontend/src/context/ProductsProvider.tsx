import React, {
  useState, useEffect, ReactElement, useMemo,
} from 'react';
import { IChildren, IValue } from '../interfaces/interfaces';
import Context from './ProductsContext';

export default function ProductProvider({ children }: IChildren): ReactElement {
  const [category, setCategory] = useState('');
  const [site, setSite] = useState('');
  const [input, setInput] = useState('');
  const memoizedSetStates: IValue = useMemo(() => ({
    setCategory,
    setSite,
    setInput,
  }), []);
  return (
    <Context.Provider value={memoizedSetStates}>
      {children}
    </Context.Provider>
  );
}
