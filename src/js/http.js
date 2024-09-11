// import "../css/common.css";
// import Handlebars from 'handlebars';
// import pokemonCardTpl from "../templates/pokemon-card.hbs";
// console.log(typeof pokemonCardTpl); 
// const refs = {
//     cardContainer: document.querySelector('.js-card-container'),
//     searchForm: document.querySelector('.js-search-form'),
// };

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const searchQuqry = form.elements.query.value;

//     fetchPokemon(searchQuqry).then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => {
//         form.reset();
//     });
//     }

// function fetchPokemon(pokemonId) {
//     return  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//     .then(response => response.json()); 
      
// }

// // console.log(fetchPokemon());


// function renderPokemonCard(pokemon) {
//     const template = Handlebars.compile(pokemonCardTpl);
//     const markup = template(pokemon);  
//     refs.cardContainer.innerHTML = markup;
// }
// // console.log(renderPokemonCard());


// function onFetchError(error) {
//     alert('щось пішло не так');
// }


// ---------------news api


// apiKey = 77df2968d50e46afbd7adb3509959374

const url = 'https://newsapi.org/v2/everything?q=cars';
const options =  {
    headers: {
        'X-Api-Key': '77df2968d50e46afbd7adb3509959374',
    }
};

fetch(url, options).then(r => r.json()).then(console.log);