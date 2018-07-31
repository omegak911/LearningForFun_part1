<template>
  <div>
    <img :src="img" alt="pokemonImage" />
    <p>ID: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <p>Type: {{ type }}</p>
  </div>
</template>


<script>
  export default {
    data() {
      return {

      }
    },
    props: ["img", "id", "name", "type"],
  }

</script>

