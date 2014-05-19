function solution(A) {
	var seen = [];
    A.forEach(function(a) {
        if (seen[a-1])
            return 0;   // already seen once
        seen[a-1] = 1;
    });
    for (var i = 0; i < A.length; i++)
    	if (!seen[i])
    		return 0;
    return 1;
}

var assert = require('assert');
assert.equal(1, solution([4,1,3,2]));
assert.equal(0, solution([4,1,3]));
assert.equal(1, solution([1]));
assert.equal(0, solution([2]));