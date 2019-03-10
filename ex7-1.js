/**
 * p.201 ~ p.205 
 * 함수형 프로그래밍 
 * - 함수 조합으로 작업 수행 -> 작업 중 필요한 데이터와 상태 변하지 않고 오로지 함수만 변할 수 있음 
 * - 간단한 모듈의 적절한 재구성, 조합으로 프로그래밍 가능
 * 
 * 명령형 프로그래밍 
 * - 컴퓨터가 수행할 일의 명령을 순서대로 기술 
 * - 프로시저: 특정 작업을 수행하는 여러 가지 명령이 기술되어 있는 함수	예) printf
 * 
 * 순수 함수
 * - f1, f2, f3 
 * - 외부(zzoon이라는 변수) 영향 미치지 않음 
 * - 임의의 인자에 대한 반환값이 항상 같으며 상태를 변화시키지 않는 함수 
 * 예) 순수 함수 
 * 		function add(a, b) { return a + b; }
 * 		
 * 		function objectAdd(obj, b) { 
 * 			return { val: obj.val + b }; 
 * 		}
 * 예) 비순수 함수
 * 		var c = 10;	// c가 상수이면 순수함수
 * 		function add(a, b) {
 * 			c = b;	// 외부 상태를 변경함 
 * 			return a + b + c;
 * 		}
 * 
 * 		function objectAdd(obj, b) {
 * 			obj.val += b;
 * 		}
 * 
 * 고계 함수 
 * - get_encrypted
 * - 함수를 함수의 인자나 반환값으로 사용할 수 있는 함수
 * 
 * - 참고(순수함수란?): https://jeong-pro.tistory.com/23
 * - 참고(위키백과 - 함수형 프로그래밍): https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D 
 */

var f1 = function(input) {
	/* */
	var result = 1;
	return result;
}

var f2 = function(input) {
	/* */
	var result = 2;
	return result;
}

var f3 = function(input) {
	/* */
	var result = 3;
	return result;
}

var get_encrypted = function(func) {
	var str = 'zzoon';

	return function() {
		return func.call(null, str);	// this 대신 null 사용가능
	}
}

var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f2)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f3)();
console.log(encrypted_value);

/** 
 * get_encrypted의 클로저의 scope 
 * [[Scopes]]: Scopes[2]
 * 0: Closure (get_encrypted) {func: ƒ, str: "zzoon"}
 * 1: Global {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
 * - str은 외부에서 접근할 수 없으므로 영향을 받지 않도록 함수형 프로그래밍을 구현 
 */