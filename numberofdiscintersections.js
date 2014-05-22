function solution(A) {
	var starts = [], ends = [];
	for (var a = 0; a < A.length; a++) { starts.push(a-A[a]); ends.push(A[a]+a); }
	
	starts.sort(function(a,b) {return a-b;})
	ends.sort(function(a,b) {return a-b;})

	var total = 0, running = 0, sidx = 0, eidx = 0;
	while (true) {
		if (sidx < starts.length && starts[sidx] <= ends[eidx]) {
			running++;
			sidx++;
		} else if (eidx < ends.length) {
			running = Math.max(0,running-1);
			total += running;
			eidx++;
		} else {
			break;
		}
	}
	if (total > 10000000)
	    return -1;
	return total;
}

var assert = require('assert');
assert.equal(11, solution([1,5,2,1,4,0]));
assert.equal(1, solution([0,1]));
assert.equal(2, solution([0,7,1]));