import { z } from 'zod';

// Zod schema for request body validation
const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email format' }),
  subject: z.string().optional(), // Subject is optional
  message: z.string().min(1, { message: 'Message is required' }),
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    // Validate the request body using Zod
    const validatedBody = ContactFormSchema.parse(body);

    // Send email using FormsPree
    const formData = new FormData();
    formData.append('name', validatedBody.name);
    formData.append('email', validatedBody.email);
    formData.append('subject', validatedBody.subject || ''); // Handle optional subject
    formData.append('message', validatedBody.message);

    const response = await fetch('https://formspree.io/f/xjkgqneo', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const responseData = await response.json();
      console.error('Formspree error:', responseData); // Log the error from formspree.
      throw createError({
        statusCode: response.status,
        message: 'Failed to send message via Formspree',
        data: responseData,
      });
    }

    return {
      status: 'success',
      message: 'Message sent successfully',
    };
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      throw createError({
        statusCode: 400,
        message: 'Validation error',
        data: error.errors, // Include detailed validation errors
      });
    }
    else {
      // Handle other errors (including fetch errors)
      console.error('Error sending message:', error);
      throw createError({
        statusCode: 500,
        message: 'Error sending message',
        cause: error,
      });
    }
  }
});
