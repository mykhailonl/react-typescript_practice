//ts-worksheet-with-variables

/*
Напиши функцію mergeObjects, яка приймає 2 об'єкти типів T та R (використай generic) та повертає новий об'єкт зі всіма властивостями
першого об'єкта і тими властивостями другого, яких немає в першому.

Приклад:

const user = {
  name: 'Harry',
  surname: 'Potter',
};

const robot = {
  name: 'Cleaner',
  version: 12,
  wheels: 3,
};

mergeObjects(user, robot) === {
  name: 'Harry',
  surname: 'Potter',
  version: 12,
  wheels: 3,
}
*/


function mergeObjects<T extends Record<string, any>, R extends Record<string, any>>(object1: T, object2: R): Record<string, any> {
  let result: Record<string, any> = { ...object1 };
  
  for (const key in object2) {
    if (!(key in result)) {
      result[key] = object2[key];
    }
  }
  return result;
}

const user = {
  name: 'Harry',
  surname: 'Potter',
};

const robot = {
  name: 'Cleaner',
  version: 12,
  wheels: 3,
};


mergeObjects(user, robot)