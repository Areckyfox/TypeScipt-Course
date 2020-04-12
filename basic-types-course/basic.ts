function add3(n1: number, n2: number, showResult: boolean, phrase: string) {
   
   const result = n1 + n2;

    if (showResult) {
       console.log(phrase + result);
   }
    return result;
}

const number1 = 7;
const number2 = 2.8;
const printResult = true;
const resultPhrase: string = 'Result is: ';


const result = add3(number1, number2, printResult, resultPhrase);