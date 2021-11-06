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

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({
  name:'Pikachu',
  height:1.1,
  type: ['electric']
});

let text = (' ')
let space = ('<br>')

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
  document.write(pokemon.name + text + 'height:' + pokemon.height + text + 'type:' + pokemon.type + space);
});
