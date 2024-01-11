/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    if (n < -1000 || n > 1000) {
        throw new Error("Invalid input. n should be between -1000 and 1000.");
    }
    let counterValue = n;
    return function () {
        return counterValue++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */