try {
    throw new Error('Fail');
}
catch (e) {
    console.log('Custom error: ', e.message);
}