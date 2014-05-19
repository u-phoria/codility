function solution(A) {
	var prev;
	return A.sort().reduce(function(a,b) {
		var res = b === prev ? a : ++a;
		prev = b;
		return res;
	}, 0);
}

var assert = require('assert');
assert.equal(3, solution([2,1,1,2,3,1]));