const app = new Vue({
  el: '#root',
  data() {
    return {
      text: "Hello from App",
      listItems: [
        { name: 'Bulbasaur', caught: 0 },
        { name: 'Ivysaur', caught: 0 },
        { name: 'Venusaur', caught: 0 },
        { name: 'Charmander', caught: 0 },
        { name: 'Charmeleon', caught: 0 },
        { name: 'Charizard', caught: 0 },
        { name: 'Squirtle', caught: 0 },
        { name: 'Wartortle', caught: 0 },
        { name: 'Blastoise', caught: 0 },
      ],
      message: 'This is what you would normally see',
      checked: []
    }
  }
});

