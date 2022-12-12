// Класс Person
// Создать класс Person, который содержит:
// Свойства fullName, age;
// методы move() и talk(), в которых просто вывести на консоль сообщение -"Такой-то ${fullname} говорит".
// Добавьте два конструктора - Person() и Person(fullName, age).
// Создайте два объекта этого класса. Один объект инициализируется конструктором Person(), другой - Person(fullName, age).
// Наследование Student, Aspirant

class Person {
  constructor(fullName = "John Snow", age = 20) {
    this.fullName = fullName;
    this.age = age;
  }
  talk() {
    const text = `${this.fullName} говорит...`;
    console.log(text);
  }
  move() {
    const text = `${this.fullName} двигается...`;
    console.log(text);
  }
}

const person1 = new Person();
const person2 = new Person("Batman", 40);

person1.talk();
person2.talk();

// --------------
// Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
// Класс Student содержит переменные: firstName, lastName, group, а также averageMark, содержащую среднюю оценку.
// Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100 USD, иначе 80.
// Переопределить(написать с таким же именем) этот метод в классе Aspirant. Если средняя оценка аспиранта равна 5, то сумма 200 USD, иначе 180.
// Создать массив, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.
console.log("\n\n");

class Student {
  constructor(firstName, lastName, group, averageMark) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.averageMark = averageMark;
    this.scholarshipMin = 80;
    this.scholarshipMax = 100;
  }
  getScholarship = () => {
    const scholarship = this.averageMark === 5 ? this.scholarshipMax : this.scholarshipMin;
    return `${scholarship} USD`;
  };
}

class Aspirant extends (Student) {
  constructor(...args) {
    super(...args);

    this.scholarshipMin = 180;
    this.scholarshipMax = 200;
  }
}

const s1 = new Student("Ola", "Becker", 5, 5);
const s2 = new Student("Oscar", "Gutierrez", 5, 4);
const a1 = new Aspirant("Hattie", "Carson", 5, 5);
const a2 = new Aspirant("Olivia", "Steele", 5, 4);

const persons = [s1, s2, a1, a2];
const scholarships = persons.map((person) => person.getScholarship());

console.log(scholarships);
