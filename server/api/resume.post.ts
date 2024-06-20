// server/api/form.post.ts
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // Process the form data here, e.g., save to a database, send an email, etc.

  return {
    success: true,
    message: 'Form data received successfully',
    data: body,
  };
});
