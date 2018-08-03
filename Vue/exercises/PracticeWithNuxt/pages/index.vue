<template>
  <div id="app">
    <div id="pokemonList">
      <div class="pokemonListItem" v-for="poke in pokemon" :key="poke.id">
        <pokemon-list-item  :img="poke.img" :name="poke.name" :type="poke.type" :id="poke.id"></pokemon-list-item>
      </div>
    </div>
  </div>
</template>

<script>
import images from '../config.js';
import PokemonListItem from '../components/PokemonListItem.vue';
import { store } from '../store/store.js';

export default {
  components: {
    PokemonListItem
  },
  name: 'app',
  store,
  computed: {
    pokemon() {
      return this.$store.state.pokemon
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

.page-enter-active, .page-leave-active {
  transition: opacity 1s;
}

.page-enter, .page-leave-to {
  opacity: 0;
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
  border: 3px solid black;
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