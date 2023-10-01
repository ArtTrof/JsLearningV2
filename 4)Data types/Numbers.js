let billion = 1_000_000_000;
let billion2 = 1e9;
let mcs = 0.000001;
console.log(mcs.toFixed(1));//0.0
console.log(isNaN("str"));//false
console.log(isFinite("str")); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity
console.log(isFinite("15")); // true

console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5
console.log(parseInt('12.3')); // 12, only the integer part is returned
console.log(parseFloat('12.3.4')); // 12.3, the second point stops the reading
console.log(parseInt('a123')); // NaN, the first symbol stops the process
