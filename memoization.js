/**
 * p.209
 * 메모제이션 패턴(함수의 프로퍼티에 캐시 저장) 
 * - memoize: 계산 결과를 저장해 놓아 이후 다시 계산할 필요 없이 사용할 수 있게 한다는 컴퓨팅 용어 
 * - 계산된 값을 함수 프로퍼티값으로 담아 놓고 나중에 사용 
 */

function Calculate(key, input, func) {
    // p.99 arguments 객체 - 정의된 함수의 인자보다 적게 호출했을 경우 나머지 인자는 undefined, 많을 경우 무시하고 에러 발생하지 않음
    Calculate.data = Calculate.data || {};  
    // OR연산자의 왼쪽의 값이 null, undefined, empty 인 경우 오른쪽의 값이 할당

    if (!Calculate.data[key]) {
        var result;
        result = func(input);
        Calculate.data[key] = result;
    }

    return Calculate.data[key];
}

console.log(Calculate(1, 5, function(input) {
    return input * input;
}));
console.log(Calculate(1));
console.log(Calculate.data[1]);

console.log(Calculate(2, 5, function(input) {
    return input * input / 4;
}));
console.log(Calculate(2));
console.log(Calculate.data[2]);