/**
 * p.209
 * 메모제이션 패턴(함수의 프로퍼티에 캐시 저장) 
 * - 앞의 예제보다 범용적으로 사용 
 * - Function.prototype에 memoization() 함수 구현
 */
Function.prototype.memoization = function(key) { 
    var arg = Array.prototype.slice.call(arguments, 1);
    // 인자로 넘어온 배열의 1번째 인덱스 부터 마지막까지의 배열
    this.data = this.data || {};    

    return this.data[key] !== undefined ? 
        this.data[key] : this.data[key] = this.apply(this, arg);
};

function myCalculate1(input) {
    return input * input;
}

function myCalculate2(input) {
    return input * input / 4;
}

console.log(myCalculate1.memoization(1, 5));
console.log(myCalculate1.memoization(1));
console.log(myCalculate1.data[1]);

console.log(myCalculate1.memoization(2, 4));
console.log(myCalculate1.memoization(2));
console.log(myCalculate1.data[2]);

console.log(myCalculate2.memoization(1, 6));
console.log(myCalculate2.memoization(1));
console.log(myCalculate2.data[1]);

console.log(myCalculate2.memoization(2, 7));
console.log(myCalculate2.memoization(2));
console.log(myCalculate2.data[2]);

console.log(myCalculate2.memoization(2,1)); // key에 이미 값이 있을 경우 저장되어 있는 값 반환