// p.208	명령형 프로그래밍 방식(반복문) 팩토리얼 구하기
function fact(num) {
	var val = 1;
	for (var i = 2; i <= num; i++) 
		val = val * i;
	return val;
}