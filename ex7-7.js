/**
 * p.214 
 * 함수 적용(Function.prototype.apply)
 * - 함수형 프로그래밍에서 사용되는 용어 
 * - 입출력을 수행하는 것뿐만 아니라 인자 혹은 반환값으로 전달된 함수를 특정 데이터에 적용 
 * - func.apply(Obj, Args) 'func 함수를 Obj 객체와 Args 인자 배열에 적용시킨다'
 * 
 * 커링(Currying)
 * - 특정 함수에서 정의된 인자의 일부를 넣어 고정시키고, 나머지를 인자로 받는 새로운 함수 생성
 */
function Calculate(a, b, c) {
	console.log(a + ", " + b + ", " + c);
	return a*b+c;
}

function Curry(func) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function() {
		return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
	}
}

var new_func1 = Curry(Calculate, 1);
console.log(new_func1(2,3)); 

var new_func2 = Curry(Calculate, 1, 3);
console.log(new_func2(3)); 

var new_func3 = Curry(Calculate, 1);
console.log(new_func3(1));
console.log(new_func3(5, 4));	

var new_func4 = Curry(Calculate);
console.log(new_func4(1,2,3));