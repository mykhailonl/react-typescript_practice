//ts-worksheet-with-variables

/* 
Напиши функцію createSentence, яка перетворює масив слів на речення.
Останні два слова поєднай за допомогою and, а всі інші слова комами. Не забудь про пробіли.
Порожні слова ігноруй. Якщо не дано жодного слова просто поверни порожній рядок.

Приклади:

createSentence(['Michael', 'Carolyn', 'Roger']) === 'Michael, Carolyn and Roger'
createSentence(['Michael', '', '', 'Carolyn']) === 'Michael and Carolyn'
createSentence(['', 'Michael', '']) === 'Michael'
createSentence(['', '', '']) === ''
*/

function createSentence(arr: string []): string {
  const filteredWords: string [] = arr.filter((word: string) => word.trim());

  if (filteredWords.length === 0) {
    return '';
  }

  let sentence: string = filteredWords[0];
  for (let i: number = 1; i < filteredWords.length - 1; i++) {
    sentence += ', ' + filteredWords[i];
  }
  if (filteredWords.length > 1) {
    sentence += ' and ' + filteredWords[filteredWords.length - 1];
  }

  return sentence;
}

createSentence(['Michael', 'Carolyn', 'Roger'])
createSentence(['Michael', '', '', 'Carolyn'])
createSentence(['', 'Michael', ''])
createSentence(['', '', ''])