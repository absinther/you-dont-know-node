var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('knock', function () {
    console.log("Who's there?");
});

emitter.once('knock', function () {
    console.log("Get lost!");
});

emitter.emit('knock');
emitter.emit('knock');