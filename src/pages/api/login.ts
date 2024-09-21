import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json(); // Get the data from the request body

    // Send a request to Strapi to log in the user
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify({
        identifier: data.email, // Email from the login form
        password: data.password,  // Password from the login form
      }),
    });

    const result = await response.json(); // Parse the JSON response from Strapi

    if (response.ok) {
      // If the response is successful, return the user data
      return new Response(JSON.stringify({ success: true, user: result }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      // If there was an error, return the error message
      return new Response(JSON.stringify({ success: false, message: result.message }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.error('Login error:', error); // Log any errors
    return new Response(JSON.stringify({ success: false, message: 'Login failed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
