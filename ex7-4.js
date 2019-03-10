/**
 * p.212 
 * 피보나치 수열 
 * - 1, 1, 2, 3, 5, 8 ...
 * - 첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열
 */
var fibo = function() {
	var cache = {'0' : 0, '1' : 1};

	var func = function(n) {
		if (typeof(cache[n]) === 'number') {	// cache[n]에 값이 저장되어 있을 경우
			result = cache[n];
		} else {
			result = cache[n] = func(n-1) + func(n-2);
		}
		return result;
	}
	return func;
}();

console.log(fibo(10));