// p.208	명령형 프로그래밍 방식(재귀호출) 팩토리얼 구하기
function fact(num) {
	if (num == 0) return 1;
	else return num* fact(num-1);
}