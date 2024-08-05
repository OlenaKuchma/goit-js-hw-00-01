import css from '../css/common.css';
import css2 from '../css/feedback-form.css';

// const logMessage = () => {
//   console.log('Лог при виклику колл-бек функції через 3 секунди');
// };

// console.log('До виклику setTimeOut');

// setTimeout(() => {
//   console.log('В середині виклику колл-бек функції для setTimeOut');
// }, 2000);

// console.log('Після виклику setTimeOut');

// for (let index = 0; index < 1000; index++) {
//   console.log(index);
// }

//----------------------------setTimeout  clearTimeout
// const logger = time => {
//   console.log(`Лог через ${time} тому, що не відмінили таймаут`);
// };

// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);

// const shouldCanceltimer = Math.random() > 0.3;

// console.log(shouldCanceltimer);

// if (shouldCanceltimer) {
//   clearTimeout(timerId);
// }

// ------------------- setInterval clearInterval

// const logger = time => {
//   console.log(
//     `Лог кожні ${time}с - ${Date.now()} тому, що не відмінили таймаут`
//   );
// };

// console.log('До виклику setInterval');
// const timerId = setInterval(logger, 2000, 2000);

// console.log('Після виклику setInterval');

// console.log(timerId);

// const shouldCanceltimer = Math.random() > 0.3;

// console.log(shouldCanceltimer);

// if (shouldCanceltimer) {
//   clearInterval(timerId);
// }

// ---------------------INTERVAL

// const NOTIFICATION_DELAY = 3000;

// let timeoutId;

// const refs = {
//   notification: document.querySelector('.js-alert'),
// };
// refs.notification.addEventListener('click', onNotificationClick);

// showNotification();

// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timeoutId);
// }

// function showNotification() {
//   refs.notification.classList.add('js-visible');

//   timeoutId = setTimeout(() => {
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   refs.notification.classList.remove('js-visible');
// }

// -------------------TIMEOUT

// const PROMPT_DELAY = 1000;
// const MAX_PROPT_ATTEMPTS = 3;
// let promptCounter = 0;
// // let hasSubscribed = false;

// const refs = {
//   notification: document.querySelector('.js-alert'),
// };

// refs.notification.addEventListener('click', hideNotification);

// Bootstrap...

// showNotification();
// ЦЕ НЕ ПРАЦЮЄ - ТРЕБА ДИВИТИСЬ ЯК НА ВІДЕО

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROPT_ATTEMPTS) {
//     console.log('Зупиняємо інтервал');

//     clearInterval(intervalId);

//     return;
//   }

//   console.log('Підпишись на розсилку');
//   promptCounter += 1;
// }, PROMPT_DELAY);

// function showNotification() {
//   refs.notification.classList.add('js-visible');
// }

// function hideNotification() {
//   refs.notification.classList.remove('js-visible');
// }


// -------------- Data now

// const date1 = new Date();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date();
//   console.log('date2', date2);
// }, 3000);

// // краще ->

// const date3 = Date.now();
// console.log('date3', date3);

// setTimeout(() => {
//   const date4 = Date.now();
//   console.log('date4', date4);
// }, 3000);

// ----------timer

const refs = {
  clockface: document.querySelector('.js-clockface'),
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
}




// refs.clockface.addEventListener('')

class Timer {
 constructor({onTick}){
  this.intervalId = null;
  this.isActive = false;
  this.onTick = onTick;
  this.init();


 }

 init() {
  
  
 }

 start() {
  if (this.isActive) {
    return;
  }
  const startTime = Date.now();
  this.isActive=true;

  this.intervalId = setInterval(() => {
    
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime;
    const time = this.getTimeComponents(deltaTime);
  this.onTick(time);
    
    }, 1000);
    
}

stop() {
  clearInterval(this.intervalId);
  this.isActive = false;
  const time = this.getTimeComponents(0);
  this.onTick(time);
  
}

pad(value) { 
    return String(value).padStart(2, '0');
    
  }
  
   getTimeComponents(time) {
    const hours = this.pad(Math.floor((time % (1000*60*60*24))/(1000*60*60)));
    const mins = this.pad(Math.floor((time % (1000*60*60))/(1000*60)));
    const secs = this.pad(Math.floor((time % (1000*60))/1000));
  
    return {hours, mins, secs};
    
  }

}

const timer = new Timer({
  onTick: updateClockFace,
}); 


// const timer = {
//   intervalId: null,
//   isActive: false,

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive=true;

//     this.intervalId = setInterval(() => {
      
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = getTimeComponents(deltaTime);
      
//       updateClockFace(time);
//       // console.log(`${hours}:${mins}:${secs}`);
//       // console.log(currentTime - startTime);
      
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   }
// };



function updateClockFace({hours, mins, secs}) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
  
}

refs.startBtn.addEventListener('click', () => {
  timer.start();

});
refs.stopBtn.addEventListener('click', () => {
  timer.stop();

})

// function pad(value) { 
//   return String(value).padStart(2, '0');
  
// }

// function getTimeComponents(time) {
//   const hours = pad(Math.floor((time % (1000*60*60*24))/(1000*60*60)));
//   const mins = pad(Math.floor((time % (1000*60*60))/(1000*60)));
//   const secs = pad(Math.floor((time % (1000*60))/1000));

//   return {hours, mins, secs};
  
// }