let pokemonList = [
  {
    name:'Eevee',
    height:1.5,
    type: ['Normal']
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
let text = " ";
let space = "<br>";


for (let i=0; i < pokemonList.length; i++)
//lists Pokemon name and their height
    if (pokemonList) {
      document.write(pokemonList[i].name + text + "height:" + pokemonList[i].height + space)
    }

for (let i=0; i < pokemonList.length; i++)
// lists Pokemon name and their sizes relative to their height
    if (pokemonList[i].height <2.0 && pokemonList[i].height >1.0){
      document.write(pokemonList[i].name + " is a medium Pokemon!" + space)
    }else if (pokemonList[i].height <1.0){
      document.write(pokemonList[i].name + " is a small Pokemon!" + space)
    }else {
      document.write(pokemonList[i].name + " ...Wow! A very large Pokemon!" + space)
    }
