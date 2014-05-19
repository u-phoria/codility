function solution(N,A) {
	var counters = [];
	for (var i = 0; i < N; i++) counters[i] = 0;

	var highest = 0, lastmax = 0;
	A.forEach(function(a) {
		if (a <= N) {
			counters[a-1] = Math.max(lastmax+1, 1+counters[a-1]);
			highest = Math.max(highest, counters[a-1]);
		} else {
			lastmax = highest;
		}
	});
	for (var j = 0; j < N; j++)
		counters[j] = Math.max(counters[j], lastmax);
	return counters;
}

var assert = require('assert');
assert.deepEqual([3,2,2,4,2], solution(5, [3,4,4,6,1,4,4]));