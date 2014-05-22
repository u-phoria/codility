function solution(A,B) {
	var st = [];
	var upstreamSurvivors = 0;
	for (var i = 0; i < A.length; i++) {
		if (B[i] === 0) {
			while (st.length > 0 && A[i] > st[st.length-1])
				st.pop();
			if (st.length === 0)
				upstreamSurvivors++
		} else {
			st.push(A[i]);
		}
	}
	return upstreamSurvivors + st.length;
}

var assert = require('assert');
assert.equal(2, solution([4,3,2,1,5], [0,1,0,0,0]));
assert.equal(3, solution([1,7,4,3], [0,1,1,0]));