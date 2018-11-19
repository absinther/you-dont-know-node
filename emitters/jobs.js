var util = require('util');
var events = require('events');
var Job = function Job() {
    var job = this;

    job.process = function () {
        setTimeout(function () {
            job.emit('done', {date: new Date()});
        }, 1000);
    };
};

util.inherits(Job, events.EventEmitter);
module.exports = Job;