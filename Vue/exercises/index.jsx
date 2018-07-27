const app = new Vue({
  el: '#root',
  data() {
    return {
      // text: "Hello from App",
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
      // message: 'This is what you would normally see',
      checked: [],
      firstNum: 1,
      secondNum: 1,
      selectedOption: '',
      counter: 0,
      gameMatrix: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ],
      sign: 'X',
      numberOfMoves: 0,
      winner: null,
      blogLabels: ['Math', 'English', 'Science', 'History'],
      blogPosts: [],
      filter: '',
    }
  },
  methods: {
    least() {
      this.checked.sort((a,b) => a.caught-b.caught);
    },
    most() {
      this.checked.sort((a,b) => b.caught-a.caught);
    },
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    checkWinner() {
      let tictactoe = null;

      const checkHorizontal = (row, column) => {
        if (this.gameMatrix[row][column] === this.gameMatrix[row][column + 1] &&
          this.gameMatrix[row][column] === this.gameMatrix[row][column + 2]) {
            tictactoe = this.gameMatrix[row][column]
          }
      }
      const checkVertical = (row, column) => {
        if (this.gameMatrix[row][column] === this.gameMatrix[row + 1][column] &&
          this.gameMatrix[row][column] === this.gameMatrix[row + 2][column] ) {
            tictactoe = this.gameMatrix[row][column]
          }
      }
      const checkDiagonal = (row, column) => {
        if (column === 0) {
          if (this.gameMatrix[row][column] === this.gameMatrix[row + 1][column + 1] &&
            this.gameMatrix[row][column] === this.gameMatrix[row + 2][column + 2]) {
              tictactoe = this.gameMatrix[row][column]
            } 
        } else {
          if (this.gameMatrix[row][column] === this.gameMatrix[row + 1][column - 1] &&
          this.gameMatrix[row][column] === this.gameMatrix[row + 2][column - 2]) {
            tictactoe = this.gameMatrix[row][column]
          }
        }
      }

      for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
          let currentVal = this.gameMatrix[row][column];
          if (currentVal !== ' ') {
            if (column === 0) {
              checkHorizontal(row, column)
            }
            if (row === 0) {
              checkVertical(row, column)
            }
  
            if (row === 0 && column === 0 || row === 0 && column === 2) {
              checkDiagonal(row, column)
            }
            if (tictactoe) {
              return tictactoe;
            }
          }
        } 
      }
      return false;
    },
    handleClick(coordinate) {
      if (!this.winner && coordinate.target.innerHTML === ' ') {
        let { value } = coordinate.target.attributes.name;
        let [row, comma, column] = value;

        this.gameMatrix[row][column] = this.sign;
        coordinate.target.innerHTML = this.sign;
        this.sign = this.sign === 'X' ? 'O' : 'X';

        this.numberOfMoves++;
        if (this.numberOfMoves > 4) {
          let result = this.checkWinner();
          if (result) {
            this.winner = result;
          }
        }
      }
    },
    handleBlogSubmit(e) {
      let title = e.target[0].value;
      let author = e.target[1].value;
      let label = e.target[2].value;
      
      this.blogPosts.push({ title, author, label })
      e.target.reset();
    }
  },
  computed: {
    filteredBlogs() {
      return this.blogPosts.filter(post => post.label.match(this.filter))
    }
  }
});

