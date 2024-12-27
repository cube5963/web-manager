package menu

import (
	"context"
	"github.com/wailsapp/wails/v2/pkg/menu"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func CreateMenu(ctx context.Context) *menu.Menu {
	appMenu := menu.NewMenu()
	fileMenu := appMenu.AddSubmenu("ファイル")
	fileMenu.AddText("終了", nil, func( *menu.CallbackData) {
		runtime.Quit(ctx)
	})
	
	return appMenu
}