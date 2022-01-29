import { createContext } from 'react';
import { IValue } from '../interfaces/interfaces';

const ProductContext = createContext <IValue | null>(null);

export default ProductContext;
