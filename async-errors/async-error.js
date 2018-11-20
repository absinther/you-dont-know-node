try {
    setTimeout(function () {
        throw new Error('Fail');
    }, 800);
}
catch (e) {
    console.log('Custom error: ', e.message);
}