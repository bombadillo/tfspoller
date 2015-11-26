chrome.tabs.onUpdated.addListener (tabId, changeInfo, tab) ->
  if changeInfo.status == 'complete'
    console.log tab.url
    if tab.url.match /(?=.*\.visualstudio\.com)(?=.*taskboard)/
      console.log "match"
      chrome.tabs.executeScript(null, {file: "app.js"})
