function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combinedValues;
combinedValues = add;
console.log(combinedValues(4, 5));
printResult(add(3, 5));
addAndHandle(11, 22, function (as) {
    console.log('callBack is: ' + as);
});
