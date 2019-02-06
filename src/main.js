const { app, BrowserWindow } = require("electron");

let mainWindow = null;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1366,
		height: 768,
	});
	mainWindow.loadFile(`index.html`);
	// mainWindow.webContents.openDevTools();
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin'){
		app.quit();
	}
});

app.on('activate', () => {
	if(mainWindow === null){
		createWindow();
	}
});
