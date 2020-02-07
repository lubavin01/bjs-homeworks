'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(parseInt(percent))) {
    return 'Incorrect "percent"';
  }

  if (isNaN(parseInt(contribution))) {
    return 'Incorrect "contribution"';
  }

  if (isNaN(parseInt(amount))) {
    return 'Incorrect "amount"';
  }

  if (isNaN(Date.parse(date)) ) {
    return 'Incorrect "Date"';
  }

  let correctDate = new Date(date);
  if (correctDate - new Date() < 0) {
    return 'Incorrect "Date" (cannot be before Now)';
  }

  let sumToPay = amount - contribution;
  if (sumToPay === 0) {
    return '0';
  }

  let monthsToPay = Math.ceil((correctDate - new Date() )/(1000*3600*24*31) );
  let p = percent/(100*12);

  let payment = sumToPay*(p + p/( Math.pow( (1+p), monthsToPay) - 1 ) )
  let totalAmount = payment*monthsToPay;

  return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
  let name_ = name;
  if (!name_) {
    name_ = 'Аноним';
  }

  let greeting = `Привет мир! Меня зовут ${name_}`;
  console.log(greeting);
  return greeting;
}
