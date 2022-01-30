import React, { ReactElement } from 'react';
import Header from './components/Header';
import ProductCards from './components/ProductsCards';
import ProductProvider from './context/ProductsProvider';

function App(): ReactElement {
  return (
    <ProductProvider>
      <Header />
      <ProductCards />
    </ProductProvider>
  );
}

export default App;
