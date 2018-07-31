<template>
  <div id="app">
    <div id="pokemonList">
      <div class="pokemonListItem" v-for="poke in pokemon">
        <img :src="poke.img" alt="pokemonImage" />
        <p>ID: {{ poke.id }}</p>
        <p>Name: {{ poke.name }}</p>
        <p>Type: {{ poke.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import images from '../config.js';

export default {
  name: 'app',
  data () {
    return {
      pokemon: [
        {
          id: 1,
          name: "Bulbasaur",
          type: "Grass/Poison",
          img: images.bulbasaur,
        },    
        {
          id: 2,
          name: "Ivysaur",
          type: "Grass/Poison",
          img: images.ivysaur,
        },  
        {
          id: 3,
          name: "Venusaur",
          type: "Grass/Poison",
          img: images.venusaur,
        }, 
        {
          id: 4,
          name: "Charmander",
          type: "Fire",
          img: images.charmander
        },
        {
          id: 5,
          name: "Charmeleon",
          type: "Fire",
          img: images.charmeleon,
        },
        {
          id: 6,
          name: "Charizard",
          type: "Fire",
          img: images.charizard,
        },
        {
          id: 7,
          name: "Squirtle",
          type: "Water",
          img: images.squirtle,
        }, 
        {
          id: 8,
          name: "Wartortle",
          type: "Water",
          img: images.wartortle,
        }, 
        {
          id: 9,
          name: "Blastoise",
          type: "Water",
          img: images.blastoise,
        }, 
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

#app,
#pokemonList,
.pokemonListItem {
  display: flex;
  justify-content: center;
  align-items: center;
}

#pokemonList {
  background-color: lightblue;
  height: 90vh;
  width: 90%;
  flex-wrap: wrap;
  overflow: scroll;
}

.pokemonListItem {
  border: 1px solid black;
  background-color: white;
  flex-direction: column;
  margin: 5px;
}

.pokemonListItem p {
  margin: 0;
}

.pokemonListItem img {
  width: 80%;
}



</style>
