var _ = require('underscore');  // yarn add underscore

Function.prototype.partial = function() {
    var fn = this, 
        args = Array.prototype.slice.call(arguments);
        // _args = arguments;
    return function() { 
        // var args = Array.prototype.slice.call(_args)
        var arg = 0;
        for (var i = 0; i < args.length && arg < arguments.length; i++)
        if (args[i] === undefined) args[i] = arguments[arg++];
        return fn.apply(this, args);
    };
};
  
function abc(a, b, c) {
    console.log(a, b, c);
}

function add() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    console.log(result);
}

/** 
 * 문제점
 * 1. 함수의 인자로 undefined를 사용할 수 없음
 * 2. 나중에 실제로 실행될 함수에서 사용할 인자의 개수만큼 꼭 미리 채워 놓아야함 
 * 3. 함수를 다시 실행해도 같은 args를 바라보기 때문에 처음 한 번만 정상 동작 (5라인 주석 후 6,8라인 주석 해제)
 */

var abcFunc = abc.partial(undefined, 'b');
abcFunc(undefined); 

abcFunc = abc.partial(undefined, 'b', undefined);
abcFunc('a', 'c'); 

abcFunc = abc.partial(undefined, undefined, 'c')
abcFunc('aa', 'bb', 'dd');

abcFunc('ee', 'ff');

// underscore.js 의 partial
console.log("======= underscore =======");
abcFunc = _.partial(abc, _, 'b'); // a 가 올 자리를 비워두었고 c 자리는 생략
abcFunc('a', 'c');

abcFunc = _.partial(abc, 'a', _, 'c'); // b가 올 자리를 비워둠
abcFunc(undefined);

var addFunc = _.partial(add, _, 2); // 1이 올자리를 비워둠
addFunc(1, 3, 4, 5); // 이후에 인자를 더 많이 넘겨도 모두 add에게 전달 됨
addFunc(3,5);

// 참고(함수의 부분적용): https://github.com/indongyoo/functional-javascript/wiki/1.4-함수형-자바스크립트를-위한-기초#147-함수를-리턴하는-함수와-부분-적용