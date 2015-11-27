selectors = require './config/selectors'
statusUpdater = require './services/statusUpdater'

workItems = document.querySelectorAll(selectors.workItems)
statusUpdater.watchWorkItems workItems
