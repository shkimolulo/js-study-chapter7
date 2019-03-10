// p.205	배열의 각 원소의 합 구하기
function sum(arr) {
	var len = arr.length;
	var i = 0, sum =0;

	for (; i < len; i++) {
		sum += arr[i];
	}

	return sum;
}

var arr = [ 1, 2, 3, 4 ];
console.log(sum(arr));

