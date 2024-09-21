// TODO: Implement API service functions
export const fetchProducts = async () => {
  const response = await fetch('/api/products');
  return response.json();
};

export const addToCart = async (productId: number) => {
  const response = await fetch('/api/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  });
  return response.json();
};
