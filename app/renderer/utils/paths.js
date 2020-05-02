'use strict';

/**
 * Paths
 * Note: Don't import log helper file from utils here
 */

import { join, parse, resolve } from 'path';
import { homedir as homedirOs } from 'os';
import { rootPath as root } from 'electron-root-path';

const appPath = join(root, `./app`);
const mainPath = join(root, `./app/main`);
const rendererPath = join(root, `./app/renderer`);
const homeDir = homedirOs();

export const PATHS = {
  root: resolve(root),
  app: resolve(appPath),
  main: resolve(mainPath),
  renderer: resolve(rendererPath),
  dist: resolve(join(appPath, `./dist`)),
  nodeModules: resolve(join(root, `./node_modules`)),
  homeDir: resolve(homeDir),
};

export const pathUp = (filePath) => {
  return filePath.replace(/\/$/, '').replace(/\/[^/]+$/, '') || '/';
};

export const sanitizePath = (filePath) => {
  return filePath.replace(/\/\/+/g, '/');
};

export const baseName = (filePath) => {
  if (typeof filePath === 'undefined' || filePath === null) {
    return null;
  }
  const parsedPath = pathInfo(filePath);

  return parsedPath !== null ? parsedPath.base : null;
};

export const getExtension = (fileName, isFolder) => {
  if (isFolder) {
    return null;
  }
  const parsedPath = pathInfo(fileName);

  return parsedPath !== null ? parsedPath.ext : null;
};

export const pathInfo = (filePath) => {
  return parse(filePath);
};
