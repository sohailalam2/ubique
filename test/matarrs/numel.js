var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/numel ...');
test('numel', function (done) {



assert.deepEqual(ubique.numel([3,5,6]),3);
assert.deepEqual(ubique.numel([[3,2,7],[4,5,6]]),6);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->