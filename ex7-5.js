/**
 * p.213 
 * cacher
 * - ex7-2-3.js의 reduce 함수와 같이 캐시하는 cacher 함수, 캐시를 이용해 결과값을 얻을 때 새로운 함수를 구현하지 않아도 됨
 */
var cacher = function(cache, func) {
	var calculate = function(n) {
		if (typeof(cache[n]) === 'number') {
			result = cache[n];
		} else {
			result = cache[n] = func(calculate, n);
		}

		return result;
	}
	
	return calculate;
};

