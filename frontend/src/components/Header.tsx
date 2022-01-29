import React, {
  ReactElement, useContext,
} from 'react';
import { Form } from 'react-bootstrap';
import ProductContext from '../context/ProductsContext';

export default function Header(): ReactElement {
  const { setCategory, setSite, setInput }: any = useContext(ProductContext);
  return (
    <div>
      <Form.Select onChange={(event) => console.log(event)} aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
}
