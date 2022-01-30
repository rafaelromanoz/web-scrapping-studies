import connection from './connection';
interface IProduct {
  site: string;
  title: string;
  thumbnail: string;
  price: string;
  permalink: string;
}

const registerProductModel = async (product: IProduct): Promise<void> => {
  const conn = await connection();
  await conn.collection('products').insertOne({ product });
};

export default registerProductModel;
