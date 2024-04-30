//ts-worksheet-with-variables

/* 
Напиши функцію getMaxNumber, яка приймає число number та повертає найбільше число, яке можна отримати переставляючи цифри в number.

Приклад:

getMaxNumber(123) === 321
getMaxNumber(1) === 1
getMaxNumber(1265) === 6521
getMaxNumber(-526) === -256
*/

function getMaxNumber(n: number): number {
  const strArr: string [] = String(n).split('');

  let resultNum: number = 0;

  if(strArr.includes('-')) {
    resultNum = Number(strArr.sort().join(''));
  } else {
    resultNum = Number(strArr.sort((num1, num2) => Number(num2) - Number(num1)).join(''));
  }
  
  return resultNum;
}

console.log(getMaxNumber(8795735358978));
