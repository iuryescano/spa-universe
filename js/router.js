export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event // Obtém o evento ou o evento da janela se não estiver disponível
    event.preventDefault() // Impede a ação padrão do evento (navegação para uma nova página)
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }
  
  handle() {
    const { pathname } = window.location // Extrai o pathname do objeto window.location
    const route = this.routes[pathname] || this.routes[404]// Obtém a rota correspondente do objeto routes, ou a rota 404 se a rota não existir  
    fetch(route)// Faz uma requisição fetch à rota obtida
    .then(data => data.text()) // Converte a resposta para texto
    .then(html => {
        document.querySelector('#app').innerHTML = html // Insere o HTML obtido na div com id 'app'
    }) 
  }
}