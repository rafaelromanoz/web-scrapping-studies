import connection from './connection';
import { ParsedQs } from 'qs';
interface IProduct {
  site: string;
  title: string;
  thumbnail: string;
  price: string;
  permalink: string;
}

const registerProductModel = async (product: IProduct): Promise<void> => {
  const conn = await connection();
  await conn.collection('products_mercadolivre').insertOne({ product });
};

const getProductsByCategoryModel = async (
  category: ParsedQs | string | undefined | ParsedQs[] | string[],
) => {
  const conn = await connection();
  const products = await conn
    .collection('products_mercadolivre')
    .find({
      product: {
        $elemMatch: {
          category,
        },
      },
    })
    .toArray();
  return products;
};

export { registerProductModel, getProductsByCategoryModel };
