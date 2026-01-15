class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null; //id таймера без начального значения

	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		/*setTimeout(func, time) {

		}*/
		if (this.alarmCollection.length !== 0) {
			for (let i of this.alarmCollection) { // есть ли звонок с таким же временем
				if (this.alarmCollection[i - 1].time === time) {
					console.warn('Уже присутствует звонок на это же время');
					//если уже есть с таким временем, выведи предупреждение
				}
			}
		}


		this.alarmCollection.push({ //добавляем в массив звонков объект
			time: time,
			callback: callback,
			canCall: true
		});

	}

	removeClock(time) { //?

		this.alarmCollection = this.alarmCollection.filter(function(alarm) { //создаёт новый массив только с отфильтрованными эл-ми
			time !== alarm.time;
		});
		/*for (let i of this.alarmCollection){
        if (this.alarmCollection[i] === time) {
          delete this.alarmCollection[i];
        }
    }*/
	}

	getCurrentFormattedTime() {
		let currentDate = new Date;
		let hour = currentDate.getHours();
		if (hour < 0) {
			hour = "0" + hour;
		}
		let minute = currentDate.getMinutes();
		if (minute < 0) {
			minute = "0" + minute;
		}
		return (hour + ":" + minute);
	}

	start() {
		if (intervalId !== null) {
			return this.intervalId;
		}

		this.intervalId = setInterval((
			this.alarmCollection.forEach(function(alarm) { //не возвращает новый массив, не редактирует исходный
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		), 1000);
	}


	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}


	resetAllCalls() {
		this.alarmCollection.forEach(function(alarm) {
			alarm.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}