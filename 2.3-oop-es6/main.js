// ======= task 1 =============

class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;

    this.initialDurability = this.durability;
  }

  takeDamage(damage) {
    this.durability -= damage;

    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  isBroken() {
    if (this.durability === 0) {
      return true;
    }

    return false;
  }

  getDamage() {
    let coef = 1;
    if ( this.isBroken() ) {
      coef = 0;
    }
    else if (this.durability / this.initialDurability < 0.3) {
      coef = 0.5;
    }

    return this.attack*coef;
  }
}

 // ========= tests ==========
// const sword = new Weapon('sword', 20, 10, 1)
// sword.takeDamage(5);
// console.log(sword);
//
// sword.takeDamage(50);
// console.log(sword);
//
// const arm = new Weapon('arm', 1, Infinity, 1);
// arm.takeDamage(10);
// console.log(arm);
//
// const bow = new Weapon('bow', 10, 200, 3);
// console.log(bow);
// console.log(bow.getDamage());
// bow.takeDamage(180);
// console.log(bow.getDamage());
// bow.takeDamage(50);
// console.log(bow.getDamage());

const arm = new Weapon('arm', 1, Infinity, 1);
const bow = new Weapon('bow', 10, 200, 3);
const sword = new Weapon('sword', 25, 500, 1);
const knife = new Weapon('knife', 5, 300, 1);
const staff = new Weapon('staff', 8, 300, 2);

// upgraded

const longBow = new Weapon('Long bow', 15, 200, 4);
const axe = new Weapon('axe', 27, 800, 1);
const staffStorm = new Weapon('Staff of the Storm', 10, 300, 3);

// ======= task 2 =========
class Bow extends Weapon {
  constructor() {
    super('Лук', 10, 200, 3);
  }
}


class Arm extends Weapon {
  constructor() {
    super('Рука', 1, Infinity, 1);
  }

}

class Sword extends Weapon {
  constructor() {
    super('Меч', 25, 500, 1);
  }
}

class Knife extends Weapon {
  constructor() {
    super('Нож', 5, 300, 1);
  }

}

class Staff extends Weapon {
  constructor() {
    super('Посох', 8, 300, 2);
  }
}

class Axe extends Weapon {
  constructor() {
    super('Секира', 27, 800, 1);
  }
}

class StaffStorm extends Weapon {
  constructor() {
    super('Посох бури', 10, 300, 3);
  }
}

class LongBow extends Weapon {
  constructor() {
    super('Длинный лук', 15, 200, 4);
  }
}

console.log(new Bow());
console.log(new Bow().takeDamage(20));
console.log(new Bow().getDamage());

console.log(new Sword());
console.log(new Arm());
console.log(new Knife());
console.log(new Staff());

console.log(new LongBow());
console.log(new Axe());
console.log(new StaffStorm());

// ============= task 3 ============
class StudentLog {
  constructor(name) {
    this.name = name;

    this.subjects = [];
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {

    if (this[subject] === undefined) {
      this[subject] = [];
    }

    const parsedGrade = parseInt(grade);
    if ((!parsedGrade) || parsedGrade > 5 || parsedGrade < 1) {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
    }  else  {
      this[subject].push(parsedGrade);

      if (!this.subjects.find(item => item === subject)) {
        this.subjects.push(subject);
      }
    }

    return this[subject].length;
  }

  getAverageBySubject(subject) {
    if ( this[subject] == undefined || (!this[subject].length) ) {
      return 0;
    }

    const sum = this[subject].reduce((acc, elem)=>acc + elem, 0);
    return sum / this[subject].length;
  }

  getTotalAverage() {
    let sum = 0;
    let totalLength = 0;

    this.subjects.forEach((subject, i) => {
      sum += this[subject].reduce((acc, item)=> acc + item, 0);

      totalLength += this[subject].length;
    });

    if (!totalLength) {
      return 0 ;
    }

    return sum/totalLength;
  }
}

const olegLog = new StudentLog('Олег Никифоров');
console.log(olegLog);

console.log(olegLog.getName());


console.log(olegLog.addGrade(6, 'math'));
console.log(olegLog.addGrade('0', 'algebra'));
console.log(olegLog.addGrade('abc', 'algebra'));

console.log(`getTotalAverage 1 ${olegLog.getTotalAverage()}`);

console.log(olegLog.addGrade(3, 'algebra'));
console.log(olegLog.addGrade(4, 'algebra'));
console.log(olegLog.addGrade(5, 'algebra'));

console.log(olegLog.addGrade(3, 'geometry'));
console.log(olegLog.addGrade(5, 'geometry'));

console.log(`geometry ${olegLog.getAverageBySubject('geometry')}`);
console.log(`algebra ${olegLog.getAverageBySubject('algebra')}`);
console.log(`math ${olegLog.getAverageBySubject('math')}`);
console.log(`math ${olegLog.getAverageBySubject('russian')}`);

console.log(`getTotalAverage 2 ${olegLog.getTotalAverage()}`);
