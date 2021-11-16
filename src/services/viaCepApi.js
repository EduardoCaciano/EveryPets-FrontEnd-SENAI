import axios from "axios";

const viaCepApi = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const getEndereco = async (endereco) => {
  const result = await viaCepApi.get(`${endereco}/json`);
  return result.data;
};
