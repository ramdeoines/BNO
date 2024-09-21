import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ request }) => {
  try {
    const response = await fetch('http://localhost:1337/api/products'); // Adjust the URL as needed
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return new Response(JSON.stringify({ data: data.data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
