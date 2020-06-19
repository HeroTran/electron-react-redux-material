const { ipcRenderer } = require('electron');

const select = (selector) => document.querySelector(selector);

const container = select('#messages');
const progressBar = select('#progressBar');
const version = select('#version');

ipcRenderer.on('message', (event, text) => {
  const message = document.createElement('div');
  message.innerHTML = text;
  container.appendChild(message);
});

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
  ipcRenderer.removeAllListeners('app_version');
  version.innerText = `Version ${arg.version}`;
});

ipcRenderer.on('download-progress', (event, text) => {
  progressBar.style.width = `${text}%`;
});

ipcRenderer.on('update-downloaded', () => {
  ipcRenderer.send('restart_app');
});
