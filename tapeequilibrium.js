function solution(A) {
	if (A.length < 1)
		return 0;

	var sum = A.reduce(function(a,b) {return a+b});
	var ltotal = 0;
	var best = 1000 * 1000000;
	for (var i = 0; i < A.length-1; i++) {
		ltotal += A[i];
		best = Math.min(best, Math.abs(ltotal - (sum - ltotal)));
	}
	return best;
}

var assert = require('assert');
assert.equal(1, solution([3, 1, 2, 4, 3]));
assert.equal(5, solution([3, -2]));