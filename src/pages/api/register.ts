import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json(); // Get the data from the request body

    // Send a request to Strapi to create a new user
    const response = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify({
        username: data.username, // Username from the registration form
        email: data.email,       // Email from the registration form
        password: data.password,  // Password from the registration form
      }),
    });

    const result = await response.json(); // Parse the JSON response from Strapi

    if (response.ok) {
      // If the response is successful, return the user data and token
      return new Response(JSON.stringify({ success: true, user: result.user, token: result.jwt }), {
        status: 201,
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
    console.error('Registration error:', error); // Log any errors
    return new Response(JSON.stringify({ success: false, message: 'Registration failed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};