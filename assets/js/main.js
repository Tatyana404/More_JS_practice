"use strict";

// 1 Вычислить сумму первых N элементов последовательности. Параметр N задает пользователь (например n=4 , 1+2+3+4)

// 2.1 Создать объект Student, который содержит следующие свойства: имя, фамилию, пол, контактные данные
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию, которая выводит на экран всю информацию о студенте

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов
// 3.1*Инициализация с помощью случайных чисел
// 3.2 Вывести элементы с четными индексами
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
// 3.5 Подсчитать количество нулевых элементов

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

// Task 1

const sum = (n) => {
  if (typeof n !== "number") {
    throw new TypeError("You entered not a number !");
  }

  if (n <= 0) {
    throw new RangeError("Enter a positive number !");
  }

  let result = 0;

  for (let i = 1; i <= n; i++) {
    result = result + i;
  }

  return result;
};

console.log(sum(20));

// Task 2.1

class Student {
  constructor(name, surname, gender, contact, university) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.contact = contact;
    this.university = university;
  }

  getInfo() {
    console.log(this);
  }
}

// Task 2.2

class University {
  constructor(faculty, chair) {
    this.faculty = faculty;
    this.chair = chair;
  }
}

// Task 2.3

const university = new University("Biology", "Genetics");
const student = new Student(
  "Ivan",
  "Ivanov",
  "man",
  "+38 123 45 67",
  university
);

// Task 2.4

student.getInfo();

// Task 3.1

const arr = new Array(25).fill(0).map(() => Math.round(Math.random() * 100));

console.log(arr);

// Task 3.2

const evenIndices = (arr) => {
  const res = [];

  for (const [key, value] of arr.entries()) {
    if (key % 2 === 0) {
      res.push(value);
    }
  }

  return res;
};

console.log(evenIndices(arr));

// Task 3.3

const evenElements = (arr) => {
  const res = [];

  for (const value of arr.values()) {
    if (value % 2 === 0) {
      res.push(value);
    }
  }

  return res;
};

console.log(evenElements(arr));

// Task 3.4

const zeroIndeces = (arr) => {
  const res = [];

  for (const [key, value] of arr.entries()) {
    if (value === 0) {
      res.push(key);
    }
  }

  return res;
};

console.log(zeroIndeces(arr));

// Task 3.5

const countZeroElement = (arr) => {
  let count = 0;

  for (const value of arr.values()) {
    value === 0 ? count++ : count;
  }

  return count;
};

console.log(countZeroElement(arr));

// Task 4

class Book {
  constructor(autor, name, yearOfPublication, publishingHouse) {
    this.autor = autor;
    this.name = name;
    this.yearOfPublication = yearOfPublication;
    this.publishingHouse = publishingHouse;
  }
}

class Ebook extends Book {
  constructor(
    autor,
    name,
    yearOfPublication,
    publishingHouse,
    format,
    electronicNumber
  ) {
    super(autor, name, yearOfPublication, publishingHouse);
    this.format = format;
    this.electronicNumber = electronicNumber;
  }
}

// Task 5

const consoleNumber = (num) => {
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

console.log(consoleNumber(20));
