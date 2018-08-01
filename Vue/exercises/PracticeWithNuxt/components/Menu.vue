<template>
  <div id="navigation">
    <nuxt-link class="link" exact to="/">
      {{ home }}
    </nuxt-link>
    <nuxt-link class="link" exact to="/wild">
      {{ wild }}
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
        home: "Home",
        wild: "Wild",
      }
    }
  }
</script>

<style scoped>

#navigation {
  background-color: green;
  display: flex;
  width: 100%;
}

.link {
  border: 1px solid white;
  color: white;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 2px 2px 5px black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
  height: 95%;
  width: 8%;
}

</style>