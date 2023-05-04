import { isAppError, errorTypeToStatusCode } from '../utils/errorUtils.js';
/* eslint-disable no-unused-vars */
export default function errorHandlerMiddleware(err, req, res, next) {
  if (isAppError(err)) {
    return res.status(errorTypeToStatusCode(err.type)).send(err.message);
  }

  return res.sendStatus(500);
}
