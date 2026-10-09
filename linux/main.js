const { app, BrowserWindow, Menu } = require("electron");
function createWindow() {
  const win = new BrowserWindow({ width: 520, height: 820, title: "Petansclikers" });
  Menu.setApplicationMenu(null);
  win.loadFile("index.html");
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
