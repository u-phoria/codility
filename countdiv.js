function solution(A, B, K) {
	var initial = Math.ceil(A/K) * K;
	if (initial > B) return 0;
	return 1 + Math.floor((B-initial) / K);
}

var assert = require('assert');
assert.equal(3, solution(6,11,2));
assert.equal(1, solution(20,22,7));
assert.equal(0, solution(23,27,7));
assert.equal(2, solution(20,28,7));