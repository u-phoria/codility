function solution(N, A, B, C) {
	// Sort edges by length, in descending order
	var E = [];
	for (var e = 0; e < A.length; e++) E[e] = e;
	E.sort(function(a,b) {
		return C[b] - C[a];
	});


	var bestOut= [];				// Store best score for edges
	for (var i = 0; i < N; i++)		//    starting from vertex given
		bestOut[i] = 0;				//    by the index
	var best = 0;					// Best score so far
	var prevLen = 1000000001;		// Previous length, used to detect
									//    detect when all edges of a
									//    certain length have been processed
	var newBest = {};				// Used to track best scores for all
									//    edges of a certain length

	for (var i = 0; i < E.length; i++) {
		var e = E[i];

		// When we encounter a new (lower) edge length, update
		// best values
		if (C[e] !== prevLen) {
			Object.keys(newBest).forEach(function(k) {
				bestOut[parseInt(k)] = newBest[k];
			});
			newBest = {};			
		}
		newBest[A[e]] = Math.max(newBest[A[e]] || 0, bestOut[A[e]]);
		newBest[B[e]] = Math.max(newBest[B[e]] || 0, bestOut[B[e]]);

		// update best values for each of the two outgoing edges
		// - they're either 1, the current best, or the best value so
		// far (with a higher edge length than current) from the outgoing edges
		newBest[A[e]] = Math.max(1, newBest[A[e]], 1 + bestOut[B[e]]);
		if (A[e] !== B[e])
			newBest[B[e]] = Math.max(1, newBest[B[e]], 1 + bestOut[A[e]]);
		
		// set global best
		best = Math.max(best, newBest[A[e]], newBest[B[e]]);
		prevLen = C[e];
	}
	return best;
}

var assert = require('assert');
assert.equal(4, solution(1000,
					[2, 1, 3, 0, 1, 3, 0],
					[1, 1, 4, 4, 0, 2, 1],
					[4, 15, 10, 7, 2, 5, 16]));

assert.equal(4, solution(2,
					[0, 0, 1, 0, 1],
					[0, 0, 0, 1, 1],
					[6, 1, 4, 2, 5]));

assert.equal(4, solution(4,
					[0, 3, 3, 1, 2, 3, 0, 2, 3],
					[0, 0, 2, 2, 0, 0, 3, 3, 1],
					[11, 5, 3, 7, 12, 12, 8, 8, 8]));

assert.equal(1, solution(7,
					[4, 3], 
					[6, 1],
					[1, 2]));

assert.equal(2, solution(3,
					[ 2, 0, 2, 0 ],
					[ 2, 2, 1, 0 ],
					[ 3, 3, 3, 2 ]));

assert.equal(5,solution(6,
					[ 3, 0, 3, 0, 3, 3, 5, 0, 0, 0, 0 ],
					[ 4, 5, 1, 5, 2, 0, 5, 3, 4, 3, 0 ],
					[ 6, 5, 3, 2, 8, 1, 5, 2, 2, 4, 0 ]));

assert.equal(3, solution(3,
					[ 2, 2, 1, 1 ],
					[ 0, 0, 1, 0 ],
					[ 2, 3, 1, 2 ]));

assert.equal(7, solution(2,
	[ 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0 ],
	[ 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1 ],
	[ 7, 10, 9, 10, 7, 5, 5, 1, 8, 5, 6 ]));