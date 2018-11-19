var Job = require('./jobs.js');
var job = new Job();

job.on('done', function (details) {
    console.log('Weekly job finished on: ', details.date);

    job.removeAllListeners();
});

// job.process();
job.emit('start');