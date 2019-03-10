/** 
 * p.224 
 * map 
 * - 배열의 각 요소를 꺼내서 사용자 정의 함수를 적용시켜 값을 얻은 후 새로운 배열에 넣음
 * - 배열의 요소에 각각 제곱하여 새로운 배열 반환
 */
var _ = require('underscore');  // yarn add underscore

Array.prototype.map = function(callback) {
	var obj = this;
	var value, mapped_value;
	var	A = new Array(obj.length);

	for ( var i = 0; i < obj.length; i++ ) {
		value = obj[i];
		mapped_value = callback.call(null, value); 
		A[i] = mapped_value;
	}
	return A;
};  
  
var arr = [1,2,3];
var new_arr = arr.map(function(value) {
	return value*value;
});

console.log(new_arr);

// underscore.js의 map
var multiple = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(multiple); // [3, 6, 9]

var multipleObj = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
console.log( multipleObj ); // [3, 6, 9]

// 참고(_.map( )): https://medium.com/@cheonmyung0217/underscore-js-map-함수-cd3d47774d96
