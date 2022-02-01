import api from '../api/configApi';

const requestScrapBuscape = async (
  category: any,
  input: any,
  setstate: any,
): Promise<void> => {
  console.log('category');
  const { data } = await api
    .get(`/register/buscape?category=${category}`);
  console.log(data);
};

export { requestScrapBuscape };
