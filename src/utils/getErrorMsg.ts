import { AxiosError } from 'axios';
import get from 'lodash/get';

/**
 * @returns function get message from errors
 */
export const getErrorMsg = (error: AxiosError) => {
  const message = get(error, 'response.data.errors[0].msg');
  if (message) return message;
  const detail = get(error, 'response.data.message');
  if (detail) {
    if (typeof detail === 'string') return detail;
  }
  return get(detail, '[0].msg', '');
};
