/*
Milestone 1:
- Definire un array di oggetti; ogni oggetto rappresenta un'icona,
che è caratterizzata da: nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal,
visualizzare in pagina tutte le icone con il proprio nome.
*/

const iconsContainer = document.getElementById('icons-container');
const myIcons = [
  {
    nome: 'cat',
    prefisso:'fa-',
    tipo:'animal',
    famiglia:'fas',
  },
  {
    nome: 'crow',
    prefisso:'fa-',
    tipo:'animal',
    famiglia:'fas',
  },
  {
    nome: 'dog',
    prefisso:'fa-',
    tipo:'animal',
    famiglia:'fas',
  },
  {
    nome: 'dove',
    prefisso:'fa-',
    tipo:'animal',
    famiglia:'fas',
  },
  {
    nome: 'dragon',
    prefisso:'fa-',
    tipo:'animal',
    famiglia:'fas',
  },
  {
    nome: 'horse',
    prefisso:'fa-',
    tipo:'animal',
    famiglia:'fas',
  },
  {
    nome: 'hippo',
    prefisso:'fa-',
    tipo:'animal',
    famiglia:'fas',
  },
  {
    nome: 'fish',
    prefisso:'fa-',
    tipo:'animal',
    famiglia:'fas',
  },
  {
    nome: 'carrot',
    prefisso:'fa-',
    tipo:'fruit',
    famiglia:'fas',
  },
  {
    nome: 'apple-alt',
    prefisso:'fa-',
    tipo:'fruit',
    famiglia:'fas',
  },
  {
    nome: 'lemon',
    prefisso:'fa-',
    tipo:'animal',
    famiglia:'fas',
  },
  {
    nome: 'pepper-hot',
    prefisso:'fa-',
    tipo:'fruit',
    famiglia:'fas',
  },
  {
    nome: 'user-astronaut',
    prefisso:'fa-',
    tipo:'user',
    famiglia:'fas',
  },
  {
    nome: 'user-graduate',
    prefisso:'fa-',
    tipo:'user',
    famiglia:'fas',
  },
  {
    nome: 'user-ninja',
    prefisso:'fa-',
    tipo:'user',
    famiglia:'fas',
  },
  {
    nome: 'user-secret',
    prefisso:'fa-',
    tipo:'user',
    famiglia:'fas',
  },

];

const iconsColor = ['blue', 'orange', 'purple'];

myIcons.forEach((item) => {
  const {nome, prefisso, famiglia} = item;

  iconsContainer.innerHTML += `
  <div class="icon-wrapper">
    <i class="${famiglia} ${prefisso}${nome} icone" style=""></i>
    <div>${nome.toUpperCase()}</div>
  </div>
  `
});


/*
Milestone 2:
- Definire un array di colori e associare ad ogni tipo di icona un colore.
- Visualizzare le icone di colore diverso in base al tipo.

*/
const type =[];

myIcons.forEach((item) => {
  if (!type.includes(item.tipo)) {
    type.push(item.tipo);
  }
});

myIcons.forEach((item) => {
  const indexOfType = type.indexOf(item.tipo)

  if (indexOfType != -1) {
    item.color = iconsColor[indexOfType];
  }
});

/*
Milestone 3:
- Aggiungere una select per filtrare le icone in base al tipo.
- Popolare le options della select dinamicamente e,
ogni volta che cambia il valore selezionato,
visualizzare le icone corrispondenti.
*/
