/**
 * p.206
 * reduce 
 * - 자바스크립트에서 범용적으로 사용되는 함수
 * - 각 배열의 요소를 처음부터 하나씩 연산에 사용하여 최종 결과값 도출
 * - 배열의 각 원소를 합, 곱 등 다른 방식으로 산술하여 결과값을 얻을 때 새로운 함수를 구현하지 않아도 됨
 */

function reduce(func, arr, memo) {
	var len = arr.length,
		i = 0,
		accum = memo;

	for (; i < len; i++) {
		accum = func(accum, arr[i]);
	}

	return accum;
}