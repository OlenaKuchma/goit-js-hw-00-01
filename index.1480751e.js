const e=["Secretariat","Eclipse","West Australian","Flying Fox","Seabiscult"],t={startBtn:document.querySelector(".js-start-race"),winnerField:document.querySelector(".js-winner"),progressField:document.querySelector(".js-progress"),tableBody:document.querySelector(".js-results-table > tbody")};function r(e){return new Promise(((t,r)=>{const o=(s=2e3,n=35e3,Math.floor(Math.random()*(n-s+1)+s));var s,n;setTimeout((()=>{t({horse:e,time:o})}),o)}))}t.startBtn.querySelector("click",(()=>{e.map(r);t.progressField.textContent="Заїзд почався, ставки не приймаються"}));
//# sourceMappingURL=index.1480751e.js.map
