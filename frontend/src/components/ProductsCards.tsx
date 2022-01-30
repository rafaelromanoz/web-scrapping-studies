import React, { ReactElement, useContext, Key } from 'react';
import { Card } from 'react-bootstrap';
import ProductContext from '../context/ProductsContext';

export default function ProductCards(): ReactElement {
  const { dataMercadoLivre } = useContext(ProductContext);
  const styleCard = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItens: 'flex-start',
  };
  if (!dataMercadoLivre) return <p />;
  return (
    <div style={styleCard}>
      {dataMercadoLivre.map(({
        title, thumbnail, price, permalink, id,
      }: any) => (
        <Card key={id} style={{ width: '400px' }}>
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
