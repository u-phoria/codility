function solution(S) {
	var st = [];
	var opens = '([{', closes = ')]}';
	for (var i = 0; i < S.length; i++) {
		if (opens.indexOf(S[i]) > -1) {
			st.push(S[i]);
			continue;
		}
		if (st.length === 0)
			return 0;
		if (closes.indexOf(S[i]) !== opens.indexOf(st.pop()))
			return 0;
	}
	return st.length === 0 ? 1 : 0;
}

var assert = require('assert');
assert.equal(1, solution(''));
assert.equal(1, solution('{[()()]}'));
assert.equal(0, solution('([)()]'));