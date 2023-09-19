import mockProductData, { Product } from "../data/mock-products-data";

export const getProducts = async (): Promise<Product[]> => {
  // Simulate API request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockProductData);
    }, 1000);
  });
};

export const getProductById = async (
  id: number
): Promise<Product | undefined> => {
  // Simulate API request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProductData.find((p) => p.id === id);
      resolve(product);
    }, 1000);
  });
};