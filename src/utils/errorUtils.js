export function isAppError(error) {
  return error.type !== undefined;
}

export function errorTypeToStatusCode(type) {
  if (type === 'not_found') return 404;
  if (type === 'hour_minuteFormat') return 422;
}

export function notFoundError(message) {
  return { type: 'not_found', message: message || '' };
}

export function formatError(message) {
  return { type: 'hour_minuteFormat', message: message || '' };
}
