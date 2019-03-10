Function.prototype.curry = function(one) {
    var origFunc = this;
    var target = origFunc.length; // 함수의 인자 갯수
    var args = [];
    function next(nextOne) {
        args = args.concat(nextOne);
        if (args.length === target) {
            return origFunc.apply(null, args);
        } else {
            return function(nextOne) { return next(nextOne) };
        }
    }
    return next(one);
}

function sumThree(w, x, y) {
    return w + x + y;
}

function multiplyFour(w, x, y, z) {
    return w * x * y * z;
}

console.log(sumThree.curry(2)(3)(4)); // 9
console.log(multiplyFour.curry(2)(3)(4)(5)); // 120

// 출처(Currying(커링) vs Partial application): https://www.zerocho.com/category/JavaScript/post/579236d08241b6f43951af18