import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ request }) => {
  // TODO: Fetch cart items from Strapi
  const cartItems = [
    { id: 1, quantity: 2, product: { Title: 'Product 1', Price: 19.99, Image: { data: { attributes: { url: '/placeholder.jpg' } } } } },
  ];

  return new Response(JSON.stringify({ data: cartItems }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
