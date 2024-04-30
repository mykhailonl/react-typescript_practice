//ts-worksheet-with-variables

/* 
напиши функцію isValid, яка прийматиме рядок з дужками і звірятиме чи всі правила було дотримано.
Види дужок, які будуть присутні: (), {}, [].
Що вкладається в поняття валідний рядок? Валідним вважається той рядок, у якому усі дужки закриваються парною дужкою.
Пустий рядок завжди вважається валідним.

Ось приклади:

isValid('(){}[]') === true
isValid('((()))') === true
isValid('(()))') === false
isValid('[(])') === false
isValid('{]') === false
isValid('[([{}]){}]') === true

Підказка: для вирішення варто використовувати стек відкриваючих дужок, і перевіряти, чи співпадає зустрінута закриваюча з останньою відкриваючою.
*/

function isValid(braces: string): boolean {
  const stack: string [] = [];
  const opposites: {[key: string]: string} = {'(' : ')', '{' : '}', '[' : ']'};

  for (const char of braces) {
    if (char in opposites) {
      stack.push(char);
    }
    else {
      if (stack.length === 0 || opposites[stack.pop()!] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}


isValid('(){}[]')
// isValid('((()))')
// isValid('(()))')
// isValid('[(])')
// isValid('{]')
// isValid('[([{}]){}]')