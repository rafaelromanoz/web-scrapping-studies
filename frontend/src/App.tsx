import React, { ReactElement } from 'react';
import Header from './components/Header';
import ProductProvider from './context/ProductsProvider';

function App(): ReactElement {
  return (
    <ProductProvider>
      <Header />
    </ProductProvider>
  );
}

export default App;
