/**
 * p.218
 * bind 
 * Function.prototype.bind = function (thisArg) {
 * 		var fn = this, slice = Array.prototype.slice,
 * 		args = slice.call(arguments, 1);
 * 		return function() { 
 * 			return fn.apply(thisArg, args.concat(slice.call(arguments)));
 * 		};
 * }
 * 
 * - curry() 와 비슷하지만 함수를 호출할 때 this에 바인딩시킬 객체를 사용자가 넣어줄 수 있음 
 * - curry2() 와 달리 좌측에서부터 순서대로만 부분적용 할 수 있음
 */

var print_all = function(arg) {
	for (var i in this) {
		console.log("this[" + i + "] = " + this[i]);
	} 
	for (var i in arguments) {
		console.log("arguments[" + i + "] = " + arguments[i]);
	}
}

var myobj = { name : "zzoon" };

var myfunc = print_all.bind(myobj);
myfunc();
// print_all.call(myobj);

var myfunc1 = print_all.bind(myobj, "iamhjoo", "others");
myfunc1("insidejs");