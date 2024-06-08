import { Router } from "./router.js"


const router = new Router()

router.add('/', "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


/* const fundo = document.getElementById('#fundo')
const fundo2 = document.getElementById('#fundo2')
const botao = document.getElementById('#botao')

  botao.addEventListener('click', (event ) => {
  fundo.classList.add('hide') 
  fundo2.classList.remove('hide')
}) */

const background = document.getElementById('fundo')


function trocarImagem(novoSrc) {
  background.src = novoSrc;
}

document.getElementById('universe').addEventListener('click', () => {
  trocarImagem('../assets/mountains-universe02.png'); 
});

document.getElementById('home').addEventListener('click', () => {
  trocarImagem('../assets/mountains-universe-1.png'); 
});

document.getElementById('exploraction').addEventListener('click', () => {
  trocarImagem('../assets/mountains-universe-3.png'); 
});


/* document.getElementById('botao').addEventListener('click', event => {
  const route = event.target.getAttribute('data-route');
  window.history.pushState({}, '', route);
  router.handle();
});

document.querySelectorAll('botao[data-route]').forEach(botao => {
  botao.addEventListener('click', event => {
      const route = event.target.getAttribute('data-route');
      window.history.pushState({}, '', route);
      router.handle();
    })}) */