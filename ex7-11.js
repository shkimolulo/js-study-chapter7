/**
 * p.224
 * each 
 * - 배열의 각 요소를 하나씩 꺼내서 차례대로 특정 함수에 인자로 넣어 실행 
 * - 배열과 객체를 length 프로퍼티 유무로 구분해서 각 요소 출력
 */
var _ = require('underscore');  // yarn add underscore

function each( obj, fn, args ) {
	if ( obj.length == undefined )	// length를 가지지 않는 객체 
		for ( var i in obj ) {
			fn.apply( obj[i], args || [i, obj[i]] );
		}
	else	// length를 가지는 배열 객체
		for ( var i = 0; i < obj.length; i++ ) {
			fn.apply( obj[i], args || [i, obj[i]] );
		}
	return obj;
};
  
each([1,2,3], function(idx, num) {
	console.log(idx + ": " + num);
});

each([1,2,3,4,5], function(idx, num) {
	console.log(idx + ": " + num);
}, [5, 6]);

var zzoon = {
	name : "zzoon",
	age : 30,
	sex : "Male"
};

each(zzoon, function(idx, value) {
	console.log(idx + ": " + value);
});

// underscore.js의 each 
var arr = [0, 1, 2];
var secondArray = [4, 5, 6];
_.each(arr, function(item) {
	console.log(this[item]); // 4, 5, 6
}, secondArray);

/**
 * 배열 'arr'의 각 element를 iterate 함수인 function(item)에 인자로 반복적으로 돌리는데, 
 * 여기서 secondArray는 iterate 함수에 있는 this로 바인딩되어 사용된다.
 * 즉, secondArray[0], secondArray[1], secondArray[2]의 값을 출력하게 되어, 4, 5, 6이 출력된다.
 * 참고(_.each( )): https://medium.com/@cheonmyung0217/underscore-js-each-함수-4a899778a9e0
 */