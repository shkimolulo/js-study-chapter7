/**
 * p.223 
 * reduce 
 * - 배열의 각 요소를 하나씩 꺼내서 사용자 정의 함수 적용시킨 뒤 그 값을 누적  
 */
var _ = require('underscore');  // yarn add underscore

Array.prototype.reduce = function(callback) { 
	var obj = this;
	var value, accumulated_value = 0;
 
	for ( var i = 0; i < obj.length; i++ ) {
		value = obj[i];
		accumulated_value = callback.call(null, accumulated_value, value); 
	}
	 
  return accumulated_value;
};  

var arr = [1,2,3];
var accumulated_val = arr.reduce(function(a, b) {
	return a + b*b;
});

console.log(accumulated_val);
// 0 + 1 * 1 + 2 * 2 + 3 * 3 = 14

// underscore.js의 reduce
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum); // 0 + 1 + 2 + 3

var sum = _.reduce([1, 2, 3, 4], function(memo, num){ return memo + num; });
console.log(sum); 

// 참고(_.reduce( )): https://medium.com/@cheonmyung0217/underscore-js-reduce-함수-79fd6e5a4e31