class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.id = '';
  }

  addClock(time, callback, id) {
    if (!id) {
      console.error("not filled in: 'id'");
      return;
    }

    const search = this.alarmCollection.find(item=>item.id === id);
    if (search) {
      console.error(`duplicate alarm (id ${id}; time ${time})`);
      return;
    }


    this.alarmCollection.push({id: id, callback: callback, time: time});
  }

  removeClock(id) {
    const duplicate = this.alarmCollection.filter(item => item.id != id);
    const success = (duplicate.length != this.alarmCollection.length);

    if (success) {
      this.alarmCollection = Array.from(duplicate);
    }
    return success;
  }

  static formattedDate(date) {
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  static getCurrentFormattedTime() {
    const d = new Date;
    return AlarmClock.formattedDate(d);
  }

  start() {
    const checkClock = (alarm) => {
      if (alarm.time === AlarmClock.getCurrentFormattedTime()) {
        alarm.callback(alarm);
      }
    }

    const checkAllAlarms = () => {
      this.alarmCollection.forEach((alarm, i) => {
        checkClock(alarm);
      });
    }

    this.id = setInterval(checkAllAlarms, 1000);
  }

  stop() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  printAlarms() {
    console.log("alarms",...this.alarmCollection);
  }

  clearAlarms() {
    this.stop();

    this.alarmCollection = [];
  }

  ring(alarm) {
    console.log(`Alarm is ringing! id: ${alarm.id} time: ${alarm.time}`);
  }
}

let myAlarm = new AlarmClock();
myAlarm.addClock(AlarmClock.formattedDate(new Date(Date.now() + 1000*60)), myAlarm.ring, 1);
myAlarm.addClock(AlarmClock.formattedDate(new Date(Date.now() + 2000*60)), () => {console.log('Time to sleep #2'); myAlarm.removeClock(2)}, 2);
myAlarm.addClock(AlarmClock.formattedDate(new Date(Date.now() + 2000*60)), () => {console.log('Go wash #?')} );
myAlarm.addClock(AlarmClock.formattedDate(new Date(Date.now() + 3000*60)), () => {console.log('Time to sleep #2'); myAlarm.removeClock(2)}, 2);
myAlarm.addClock(AlarmClock.formattedDate(new Date(Date.now() + 5000*60)), () => {console.log('ring ring #3'); myAlarm.clearAlarms(); myAlarm.printAlarms()}, 3);
myAlarm.start();

myAlarm.printAlarms();
