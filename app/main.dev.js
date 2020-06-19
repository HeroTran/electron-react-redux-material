import path from 'path';
import { app, BrowserWindow , ipcMain} from 'electron';
const log = require('electron-log');
const { autoUpdater } = require("electron-updater");
import { PATHS } from './renderer/utils/paths';
import MenuBuilder from './menu';

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

let mainWindow = null;
console.log('autoUpdater', autoUpdater);

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
};


/**
 * Add event listeners...
 */
app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('ready', async () => {
  try {
    log.info('Checking update')
    await createWindow();
    await autoUpdater.checkForUpdatesAndNotify();
  } catch (error) {
    log.error(error)
    console.log('ready checkForUpdatesAndNotify');
    console.log(error);
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});

const dispatch = (data) => {
  console.log('mainWindow', data);
  mainWindow.webContents.send('message', data)
}

autoUpdater.on('checking-for-update', () => {
  dispatch('Checking for update...')
})

autoUpdater.on('update-available', (info) => {
  dispatch('Update available.')
})

autoUpdater.on('update-not-available', (info) => {
  console.log('update-not-available',info);
  log.info('Checking update', info)
  dispatch('Update not available.')
})

autoUpdater.on('error', (err) => {
  dispatch('Error in auto-updater. ' + err)
})

autoUpdater.on('download-progress', (progressObj) => {
  mainWindow.webContents.send('download-progress', progressObj.percent)
})

autoUpdater.on('update-downloaded', (info) => {
  dispatch('Update downloaded')
})