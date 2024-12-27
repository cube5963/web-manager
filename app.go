package main

import (
	"context"
	"fmt"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx  context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	a.SetWindowSize()
}


func (a *App) SetWindowSize(){
	screens, err := runtime.ScreenGetAll(a.ctx)
	if err != nil {
		fmt.Println("Error getting screens:", err)
		return
	}

	var width, height int
	for _, s := range screens {
		if s.IsPrimary {
			width = s.Width
			height = s.Height
			break
		}
	}

	if width > 0 && height > 0  {
		runtime.WindowMaximise(a.ctx)
	}
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// Hello is a simple greeting function
func (a *App) Hello(name string) string {
	return fmt.Sprintf("%sさんこんにちは", name)
}

