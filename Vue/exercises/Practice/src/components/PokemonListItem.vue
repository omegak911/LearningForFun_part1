<template>
  <div>
    <img :src="img" alt="pokemonImage" />
    <p>ID: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <p>Type: {{ type }}</p>
    <div class="caughtButtons">
      <button @click="caught === 0 ? 0 : caught -= 1">-</button>
      <p>Caught: {{ caught }}</p>
      <button @click="caught += 1">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        caught: 0
      }
    },
    props: ["img", "id", "name", "type"],
  }
</script>

<style scoped>
  .caughtButtons {
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 1%;
  }
</style>