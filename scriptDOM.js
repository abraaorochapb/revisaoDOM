// insertBefore = adiciona um elemento antes de outro elemento

const p = document.createElement('p')

p.innerText = 'Paragrafo DOM'

const title = document.querySelector('#title')

const header = title.parentElement

header.insertBefore(p, title)

// appendChild = adiciona um elemento dentro de outro 

const navMenu = document.querySelector('nav ul')

const li = document.createElement('li')

li.innerHTML = '<a href="#">Eu fui adicionado por DOM</a>'

navMenu.appendChild(li)

// replaceChild = substitui um elemento por outro

const h2 = document.createElement('h2')

h2.innerText = 'Eu fui substituido por DOM'

header.replaceChild(h2, title)

// getAttribute e setAttribute

const firstLink = navMenu.querySelector('a')

console.log(firstLink)

firstLink.setAttribute('href', 'https://github.com/abraaorochapb')
firstLink.setAttribute('target', '__blank')

// offsetWidth e offsetHeight = considera o border com clientWidth e clientHeight = desconsidera o border

const footer = document.querySelector('#footer')

footer.style.height = '50px'
footer.style.width = '800px'
footer.style.margin = 'auto'

console.log(footer.offsetWidth)
console.log(footer.clientWidth)

// alterando estilos de varios elementos

for (const li of navMenu.children) {
  li.style.backgroundColor = 'lightBlue'
  li.style.fontSize = '20px'
  li.style.fontWeight = 'bold'
}





