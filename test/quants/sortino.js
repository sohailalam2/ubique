var assert = require('assert');
var ubique = require('../../index.js');

suite('quants',function () {
console.log('Testing quants/sortino ...');
test('sortino', function (done) {

var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

assert.deepEqual(ubique.sortino(x,0.02/12),3.0843795993743215);
assert.deepEqual(ubique.sortino(ubique.cat(0,x,y),0.01/12,0.5),[[0.035363746982163734],[0.02401515582506376]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->