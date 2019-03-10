/**
 * p.221
 * wrapper 
 * - 특정 함수를 자신의 함수로 덮어쓰는 것
 * - 객체지향 프로그래밍의 override(상위 클래스에서 정의된 변수와 메소드의 내용을, 하위 클래스에서 재정의하는 것)
 */

function wrap(object, method, wrapper) {
	var fn = object[method];
	return object[method] = function() {
		return wrapper.apply(this, [ fn.bind(this) ].concat(
			// return wrapper.apply(this, [ fn ].concat(
		Array.prototype.slice.call(arguments)));
		// [ [Function: bound ], 'zzoon' ]
	};
}

Function.prototype.original = function(value) {
	this.value = value;
	console.log("value : " + this.value);
}

var mywrap = wrap(Function.prototype, "original", function(orig_func, value) {
	this.value = 20;
	orig_func(value);
	console.log("wrapper value : " + this.value);
});
var obj = new mywrap("zzoon");
function func() {}
var test = func;
test.original("soohyun");