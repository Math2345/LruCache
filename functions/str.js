function extractCurrencyValue(str) {
    return +str.slice(1);
}

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

function zip(str) {
    return str.replace(/(.)\1*/g,
        function (m, c) {
        return c + (m.length > 1 ? m.length : '');
    });
}

module.exports = {
    extractCurrencyValue, truncate, zip
}