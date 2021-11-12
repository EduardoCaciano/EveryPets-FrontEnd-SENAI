import viaCep from "./via-cep"

export const address = {
    findAddressByZipCode: async (zipCode) => {
      const result = await viaCep.get(`${zipCode}/json`);
      return result.data;
    },
  };
  