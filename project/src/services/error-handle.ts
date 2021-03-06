import request from 'axios';
import {toast} from 'react-toastify';
import {ErrorType} from '../types/error';
import {HTTPCode} from '../components/const';


export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTPCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HTTPCode.Unauthorized:
        throw error;
      case HTTPCode.NotFound:
        toast.info(response.data.error);
        break;
    }
  }
};
