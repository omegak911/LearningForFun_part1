import Vue from 'vue';
import Vuex from 'vuex';

import images from '../config.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
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
})