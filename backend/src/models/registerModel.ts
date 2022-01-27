import connection from './connection';
interface IProduct {
  name: string;
  price: number;
  description: string;
  picture: string;
  category: string;
  site: string;
}

const registerProductModel = async (product: IProduct): Promise<object> => {
  const conn = await connection();
  const { insertedId } = await conn
    .collection('products')
    .insertOne({ ...product });
  return {
    id: insertedId,
  };
};

export default registerProductModel;
