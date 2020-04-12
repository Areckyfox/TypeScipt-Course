function add2(n1: number, n2:number) {
    return n1 + n2
}

function printResult2(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number)=> void) {
    const result = n1 + n2;
    cb(result);
}

let combinedValues: (a: number, b: number)=> number; 
combinedValues = add2;

console.log( combinedValues(4,5));


printResult2(add2(3, 5));

addAndHandle(11, 22, (as)=> {console.log('callBack is: ' + as);
})