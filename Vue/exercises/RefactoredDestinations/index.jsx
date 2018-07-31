Vue.component("place", {
  props: ['img', 'desc'],
  template: "#place"
})

new Vue({
  el: '#app',
  data() {
    return {
      locations: [
        {
          name: 'Moscow',
          img: "https://upload.wikimedia.org/wikipedia/commons/2/24/MSK_Collage_2015.png",
          desc: "Moscow does not have cows"
        },
        {
          name: 'Paris',
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG/275px-Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG",
          desc: "Paris is known for wine and cheese"
        },
        {
          name: 'Rome',
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rome_Montage_2017.png/250px-Rome_Montage_2017.png",
          desc: "Rome is where the Romans fell"
        }
      ]
    }
  }
})