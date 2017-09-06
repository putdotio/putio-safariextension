document.addEventListener('contextmenu', handleContextMenu, false)

function handleContextMenu(event) {
  const nodeName = event.target.nodeName
  const href = nodeName === 'A' ? event.target.href : event.target.parentElement.href

  safari.self.tab.setContextMenuEventUserInfo(event, {
    nodeName,
    href,
  })
}

