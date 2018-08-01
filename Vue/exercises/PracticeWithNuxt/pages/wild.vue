<template>
  <div id="wild">
    <button @click="show = !show">CLICK ME</button>
    <transition name="fade">
      <div class="pokemonListItem" v-if="show" @click="catchPokemon">
        <pokemon-list-item 
          :id="tempPokemon.id" 
          :name="tempPokemon.name" 
          :type="tempPokemon.type"
          :img="tempPokemon.img">
        </pokemon-list-item>
      </div>
    </transition>
    <transition name="ballmove"
      enter-active-class="bouncein"
      leave-active-class="rollout"
      >
      <div v-if="attemptCapture">
        <div class="ball">
          <div class="innerBall">
            <div class="ballLine">
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import images from '../config.js';
import PokemonListItem from '../components/PokemonListItem'
export default {
  name: 'wild',
  components: {
    PokemonListItem,
  },
  data () {
    return {
      text: "Hello from Wild",
      show: false,
      attemptCapture: false,
      tempPokemon: {
        id: 1,
        name: "Bulbasaur",
        type: "Grass/Poison",
        img: images.bulbasaur,
      },  

    }
  },
  methods: {
    catchPokemon() {
      this.show = false;
      setTimeout(() => this.attemptCapture = true, 1000);
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  #wild {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    flex-direction: column;
  }

  .ball {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 100%;
    animation: bouncein 0.4s cubic-bezier(.5,0.05,1,.5);
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  .innerBall {
    background-color: white;
    border-radius: 100%;
    width: 95%;
    height: 95%;
    animation: spin 1s linear infinite;
  }

  .ball,
  .innerBall {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ballLine {
    background-color: black;
    height: 1px;
    transform:rotate(-10deg); 
    width: 100%;
  }

  @keyframes bouncein {
    from { transform: translate3d(2%, 8%, 10px);     }
    to   { transform: translate3d(6%, 4%, 15px); }
  }

  @keyframes spin { 
    100% { 
      -webkit-transform: rotate(360deg); 
      transform:rotate(20deg); 
    } 
  }

</style>