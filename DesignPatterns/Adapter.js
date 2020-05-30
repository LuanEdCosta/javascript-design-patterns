// The old function
function Game() {
  this.play = () => {
    console.log('Render map')
    console.log('Render player')
  }
}

// New function with different interfaces
function NewGame() {
  this.renderPlayer = () => {
    console.log('Render player')
  }

  this.renderMap = () => {
    console.log('Render map')
  }
}

// Adapter
function GameAdapter() {
  const newGame = new NewGame()

  return {
    play() {
      newGame.renderMap()
      newGame.renderPlayer()
    },
  }
}

// Function to run the game
function Run() {
  const game = new Game()
  console.log('Old:')
  game.play()

  const gameAdapter = new GameAdapter()
  console.log('New:')
  gameAdapter.play()
}

Run() // Running the game
