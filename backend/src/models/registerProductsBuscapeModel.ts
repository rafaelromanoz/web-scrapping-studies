import connection from './connection';

const registerProductsBuscapeModel = async (product: Array<object>) => {
  const conn = await connection();
  await conn.collection('products_buscape').insertOne({ product });
};

export { registerProductsBuscapeModel };
