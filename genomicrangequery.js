function solution(S,P,Q) {
	// Build up a lookup table of most recent positions for
	// each of the impact factors, e.g. for ACGC we want
	//    0 1 2 3
	// A  0 0 0 0
	// C  X 1 1 3
	// G  X X 2 2
	// T  X X X X
	var baseMap = ['A','C','G','T'];
	var lastPositions = [[], [], [], []];
	for (var i = 0; i < S.length; i++) {
		for (var b = 0; b < baseMap.length; b++) {
			lastPositions[b][i] = (b === baseMap.indexOf(S[i]))
				? i : lastPositions[b][i-1];
		}
    }

    var res = [];
    for (var n = 0; n < P.length; n++) {
    	for (var b = 0; b < baseMap.length; b++) {
    		var endForBase = lastPositions[b][Q[n]];
    		if (endForBase !== undefined && endForBase >= P[n]) {
    			res.push(++b);
    			break;
    		}
    	}
    }
    return res;
}

var assert = require('assert');
assert.deepEqual([2,4,1], solution("CAGCCTA", [2,5,0], [4,5,6]));
assert.deepEqual([2], solution("CAGCCTA", [0], [0]));