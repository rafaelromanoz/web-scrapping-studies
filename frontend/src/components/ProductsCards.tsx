import React, { ReactElement, useContext, Key } from 'react';
import { Card } from 'react-bootstrap';
import ProductContext from '../context/ProductsContext';

export default function ProductCards(): ReactElement {
  const { dataMercadoLivre } = useContext(ProductContext);
  if (!dataMercadoLivre) return <p />;
  return (
    <div style={{ display: 'flex' }}>
      {dataMercadoLivre.map(({
        title, thumbnail, price, permalink,
      }: any, _e: any, index: Key | null | undefined) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{`Preço: ${price}`}</Card.Text>
            <a
              href={permalink}
              target="_blank"
              rel="noreferrer"
            >
              Ir para o site
            </a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
