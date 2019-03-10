/**
 * p.216 
 * 함수의 부분적용(Partially applying functions)
 * - 함수를 부분적으로 적용하여 새로운 함수를 반환받는 방식
 */
function Calculate(a, b, c) {
	return a*b+c;
}

function Curry2(func) {
	var args = Array.prototype.slice.call(arguments, 1);

	return function() {
		var arg_idx = 0;
		for (var i = 0; i < args.length && arg_idx < arguments.length; i++)
			if (args[i] === undefined)
				args[i] = arguments[arg_idx++];
		return func.apply(null, args);
	}
}

var new_func = Curry2(Calculate, 1, undefined, 4);
console.log(new_func(3));	// 1*3+4
console.log(new_func(5));	// 1*5*4가 아닌 저장된 1*3+4 출력됨