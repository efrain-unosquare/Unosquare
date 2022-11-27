var util = require('util');
var events = require('events');

function apiGet () {}
util.inherits(apiGet, events.EventEmitter);

apiGet.prototype.command = function(apiUrl, success) {
  var request = require("superagent");

  request.get(apiUrl).then(response => {
    success(response);
    this.emit('complete');
  }).catch(error => {
    if (error) {
        console.log(error);
        return;
      }
  });
};

module.exports = apiGet;
