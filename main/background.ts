import path from 'path'
import { app, ipcMain, Menu, screen } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import { menu } from './menu'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady().then(() => {
    Menu.setApplicationMenu(menu);
  })

  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height} = primaryDisplay.workAreaSize;

  const mainWindow = createWindow('main', {
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  mainWindow.maximize();

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
