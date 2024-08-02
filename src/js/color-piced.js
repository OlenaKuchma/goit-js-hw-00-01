import coloCardTemlates from '../templates/colorcard.hbs';
import '../css/common.css';
import '../css/colorpicer.css';
import colors from './colors.js';
console.log(coloCardTemlates);

const paletteCards = document.querySelector('.js-palette');

console.log(createColorCardsMarkup(colors));

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
        // return `<div class="color-card">
        //   <div
        //     class="color-swatch"
        //     data-hex="${hex}"
        //     data-rgb="${rgb}"
        //     style="background-color:${hex}"
        //   ></div>
        //   <div class="color-meta">
        //     <p>HEX: ${hex}</p>
        //     <p>RGB: ${rgb}</p>
        //   </div>
        // </div>`;
    })
    .join('');
}

const marckup = createColorCardsMarkup(colors);

paletteCards.insertAdjacentHTML('beforeend', marckup);

paletteCards.addEventListener('click', onContainerClik);

function onContainerClik(e) {
  console.log(e.target);
  const isColorSwatchEl = e.target.classList.contains('color-swatch');
  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = e.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addClassColorCard(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const curretnActiveCard = document.querySelector('.color-card.is-active');
  if (curretnActiveCard) {
    curretnActiveCard.classList.remove('is-active');
  }
}

function addClassColorCard(card) {
  card.classList.add('is-active');
}
