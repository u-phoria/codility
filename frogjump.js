function solution(X,Y,D) {
	return Math.ceil((Y-X) / D);
}

var assert = require('assert');
assert.equal(3, solution(10,85,30));