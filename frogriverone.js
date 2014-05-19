function solution(X,A) {
	var seen = [];
	var cum_remaining = 0;
	for (var i = 1; i <= X; i++) cum_remaining += i;
	
	for (var i = 0; i < A.length; i++) {
		if (!seen[A[i]]) {
			seen[A[i]] = 1;
			cum_remaining -= A[i];
			if (cum_remaining <= 0)
				return i;
		}
	};
	return -1;
}

var assert = require('assert');
assert.equal(6, solution(5, [1,3,1,4,2,3,5,4]));
assert.equal(-1, solution(4, [2,3]));
assert.equal(-1, solution(3, []));