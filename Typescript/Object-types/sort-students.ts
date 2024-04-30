//ts-worksheet-with-variables
/* 
Створи функцію sortStudents, яка приймає масив students, порядок сортування sortBy типу SortType та order ('asc' (за замовчуванням) або 'desc')
і повертає новий масив, впорядкований відповідно до заданих параметрів. Початковий масив повинен залишитися незмінним.

Також додай правильні типи:
interface Student для студентів:
{
  name: 'Jessica',
  surname: 'Buxton',
  age: 26,
  married: true,
  grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
}

enum SortType з наступними значеннями:
Name - за ім'ям
Surname - за прізвищем
Age - за віком
Married - за статусом одруженості
AverageGrade - за середнім балом з масиву grades
type SortOrder зі значеннями 'asc' та 'desc'.
Додаткова вимога: Не використовуй метод reverse, замість цього помнож результат функції з порівняння у методі sort на -1, якщо сортуєш у зворотньому порядку.

Приклади:
// від наймолодшого до найстаршого
const studentsByAge = sortStudents(students, SortType.Age, 'asc');

// від найстаршого до наймолодшого
const studentsByAge = sortStudents(students, SortType.Age, 'desc');

// від найнижчого середнього балу до найвищого
const studentsByGrade = sortStudents(students, SortType.AverageGrade, 'asc');

// Прізвища від Z до A
const studentsBySurnameDesc = sortStudents(students, SortType.Surname, 'desc');
*/
enum SortType {
  Name = "name",
  Surname = "surname",
  Age = "age",
  Married = "married",
  AverageGrade = "avgrade",
}

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

type SortOrder = "asc" | "desc";

const students: Student[] = [
  {
    name: "Jessica",
    surname: "Buxton",
    age: 26,
    married: true,
    grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
  },
  {
    name: "Andrew",
    surname: "Smith",
    age: 32,
    married: false,
    grades: [1, 1, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
  },
];

function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder = "asc"
): Student [] {
  const sortedStudents: Student[] = [...students];

  let sortOrder: number = order === "asc" ? 1 : -1;
  switch (sortBy) {
    case "name":
      sortedStudents.sort(
        (a: Student, b: Student) => a.name.localeCompare(b.name) * sortOrder
      );
      break;
    case "surname":
      sortedStudents.sort(
        (a: Student, b: Student) =>
          a.surname.localeCompare(b.surname) * sortOrder
      );
      break;
    case "age":
      sortedStudents.sort(
        (a: Student, b: Student) => (a.age - b.age) * sortOrder
      );
      break;
    case "married":
      sortedStudents.sort(
        (a: Student, b: Student) =>
          (a.married === b.married ? 0 : a.married ? -1 : 1)
      );
      break;
    case "avgrade":
      sortedStudents.sort(
        (a: Student, b: Student) => 
          ((a.grades.reduce((x: number, y: number) => x + y, 0) / a.grades.length) -  (b.grades.reduce((x: number, y: number) => x + y, 0) / b.grades.length)) * sortOrder 
      );
      break;
  }

  return sortedStudents;
}

const studentsBySurnameDesc = sortStudents(students, SortType.Surname, 'desc');
const studentsByAgeAsc = sortStudents(students, SortType.Age, 'asc');
const studentsByAgeDesc = sortStudents(students, SortType.Age, 'desc');
const studentsByGrade = sortStudents(students, SortType.AverageGrade, 'asc');

