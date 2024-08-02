// // const user = {
// //   name: 'mango',
// //   old: 54,
// // };

// // console.log(JSON.stringify(user));

// // const savedUserData = '{ "name": "mango", "old": 54 }';

// // console.log(JSON.parse(savedUserData));

// // // --------------------------

// // console.log(localStorage);

// // localStorage.setItem('my-file', JSON.stringify({ name: 'mango', old: 54 }));

// // localStorage.getItem('my-file');
// // console.log(localStorage.getItem('my-file'));

// // const saveData = localStorage.getItem('my-file');
// // const parseData = JSON.parse(saveData);

// // console.log('saveData', saveData);
// // console.log('parseData', parseData);

// // --------------------- input
// import throttle from 'lodash.throttle';
// import '../css/common.css';
// import '../css/feedback-form.css';

// const STORAGE_KEY = 'feedback - msg';

// const formData = {};

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 100));

// refs.form.addEventListener('input', e => {
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);
//   formData[e.target.name] = e.target.value;

// //   localStorage.setItem(
// //     STORAGE_KEY,
// //     JSON.stringify((formData[e.target.name] = e.target.value))
// //   );
// //   console.log(localStorage);
// //   const seveDataForm = localStorage.getItem(STORAGE_KEY);

// //   const parseDataForm = JSON.parse(seveDataForm);
// //   console.log(parseDataForm);
// });

// populateTextarea();

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   //   console.log(message);

//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }


// // ------------------------
