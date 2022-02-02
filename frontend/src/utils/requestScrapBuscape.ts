import api from '../api/configApi';

const requestScrapBuscape = async (
  category: any,
  input: any,
  setstate: any,
): Promise<void> => {
  if (input) {
    const { data } = await api
      .get(`/register/buscape?input=${input}`);
    setstate(data);
  }
  if (category) {
    const { data } = await api
      .get(`/register/buscape?category=${category}`);
    setstate(data);
  }
};

export { requestScrapBuscape };
