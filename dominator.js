function solution(A) {
	var st = [];
	var idx = -1;
	for (var i = 0; i < A.length; i++) {
		var a = A[i];
		if (!st.length || a === st[st.length-1]) {
			st.push(a);
			if (st.length === 1) idx = i;
		} else {
			st.pop();
			if (!st.length) idx = -1;
		}
	}
	if (idx === -1)
		return idx;
	var howmany = 0;
	for (var j = 0; j < A.length; j++)
		howmany += (A[j] === A[idx]) ? 1 : 0;
	return (howmany > (A.length/ 2)) ? idx : -1;
}

var assert = require('assert');
var A = [3,2,3,4,3,3,3,-1];
assert.equal(3, A[solution(A)]);
var B = [100,2,100,2,2];
assert.equal(2, B[solution(B)]);
var C = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1];
assert.equal(2, C[solution(C)]);
var D = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
assert.equal(-1, solution(D));