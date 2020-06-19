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

ipcRenderer.on('version', (event, text) => {
  version.innerText = text;
});

ipcRenderer.on('download-progress', (event, text) => {
  progressBar.style.width = `${text}%`;
});
