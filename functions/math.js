function fact(n) {
    let res = 1;

    while (n != 1) {
        res *= n;
        n -= 1;
    }

    return res;
}

function fib(n) {
    let firstEl = 1;
    let secondEl = 1;

    for (let i = 3; i <= n; i++) {
        let tmp = firstEl + secondEl;
        firstEl = secondEl;
        secondEl = tmp;
    }
    return secondEl;
}

function sumArguments(...elements) {
    return elements.reduce((sum, elem) => sum += elem, 0);
}

function multiArguments(...elements) {
    return elements.reduce((multi, elem) => multi *= elem, 1);
}

function sign(n) {
    if (n === 0) return 0;

    return (n > 0) ? 1 : -1;
}


module.exports = {
    fact, fib, sumArguments, multiArguments, sign
}


