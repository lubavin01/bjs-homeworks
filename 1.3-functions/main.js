// ====== task1 ==========
let getSolutions = function(a,b,c) {
  let D = b*b - 4*a*c;
  let result = {D };

  if (D === 0) {
    let x1 = -b / (2*a)
    result.roots = [x1];
  } else if (D > 0) {
    let x1 = -b + Math.sqrt(D)/(2*a);
    let x2 = -b - Math.sqrt(D)/(2*a);

    result.roots = [x1, x2];
  }

  return result;
}

let showSolutionMessage = function(a,b,c) {
  result = getSolutions(a,b,c);

  let a_ =  a < 0 ? '(' + a + ')' : a;
  let b_ =  b < 0 ? '(' + b + ')' : b;
  let c_ =  c < 0 ? '(' + c + ')' : c;

  console.log(`Вычисляем корни квадратного уравнения ${a_}x² + ${b_}x + ${c_}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);

  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень. X₁ = ${result.roots[0]}`);

  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

// ====== task2 ==========

let getAverageScore = function(data) {

  result = {};

  let arrayAverage = function(arr) {
    let sum = 0;
    for (let value of arr) {
      sum += value;
    }
    return sum/arr.length;
  }

  let sum = 0;
  i = 0;
  for (let key in data) {
    result[key] = arrayAverage(data[key]);
    sum += result[key];
    i++;
  }

  result.average = sum/(i === 0 ? 1 : i);

  return result;
}

// ====== task3 ==========

let getPersonData = function(secretData) {
  let result = {
    firstName: secretData.aaa === 0 ? 'Родриго' : 'Эмильо',
    lastName: secretData.bbb === 0 ? 'Родриго' : 'Эмильо',
  }  

  return result;
}
