"use strict";

// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)

function sum(n) {
  if (typeof n !== "number") {
    throw new TypeError("You entered not a number");
  }
  if (n <= 0) {
    throw new RangeError("Enter a positive number");
  }
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
}

// sum(5) //console.log 15
// sum(10) //console.log 55
// sum(20) //console.log 210

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
class Student {
  constructor(name, surname, gender, сontact, university) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.contact = сontact;
    this.university = new University(university);
  }
}

// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.

class University {
  constructor(faculty, chair) {
    this.faculty = faculty;
    this.chair = chair;
  }
}

// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента

const znu = new University("Biology", "Genetics");
const student = new Student("Ivan", "Ivanov", "man", "gmail", znu);
console.log(student);

// 2.4 Реализовать функцию выводит на экран всю информацию о студенте

function getStudentInfo(student) {
  for (const item of Object.entries(student)) {
    console.log(item);
  }
}

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел

const arrs = new Array(25).fill(0).map(() => Math.random());

// 3.2 Вывести элементы с четными индексами

const arr=[4,77,33,0,46,8,0,3,7,0,4,0,0,6,8,44,3,7]

function evenIndices(arr) {
  const res = [];
  for (const [key, value] of arr.entries()) {
    if (key % 2 === 0) {
      res.push(value);
    }
  }
  return res;
}

// evenIndices(arr) console.log [4, 33, 46, 0, 7, 4, 0, 8, 3]

// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)

function evenElements(arr) {
  const res = [];
  for (const value of arr.values()) {
    if (value % 2 === 0) {
      res.push(value);
    }
  }
  return res;
}

// evenElements(arr) console.log [4, 0, 46, 8, 0, 0, 4, 0, 0, 6, 8, 44]

// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)

function zeroIndeces(arr) {
  const res = [];
  for (const [key, value] of arr.entries()) {
    if (value === 0) {
      res.push(key);
    }
  }
  return res;
}

// zeroIndeces(arr) console.log [3, 6, 9, 11, 12]

// 3.5 Подсчитать количество нулевых элементов

function countZeroElement(arr) {
  let count = 0;
  for (const value of arr.values()) {
    value === 0 ? count++ : count;
  }
  return count;
}

// countZeroElement(arr) console.log 5

// Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class Book {
  constructor(autor, name, yearPublishing, publishingHouse) {
    this.autor = autor;
    this.name = name;
    this.yearPublishing = yearPublishing;
    this.publishingHouse = publishingHouse;
  }
}
class Ebook extends Book {
  constructor(
    autor,
    name,
    yearPublishing,
    publishingHouse,
    format,
    electronicNumber
  ) {
    super(autor, name, yearPublishing, publishingHouse);
    this.format = format;
    this.electronicNumber = electronicNumber;
  }
}

// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

const consolNumber = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};
