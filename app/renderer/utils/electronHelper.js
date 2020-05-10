const { shell } = require('electron');

const URL_PAGE = process.env.URL_PAGE_TEACHER;
export const openLink = (url) => {
  shell.openExternal(URL_PAGE + url);
};
