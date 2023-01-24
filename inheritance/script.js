"use strict";

////////////////
/////// Employees and Managers
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    const fullName = `${this.name} ${this.surname}`;
    return fullName;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getSalary() {
    const emplSalary = this.salary;
    return emplSalary;
  }
  increaseSalary() {
    this.salary += this.salary * 0.1;
    return this.salary;
  }
  getData() {
    const data = `Employee name: ${this.getFullName()} salary: ${this.getSalary()} €`;
    return data;
  }
}
class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
  getSpecialization() {
    return this.specialization;
  }
}
class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.specialization = department;
  }
  getDeparment() {
    return this.department;
  }
  changeDepartment(newDep) {
    this.department = newDep;
  }
}

////////////////
/////// Applications
class App {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }

  getData() {}

  isCCLicence() {
    if (this.licence === "CC") return true;
    else return false;
  }
  like() {
    this.stars++;
  }
  showStars() {
    const printStars = `Our stars number: ${this.stars}`;
    console.log(printStars);
  }
}
class WebApp extends App {
  constructor(name, licence, stars, url, technologies) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies;
  }
  reactBased() {
    this.technologies.forEach(tech => {
      if (tech === "React") return true;
      else return false;
    });
  }
}
class MobileApp extends App {
  constructor(name, licence, stars, platforms) {
    super(name, licence, stars);
    this.platforms = platforms;
  }
  forAndroid() {
    this.platforms.forEach(platform => {
      if (platform === "Android") return true;
      else return false;
    });
  }
}
