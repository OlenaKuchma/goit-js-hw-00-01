
// let data = 'тут ще нічого нема';

// const promise = new Promise((resolve, reject) => {
//     // resole(5);
    
//     const canFullfile = Math.random() > 0.5;

//     setTimeout(() => {if(canFullfile) {
//         resolve('Проміс виконався успішно - виконаний - fullfiled');
//     }
//     reject('Проміс виконався не успішно - відхилений - rejected');}, 2000);
// });
// console.log(promise);

// promise.then(result => {console.log(result);
// }, error => {console.log(error);
// }
// )


// then(onSuccesss, onError)
// console.log(data);

// promise.then(onFullfiled, onRejected);

// // console.log(data);

// function onFullfiled(result) {
//     console.log(result);    
// };

// function onRejected(error) {
//     console.log(error);    
// };


// promise.then(result => {
//     console.log(result);

//     return 5;
    
// }).then(x => {console.log(x);
//     return 10;
// }).then(y => {console.log(y);
// });
// ------------------------------
// promise
// .then(onFullfiled, onRejected)
// .then(
//     x => {console.log(x);

//         throw new Error ('помилка в другому then');

//      return 10;}, 

//      error => console.log(error),
//     )
// .then(
//     y => console.log(y), 

//     error => console.log(error),
//        );
// ----------------------
// promise
// .then(onFullfiled)
// .then(
//     x => {console.log(x);

//         // throw new Error ('помилка в другому then');
//            return 10;}
//     )
// .then(
//     y => {console.log(y)}
//        )
// .catch(error => {console.log(error);
//        }).finally(() => console.log('Я буду виконаний в любому випадку'),);

// ---------------------------------------

// const makeOrder = dish => {
// const DELAY = 1000;

// const promise = new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => 
//         {
//             if (passed) {
//                 resolve('ось Ваша страва');
//             } 
//                 reject('вибачте продукти скінчилися');
//     }, DELAY);

// });
// return promise;


// };

// const makeOrder = dish => {

// return Promise.resolve(`ось Ваша страва ${dish}`);    
    
// // const promise = new Promise((resolve, reject) => {
// //     const passed = Math.random() > 0.5;
        
// //     if (passed) {
// //         onSuccess(`ось Ваша страва ${dish}`);
// //     }  
 
// // });    
//     };
    

// makeOrder('булочка').then(onMakeOrderSuccess).catch(onMakeOrderError);



// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
    
    
// }

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
    
    
// }


// -----------pocemon


// function fetch(url) {
//     return new Promise(...)
// }

// const fetchPokemonId = id => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())};

// fetchPokemonId(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonId(2).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonId(3).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonId(390055).then(onFetchSuccess).catch(onFetchError);


// function onFetchSuccess(pokemon) {
//     console.log('onFetchSuccess -> onFetchSuccess');
//     console.log(pokemon);
  
// } 

// function onFetchError(error) {
//     console.log('onFetchError -> onFetchError');
//     console.log(error);
// }

// ----------------------

// const makePromise = () => {
//     return new Promise((resolve, reject) => {

//         const passed = Math.random() > 0.5;
//         if (passed) {
//             resolve('привіт це resolve');
//         }
//          reject('привіт це reject');
        
                
//     })
// }

// makePromise().then(result => console.log(result)).catch(error => console.log(error));


// ------------------------іподром
import '../css/common.css';

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscult',
];

const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.querySelector('click', () => {
    
    const promises = horses.map(run);

    refs.progressField.textContent = 'Заїзд почався, ставки не приймаються';

});


// refs.winnerField.querySelector()
// refs.progressField.querySelector()
// refs.tableBody.querySelector()






// Promise.race(promises).then(({horse, time}) => {
//     console.log(
//     `%c Переміг ${horse}, фінішував за ${time} часу`,
//     'color: green; font-size: 14px;',

// );
// });


// Promise.all(promises).then(() => {

//     console.log(

//         '%c Заїзд закінчився, ставки приймаються',
//         'color: blue; font-size: 14px;',
    
//     );
// });


function run(horse) {
    return new Promise (
        (resolve, reject) =>
        {           
             const time = getRandomTime(2000, 35000);

            setTimeout(() => {
                resolve({horse, time});
                }, time);


        }
    )
    
}



// run('horse').then(x => console.log(x));


function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
};