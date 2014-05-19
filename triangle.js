function solution(A) {
	if (A.length < 3) return 0;

	var as = A.sort(function(a,b){return a - b});
	for (var i = 2; i < as.length; i++) {
		var p = as[i-2], q = as[i-1], r = as[i];
		if (p + q > r && p + r > q && q + r > p)
			return 1;
	}
	return 0;
}

var assert = require('assert');
assert.equal(1, solution([10,2,5,1,8,20]));
assert.equal(0, solution([4,-2,0,1]));