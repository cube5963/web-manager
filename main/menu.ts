import { dialog, Menu, MenuItemConstructorOptions, BrowserWindow } from 'electron';

const template: MenuItemConstructorOptions[] = [
    {
        label: "ファイル",
        submenu: [
            {
                label: "開く",
                accelerator: "CmdOrCtrl+O",
                click: () => {
                    console.log("open");
                }
            },
            {
                label: "保存",
                accelerator: "CmdOrCtrl+S",
                click: () => {
                    console.log("save");
                }
            },
            {
                label: "終了",
                accelerator: "CmdOrCtrl+Q",
                click: () => {
                    console.log("close");
                }
            }
        ]
    },
    {
        label: "編集",
        submenu: [
            {
                label: "コピー",
                accelerator: "CmdOrCtrl+C",
                click: () => {
                    console.log("copy");
                }
            },
            {
                label: "貼り付け",
                accelerator: "CmdOrCtrl+V",
                click: () => {
                    console.log("paste");
                }
            }
        ]
    },
    {
        label: "開発",
        submenu: [
            {
                label: "開発者ツール",
                accelerator: "CmdOrCtrl+I",
                click: () => {
                    console.log("developer tools");
                }
            },
            {
                label: "ページ移動",
                click: async () => {
                    const win = BrowserWindow.getFocusedWindow();
                    if (win) {
                        const port = process.argv[2]
                        await win.loadURL(`http://localhost:${port}/dev`);
                    }
                }
            }
        ]
    }
]

export const menu = Menu.buildFromTemplate(template);