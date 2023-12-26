import { toast } from 'react-toastify';
import { toastOptions } from './toastOptions';

export const validateForm = (data) => {
  if (!parseFloat(data.price)) {
    toast.error('Price should be a number', toastOptions);
    return false;
  }

  if (Object.values(data).some((elem) => elem === '')) {
    toast.error('All fields must be filled', toastOptions);
    return false;
  }

  return true;
};
