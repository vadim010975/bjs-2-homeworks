const isTimeFormat = (arg) => {
  return (/([01]\d|2[0-3]):[0-5]\d/).test(arg);
}

class AlarmClock {

  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!isTimeFormat(time) || typeof (callback) !== 'function') {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    });
  }

  removeClock(time) {
    if (!isTimeFormat(time)) {
      throw new Error('Формат аргумента не соответствует дате');
      return;
    }
    const newArr = this.alarmCollection.filter(alarm => alarm.time !== time);
    this.alarmCollection = newArr;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    });
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => { alarm.canCall = true; });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}


