import { actionTypes } from './actionTypes';

export function changeLocale(languageLocale) {
  return {
    type: actionTypes.CHANGE_LOCALE,
    payload: languageLocale,
  };
}
