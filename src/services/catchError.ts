export const catchError = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else {
    return 'An error occurred. See console for details.';
  }
};
