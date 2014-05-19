function solution(A) {
	if (A.length === 0)
		return 1;

	var sum = 0;
	for (var i = 1; i <= A.length + 1; i++)
		sum += i;

	var arrsum = A.reduce(function(a,b) {return a + b;});
	
	return sum - arrsum;
}

var assert = require('assert');
assert.equal(4, solution([2,1,3,5]));
assert.equal(2, solution([1]));
assert.equal(1, solution([]));