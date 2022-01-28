import React, { ReactElement, useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import ProductContext from '../context/ProductsContext';

export default function Header(): ReactElement {
  const { setCategory, setInput, setSite } = useContext(ProductContext);
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Web
          {console.log(setCategory, setInput, setSite)}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Todas</Dropdown.Item>
          <Dropdown.Item>MercadoLivre</Dropdown.Item>
          <Dropdown.Item>Buscapé</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categorias
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Geladeira</Dropdown.Item>
          <Dropdown.Item>Tv</Dropdown.Item>
          <Dropdown.Item>Celu</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
