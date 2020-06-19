import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
// import log from 'electron-log';
import { PATHS } from './renderer/utils/paths';
import MenuBuilder from './menu';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow = null;
const isDev = process.env.NODE_ENV === 'development';
const isDebugProd = !!process.env.DEBUG_PROD;
if (!isDev) {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (isDev || isDebugProd) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
  return Promise.all(
    extensions.map((name) => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

const createWindow = async () => {
  if (isDev || isDebugProd) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    icon: path.join(PATHS.root, 'resources/icon.png'),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  isDev
    ? mainWindow.loadURL(`file://${__dirname}/renderer/appDev.html`)
    : mainWindow.loadURL(`file://${__dirname}/renderer/app.html`);
  
  mainWindow.maximize(); // full screen
  if (isDev || isDebugProd) {
    mainWindow.show();
    mainWindow.focus();
  } else {
    mainWindow.once('ready-to-show', () => {
      mainWindow.show();
      mainWindow.focus();
    });
  }
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
  new AppUpdater();
};

/**
 * Add event listeners...
 */
app.allowRendererProcessReuse = false;
app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', createWindow);

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});


ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});