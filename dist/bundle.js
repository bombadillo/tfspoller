(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"F:\\workspace\\git\\tfspoller\\temp\\config\\selectors.js":[function(require,module,exports){
// Generated by CoffeeScript 1.9.0
(function() {
  module.exports = {
    workItems: '.childTbTile'
  };

}).call(this);

},{}],"F:\\workspace\\git\\tfspoller\\temp\\index.js":[function(require,module,exports){
// Generated by CoffeeScript 1.9.0
(function() {
  var selectors, statusUpdater, workItems;

  selectors = require('./config/selectors');

  statusUpdater = require('./services/statusUpdater');

  workItems = document.querySelectorAll(selectors.workItems);

  statusUpdater.watchWorkItems(workItems);

}).call(this);

},{"./config/selectors":"F:\\workspace\\git\\tfspoller\\temp\\config\\selectors.js","./services/statusUpdater":"F:\\workspace\\git\\tfspoller\\temp\\services\\statusUpdater.js"}],"F:\\workspace\\git\\tfspoller\\temp\\services\\statusUpdater.js":[function(require,module,exports){
// Generated by CoffeeScript 1.9.0
(function() {
  var exports, watchWorkItems;

  watchWorkItems = function(workItems) {
    return console.log("watching " + workItems.length);
  };

  exports = this;

  exports.watchWorkItems = watchWorkItems;

}).call(this);

},{}]},{},["F:\\workspace\\git\\tfspoller\\temp\\index.js"]);
