/** 
 * p.209
 * 함수형 프로그래밍 방식(재귀호출, 캐시) 팩토리얼 구하기
 * - 3! = 1 * 2 * 3
 * - 5! = 3! * 4 * 5 
 * - 위와 같이 중복되는 부분을 캐시에 저장해서 성능을 고려한 방법
 */

var fact = function() {
	var cache = {'0' : 1};
	var func = function(n) {
		var result = 0;

		if (typeof(cache[n]) === 'number') {
			result = cache[n];
		} else {
			result = cache[n] = n * func(n-1);
		}

		return result;
	}

	return func;
}();

console.log(fact(10));
console.log(fact(20));