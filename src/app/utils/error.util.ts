export const handleError = (err: unknown, defaultMessage: string): string => {
  if (err instanceof Error) {
    return err.message || defaultMessage;
  }
  return defaultMessage;
};
