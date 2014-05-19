function solution(A) {
	var eastward = 0, total = 0;
	for(var i=0; i < A.length; i++) {
		if (A[i] === 0) eastward++;
		else total += eastward;
		if (total > 1000000000) return -1;
	}
	return total;
}

var assert = require('assert');
assert.equal(5, solution([0,1,0,1,1]));
assert.equal(0, solution([]));
assert.equal(5, solution([1,1,0,0,1,0,1]));