function solution(A) {
	var as = A.sort(function(a,b){return a - b});
	var l = A.length-1;
	var best = as[l] * as[l-1] * as[l-2];
	if (as[0] < 0 && as[1] < 0)
		best = Math.max(best, as[0] * as[1] * as[l]);
	return best;
}

var assert = require('assert');
assert.equal(60, solution([-3,1,2,-2,5,6]));
assert.equal(60, solution([-5,0,2,1,-6]));
assert.equal(5000000, solution([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,
								1,2,3,4,5,6,7,8,9,10,-1000,500,-1]));