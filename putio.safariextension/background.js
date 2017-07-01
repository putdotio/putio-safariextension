document.addEventListener('contextmenu', handleContextMenu, false)

function handleContextMenu(event) {
  if (event.target.nodeName === 'A') {
    safari.self.tab.setContextMenuEventUserInfo(event, event.target.href)
  }
}

