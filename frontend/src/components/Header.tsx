import React, {
  ReactElement, useContext,
} from 'react';
import {
  Button,
  Dropdown, DropdownButton, FormControl, InputGroup,
} from 'react-bootstrap';

import ProductContext from '../context/ProductsContext';
import { onClickSearch } from '../utils/functions';

export default function Header(): ReactElement {
  const {
    setCategory,
    setSite,
    setInput,
    setDataMercadoLivre,
    category,
    input,
    site,
  }: any = useContext(ProductContext);

  const styleDiv = {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '4px',
    marginBottom: '10px',
    marginLeft: '10px',
  };
  return (
    <div
      style={styleDiv}
    >
      <DropdownButton
        title="Web"
        id="dropdown-menu-align-right"
        onSelect={(event) => setSite(event)}
        style={{ marginRight: '10px' }}
      >
        <Dropdown.Item eventKey="todas">Todas</Dropdown.Item>
        <Dropdown.Item eventKey="mercadolivre">MercadoLivre</Dropdown.Item>
        <Dropdown.Item eventKey="buscape">Buscapé</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        title="Categorias"
        id="dropdown-menu-align-right"
        onSelect={(event) => setCategory(event)}
        style={{ marginRight: '10px' }}
      >
        <Dropdown.Item eventKey="geladeira">Geladeira</Dropdown.Item>
        <Dropdown.Item eventKey="tv">TV</Dropdown.Item>
        <Dropdown.Item eventKey="celular">Celular</Dropdown.Item>
      </DropdownButton>

      <InputGroup style={{ width: '30rem' }}>
        <InputGroup.Text>Pesquisa livre</InputGroup.Text>
        <FormControl
          placeholder="Digite o nome do produto"
          onChange={({ target }) => setInput(target.value)}
          style={{ marginRight: '10px' }}
        />
      </InputGroup>

      <Button
        onClick={
          () => onClickSearch(
            setDataMercadoLivre,
            category,
            input,
            setInput,
            setCategory,
            site,
          )
        }
      >
        {' '}
        Procurar
      </Button>
      <p>{ process.env.REACT_APP_API_URL }</p>
    </div>
  );
}
