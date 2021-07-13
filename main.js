const {app, BrowserWindow, Menu} = require('electron') // app manages lifecycle & browser to manage app windows

var path = require('path')
const mysql = require('mysql');

// Set env
process.env.NODE_ENV = 'production'

const isDev = process.env.NODE_ENV !== 'production' ? true : false
const isMac = process.platform === 'darwin' ? true : false
console.log(process.platform)

let mainWindow //creating mainWindow variable
let aboutWindow
let adminWindow

function createMainWindow() {
	mainWindow = new BrowserWindow({
		title: 'GSI INVENTORY MANAGEMENT',
		width: isDev ? 800:800,
		height: 800,
		icon: './assets/icons/linux/icon.png',
		resizable: process.env.NODE_ENV === 'development' ? true : false,
		backgroundColor: '#e6ffff',
		webPreferences: {
			nodeIntegration: true,
		}
	})

	if(isDev){
			mainWindow.webContents.openDevTools()
		}

	// To load a URL in our app
	// mainWindow.loadURL('https://twitter.com')
	mainWindow.loadURL('file://'+ __dirname +'/index.html')

	// another method to load file
	// mainWindow.loadFile('./app/index.html')
}


function createAboutWindow() {
	aboutWindow = new BrowserWindow({
		title: 'About',
		width: 300,
		height: 300,
		icon: './assets/icons/linux/icon.png',
		resizable: false,
		backgroundColor: 'white'
	})

	// To load a URL in our app
	// mainWindow.loadURL('https://twitter.com')
	aboutWindow.loadURL('file://'+ __dirname +'/about.html')

	// another method to load file
	// mainWindow.loadFile('./app/index.html')
}


function createAdminWindow() {
	adminWindow = new BrowserWindow({
		title: 'Admin',
		width: 800,
		height: 800,
		icon: './assets/icons/linux/icon.png',
		resizable: process.env.NODE_ENV === 'development' ? true : false,
		backgroundColor: '#e6ffff',
		webPreferences: {
            nodeIntegration: true,
        }
	})

	// To load a URL in our app
	// mainWindow.loadURL('https://twitter.com')
	adminWindow.loadURL('file://'+ __dirname +'/admin.html')

	// another method to load file
	// mainWindow.loadFile('./app/index.html')
}


app.on('ready', () => {
	createMainWindow()

	const mainMenu = Menu.buildFromTemplate(menu)
	Menu.setApplicationMenu(mainMenu)

	mainWindow.on('closed', function(){
		app.quit();
	})
})

const menu = [
	...(isMac ? [{ 
		label: app.name,
		submenu: [
			{
				label: 'About',
				click: createAboutWindow,
			}
		]

	}] : []),

	/*
	...(!isMac ? [{
		label: 'Help',
		submenu: [
		{
			label: 'About',
			click: createAboutWindow,
		},
		{	
			label: 'Admin',
			click: createAdminWindow,	
		},
		]
	}] : []),
	*/

	...(!isMac ? [{
		label: 'Home',
		click: createMainWindow,
	}] : []),


	...(!isMac ? [{
		label: 'Admin',
		click: createAdminWindow,
	}] : []),


	...(!isMac ? [{
		label: 'About',
		click: createAboutWindow,
	}] : []),

	...(!isMac ? [{
		label: 'Reload',
		role: 'reload',
	}] : []),	


	...(isDev ? [
	{
		label: 'Developer',
		submenu: [
			{role: 'reload'},
			{role: 'forcereload'},
			{type: 'separator'},
			{role: 'toggleDevTools'},
		]
	}
	] : [])
]


app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
  }
})

app.contextIsolation = true;