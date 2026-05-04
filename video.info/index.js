const electron = require('electron');
const { app } = electron;


app.on('ready', () => {
    console.log('App is ready');
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});
//npm install electron
//npm install @electron/remote
//npm install fluent-ffmpeg