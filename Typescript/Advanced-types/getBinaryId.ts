//ts-worksheet-with-variables

/* 
Напиши функцію getBinaryId, яка приймає userId та повертає рядок, що є його записом у двійковій системі.
userId може бути числом або рядком (шістнадцятковим записом числа), який також треба перевести у двійкову систему.

Приклади:

getBinaryId(7) === '111'
getBinaryId('FE00') === '1111111000000000'
*/

type User = string | number;

function getBinaryId(userId: User): string {
  const result: number = 
    typeof userId === 'string'
      ? parseInt(userId, 16) 
      : userId
  ;

  const binaryId: string = result.toString(2);
  return binaryId;
}

getBinaryId(7)
getBinaryId('FE00')