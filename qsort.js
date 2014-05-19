function swap(A,a,b) {
	var tmp = A[a];
	A[a] = A[b];
	A[b] = tmp;
}

function partition(A, start, end, pivot) {
	var pivotVal = A[pivot];
	swap(A, pivot, end);

	var nextAvail = start;
	for (var curr = start; curr < end; curr++) {
		if (A[curr] < pivotVal) {
			swap(A, curr, nextAvail);
			nextAvail++;
		}
	}
	swap(A, nextAvail, end);
	return nextAvail;
}

function qsort(A) {
	qsortInner(A,0,A.length-1);
}
function qsortInner(A,start,end) {
	if (start >= end)
		return A;
	var pivotPos = partition(A, start, end, Math.floor((end - start + 1)/2));
	console.log("partition(", A, start, end, pivotPos);
	return qsortInner(A,start,pivotPos-1)
			.concat(A[pivotPos])
			.concat(qsortInner(A,pivotPos+1,end));
}

var assert = require('assert');
var A = [1,6,5,8,4,3];
qsort(A);
assert.deepEqual([1,3,4,5,6,8], A);

var B = [7,9,1,8,7,3];
qsort(B);
assert.deepEqual([1,3,7,7,8,9], B);