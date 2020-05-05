import * as apiHelper from '../../utils/apiHelper';
import { API_URL } from './constants';

export function getAllUser() {
  const request = {
    url: API_URL.API_USER_INFO,
  };
  return apiHelper.apiGet(request);
}
