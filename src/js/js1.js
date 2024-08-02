// import css from '../css/common.css';
import css from '../css/feedback-form.css';

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

const PROMPT_DELAY = 1000;
const MAX_PROPT_ATTEMPTS = 3;
let promptCounter = 0;
// let hasSubscribed = false;

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', hideNotification);

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
