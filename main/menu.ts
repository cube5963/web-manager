import { Menu, MenuItemConstructorOptions } from 'electron';

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
    }
]

export const menu = Menu.buildFromTemplate(template);