import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  // TODO: Implement remove from cart logic with Strapi
  // For now, we'll just return a success response
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
