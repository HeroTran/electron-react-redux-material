/* eslint-disable func-names */
const { ipcRenderer } = require('electron');

const select = (selector) => document.querySelector(selector);

const notification = select('#notification');
const message = select('#message');
const progressBar = select('#progressBar');
const version = select('#version');
const restartButton = select('#restart-button');

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
  ipcRenderer.removeAllListeners('app_version');
  version.innerText = `Version ${arg.version}`;
});

ipcRenderer.on('download-progress', (event, text) => {
  progressBar.style.width = `${text}%`;
});

ipcRenderer.on('update-available', () => {
  ipcRenderer.removeAllListeners('update-available');
  message.innerText = 'A new update is available. Downloading now...';
  notification.classList.remove('hidden');
});

ipcRenderer.on('update-downloaded', () => {
  ipcRenderer.removeAllListeners('update-downloaded');
  message.innerText =
    'Update Downloaded. It will be installed on restart. Restart now?';
  restartButton.classList.remove('hidden');
  notification.classList.remove('hidden');
});

document.getElementById('close-button').addEventListener('click', function () {
  console.warn('close');
  notification.classList.add('hidden');
});

document
  .getElementById('restart-button')
  .addEventListener('click', function () {
    console.warn('restart');
    ipcRenderer.send('restart_app');
  });
