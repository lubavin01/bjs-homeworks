function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";
    // const result = checkBirthday_correct(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
  let birthdayMS = Date.parse(birthday);
  let now = Date.now();

  let diff = now - birthdayMS;
  if (diff <= 0) {return false}

  let age = diff / (1000*3600*24*365.25);

  return (age >= 18);

}

function checkBirthday_correct(birthday) {
  let bday = new Date(birthday);
  let bdayYear = bday.getFullYear();
  let bdayMonth = bday.getMonth();
  let bdayDate = bday.getDate();

  let now = new Date();
  let nowYear = now.getFullYear();
  let nowMonth = now.getMonth();
  let nowDate = now.getDate();

  if (nowYear > bdayYear + 18)  {
    return true;
  } else if (nowYear < bdayYear + 18) {
    return false;
  } else {
    if (nowMonth > bdayMonth) {
      return true;
    } else if (nowMonth < bdayMonth) {
      return false;
    } else {
      if (nowDate >= bdayDate) {
        return true;
      } else {
        return false;
      }
    }
  }



  // let birthdayMS = Date.parse(birthday);
  // let now = Date.now();
  //
  // let diff = now - birthdayMS;
  // if (diff <= 0) {return false}
  //
  // let age = diff / (1000*3600*24*365.25);
  //
  // return (age >= 18);

}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    if (animal == undefined) {
      return null;
    }

    sound = animal.sound;
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {

  if (!marks.length) {
    return 0;
  }

  let sum = 0;
  let actualLength = 0;
  for (let m of marks) {
    let mInteger = parseInt(m);
    if (!isNaN(mInteger)) {
      sum += parseInt(m);
      actualLength++;
    }
  }

  average =  (actualLength === 0) ? 0 : sum/actualLength;
  roundedAverage = Math.round(average);

  return roundedAverage;
}
