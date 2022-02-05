module.exports = function reverse(n) {
    // let str=n;
    // return n < 0? Math.abs(n): 
    let str = String(Math.abs(n));
    if (str[str.length - 1] === '0') {
        str = str.slice(0, str.length - 1);
        return Number(str.split('').reverse().join(''));
    } else { return Number(str.split('').reverse().join('')); }
}
