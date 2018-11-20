var domain = require('domain').create();

domain.on('error', function (e) {
    console.log('Custom error: ', e);
});

domain.run(function () {
    setTimeout(function () {
        throw new Error('Failed');
    }, 800);
});