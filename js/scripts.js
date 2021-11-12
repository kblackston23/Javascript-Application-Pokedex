let pokemonRepository = (function () {
  let pokemonList = [
    {
      name:'Eevee',
      height:1.5,
      type: ['normal']
    },
    {
      name:'Meganium',
      height:4.5,
      type: ['grass','poison']
    },
    {
      name:'Haunter',
      height:1.2,
      type: ['ghost','poison']
    },
    {
      name:'Geodude',
      height:0.7,
      type: ['ground']
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon){
    console.log(pokemon.name);
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function() {
      showDetails(pokemon)
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({
  name:'Pikachu',
  height:1.1,
  type: ['electric']
});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
