var util = require('util');
var events = require('events');

function apiPost () {}
util.inherits(apiPost, events.EventEmitter);

apiPost.prototype.command = function (apiUrl, postBody, postHeaders, postAuth, success) {
    var request = require("superagent");

    var options = {
        uri: apiUrl,
       // method: "POST",
        json: postBody
    };

    if (postHeaders !== undefined) {
        options.headers = postHeaders;
    }
    if (postAuth !== undefined) {
        options.auth = postAuth;
    }

    request.post(apiUrl).send(postBody).then( response => {
        success(response);
        this.emit('complete');
    }).catch(error => {
        if (error) {
            console.log(error);
            return;
        }
    });
};

module.exports = apiPost;