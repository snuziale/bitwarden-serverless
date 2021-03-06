export function normalizeBody(body) {
  const normalized = {};
  Object.keys(body).forEach((key) => {
    normalized[key.toLowerCase()] = body[key];
  });

  return normalized;
}

export function validationError(message) {
  console.log('Validation error', { message });
  return {
    statusCode: 400,
    body: JSON.stringify({
      ValidationErrors: {
        '': [
          message,
        ],
      },
      Object: 'error',
    }),
  };
}

export function serverError(message, error) {
  console.log('Server error', { message, error });
  return {
    statusCode: 500,
    body: JSON.stringify({
      Message: message,
      Object: 'error',
    }),
  };
}
