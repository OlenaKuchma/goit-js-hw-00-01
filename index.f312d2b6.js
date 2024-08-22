const o=o=>fetch(`https://pokeapi.co/api/v2/pokemon/${o}`).then((o=>o.json()));function c(o){console.log("onFetchSuccess -> onFetchSuccess"),console.log(o)}function n(o){console.log("onFetchError -> onFetchError"),console.log(o)}o(1).then(c).catch(n),o(2).then(c).catch(n),o(3).then(c).catch(n),o(390055).then(c).catch(n);
//# sourceMappingURL=index.f312d2b6.js.map
