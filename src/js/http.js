import "../css/common.css";
import Handlebars from 'handlebars';
import pokemonCardTpl from "../templates/pokemon-card.hbs";

// Компіліруємо шаблон Handlebars
const template = Handlebars.compile(pokemonCardTpl);

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
};

fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then(response => response.json()) // Перетворюємо відповідь в JSON
    .then(pokemon => {
        console.log(pokemon); // Перевірте дані з API

        // Генеруємо HTML з шаблону
        const markup = template(pokemon);
        console.log(markup); // Перевірте згенерований HTML

        // Вставляємо HTML у контейнер
        refs.cardContainer.innerHTML = markup;
    })
    .catch(error => {
        console.log(error); // Перевірте помилки
    });
