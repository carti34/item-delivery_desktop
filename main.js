import electron from 'electron';
import path from 'path';
import url from 'url';
import 'babel-polyfill';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  //mainWindow.removeMenu();

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

const templateMenu = [
  {
    label: 'Início',
    submenu: [
      {
        label: 'Apresentação',
        click: () => {
          mainWindow.webContents.executeJavaScript("location.assign('#');");
        }
      }
    ]
  },
  {
    label: 'Cadastro',
    submenu: [
      {
        label: 'Banda',
        click: function() {
          shell.openExternal('https://www.electronjs.org/');
        }
      },
      {label: 'Cantor'},
    ]
  },
  {
    label: 'Relatório',
    submenu: [
      {
        label: 'Bandas'
      },
      {
        label: 'Cantores', 
        click: () => {
          mainWindow.webContents.executeJavaScript("location.assign('#deliveryman');");
        }
      }
    ]
  },
  {
    label: 'Entre em Contato',
    click: () => {
      mainWindow.webContents.executeJavaScript("location.assign('#deliveryman');");
    }
  }
];

const menu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(menu);

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
