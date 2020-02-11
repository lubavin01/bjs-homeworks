function sleep(delayMs) {
  const dateMax = Date.now() + delayMs;

  while (Date.now() < dateMax) {
    let s = 0;
    for (let i = 0; i < 100; i++) {
      s += i;
    }
  }
}

function sum(...items) {
  // sleep(500);

  return items.reduce((value, item)=>value+item, 0);
}

console.log(`sum = ${sum(1,2,3,4,5,6,7,8,9)}`);

const compareArrays = (arr1, arr2) => {
  if (!Array.isArray(arr1))  {
    console.log('Argument 1 is not array');
    return;
  }

  if (!Array.isArray(arr2))  {
    console.log('Argument 2 is not array');
    return;
  }

  return arr1.every((item, index)=>{
    // console.log(`item ${item} index ${index}  arr2[index] ${arr2[index]}`);
    return arr2[index] === item;
  }) && arr1.length === arr2.length;

}

console.log( compareArrays([1,2,3], [1,2,3]) );
console.log(compareArrays([8, 9], [6]) ); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])) ; // true


// task memorize
console.log('======= task memorize ==========');

function memorize(fn, memoryMaxLength) {

  memory = [];

  return (...argums)=>{

    // ищем в кэше
    item = memory.find( (item, i) => compareArrays(item.args, argums) );

    if (item) {
      // console.log('from memory');
      return item.result}

    // вычисляем
    result = fn(...argums);

    // кэшируем
    memory.push( {args: argums, result: result} );

    // очищаем лишний кэш
    const overload = memory.length - memoryMaxLength;
    if (overload > 0) {
      for (i = 1; i <= overload; i++) {
        memory.shift();
      }
    }

    return result;
  };
}

const mSum = memorize(sum, 2);
// console.log(mSum(3,1));
// console.log(mSum(3,2));
// console.log(mSum(3,3));
// console.log(mSum(3,4));
// console.log(mSum(3,5));
//
// console.log(mSum(3,1,2));
// console.log(mSum(3,1,2));
//
// console.log(mSum(3,1,3));
// console.log(mSum(3,1,3));

// task test case
console.log('======= task test case ==========');
function testCase(testFunction, timerId) {
  const testArgs = [ [1,2,3], [1,2], [2,1], [1,2,3], [1,2], [2,2], [2,3], [3,2], [3,4], [3,5], [3,6], [3,2,1], [1,2,3], [1,2],[2,2], ];

  console.time(timerId);

  for(let i = 0; i < 10000; i++) {
    testArgs.forEach( (item, i) => {
      //console.log(`item ${item} sum ${testFunction(...item)}`)
      testFunction(...item);
    } );
  }

  console.timeEnd(timerId);
  }

  testCase(mSum, 'profile_mSum');

  testCase(sum, 'profile_sum');
