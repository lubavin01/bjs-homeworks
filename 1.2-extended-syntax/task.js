"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    // let span = window.result;
    // span.textContent = "х = "+result;
    window.res.textContent = 'х = '+result;
}

function getResult(a,b,c){
    D = Math.sqrt(b*b - 4 * a * c);

    result = [];

    if (D > 0) {
      result.push((-b + D)/(2*a));
      result.push((-b - D)/(2*a));
    } else if (D === 0) {
      result.push(-b/(2*a));
    }

    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
  let maximum = 5;

  if (marks.length === 0) {
    return 0;
  }

  if (marks.length > maximum) {
    console.log(`Больше ${maximum} оценок`);
    marks.splice(maximum);
  }

  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum+=marks[i];
  }

  return sum/marks.length;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
  let currentDate = new Date();
  if (currentDate.getFullYear() - dateOfBirthday.getFullYear() < 18) {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  } else {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  }

  return result;

}
