// ts-worksheet-with-variables

/* 
Створи функцію canIWear, яка приймає два рядки: mySize та itemSize і повертає true, якщо itemSize не менше за mySize.
При цьому розмір — це завжди одне з 5 значень xs, s, m, l або xl (в порядку зростання).
Створи новий тип Size, що складатиметься з вказаних значень, та використай його для типізації.

Приклади:

canIWear('l', 'l') === true
canIWear('m', 'xl') === true
canIWear('s', 'xs') === false
*/

// type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

enum Size {
  xs,
  s,
  m,
  l,
  xl,
}

function canIWear(mySize: string, itemSize: string): boolean {
  const result: number = Number(Size[itemSize as keyof typeof Size]) - Number(Size[mySize as keyof typeof Size]);
  return result >= 0? true : false;
}


canIWear('s', 'xs');

Size['xs']
Size['xl']