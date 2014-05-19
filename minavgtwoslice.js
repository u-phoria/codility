function solution(A) {
	var prefixsums = A.reduce(function(a,b) {
		a.push((a[a.length-1] || 0) + b);
		return a;
	}, []);

	var worst = Math.pow(10, 10), best = worst, bestidx = -1;
	for (var i = 1; i < A.length; i++) {
		var last3avg = (i > 1) ? (prefixsums[i] - (prefixsums[i-3] || 0)) / 3 : worst;
		var last2avg = (prefixsums[i] - (prefixsums[i-2] || 0)) / 2;
		if (last3avg < best) { bestidx = i - 2; best = last3avg; }
		if (last2avg < best) { bestidx = i - 1; best = last2avg; }
	}
	return bestidx;
}

var assert = require('assert');
assert.equal(1, solution([4,2,2,5,1,5,8]));
assert.equal(5, solution([3,6,1,4,5,2,2]));
assert.equal(4, solution([2,8,2,5,1,4,2]));
assert.equal(2, solution([0,1,-1,-1,0,1]));