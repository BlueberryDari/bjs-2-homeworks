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
		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		  //если уже есть с таким временем, выведи предупреждение
		  }


		this.alarmCollection.push({ //добавляем в массив звонков объект
			time: time,
			callback: callback,
			canCall: true
		});

	}

	removeClock(time) { 

		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	// таким образом filter создаём новый массив alarmCollection вместо старого только с отфильтр эл-ми
	}

	getCurrentFormattedTime() {
		let currentDate = new Date();
		//создали объект даты со своими методами, в том числе toLocaleTimeString
		return currentDate.toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
		
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
				  alarm.canCall = false;
				  alarm.callback();
				}
			  });
		}, 1000);
	}

			/*this.alarmCollection.forEach(function(alarm) { //не возвращает новый массив, не редактирует исходный
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		), 1000);
	} */


	stop() {
		if (this.intervalId !== null) {
          clearInterval(this.intervalId);
		  this.intervalId = null;
		}
	}


	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}