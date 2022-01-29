import React, {
  ReactElement, useContext,
} from 'react';
import {
  Button,
  Col,
  Container,
  Dropdown, DropdownButton, FormControl, InputGroup, Row,
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
  }: any = useContext(ProductContext);
  return (
    <Container>
      <Row>
        <Col>
          <DropdownButton
            title="Web"
            id="dropdown-menu-align-right"
            onSelect={(event) => setSite(event)}
          >
            <Dropdown.Item eventKey="todas">Todas</Dropdown.Item>
            <Dropdown.Item eventKey="mercadolivre">MercadoLivre</Dropdown.Item>
            <Dropdown.Item eventKey="buscape">Buscapé</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton
            title="Categorias"
            id="dropdown-menu-align-right"
            onSelect={(event) => setCategory(event)}
          >
            <Dropdown.Item eventKey="geladeira">Geladeira</Dropdown.Item>
            <Dropdown.Item eventKey="tv">TV</Dropdown.Item>
            <Dropdown.Item eventKey="celular">Celular</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col xs={4}>
          <InputGroup>
            <InputGroup.Text>Nome Produto</InputGroup.Text>
            <FormControl
              placeholder="Digite o nome do produto"
              onChange={({ target }) => setInput(target.value)}
            />
          </InputGroup>
        </Col>
        <Col>
          <Button
            onClick={() => onClickSearch(setDataMercadoLivre, category, input)}
          >
            Procurar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
