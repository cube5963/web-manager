import path from 'path';
import { app, ipcMain, screen } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
// import { menu } from './menu';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

app.whenReady().then(async () => {
  /* Menuの設定を追加する場合
  await app.whenReady().then(() => {
    Menu.setApplicationMenu(menu);
  });
  */

  // ✅ screenの呼び出しをapp.whenReady()の後に移動
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  const mainWindow = createWindow('main', {
    width: width,
    height: height,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: 'rgba(0, 0, 0, 0)',
      symbolColor: '#FFFFFF',
      height: 30,
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.maximize();

  try {
    if (isProd) {
      await mainWindow.loadURL('app://./home');
    } else {
      const port = process.argv[2];
      await mainWindow.loadURL(`http://localhost:${port}/home`);
      mainWindow.webContents.openDevTools();
    }
  } catch (error) {
    console.error('Failed to load URL:', error);
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('message', async (event, arg) => {
  try {
    event.reply('message', `${arg} World!`);
  } catch (error) {
    console.error('IPC error:', error);
  }
});
