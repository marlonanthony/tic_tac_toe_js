let player,
    winner = null

startGame()

function startGame() {
  for (let i = 0; i < 9; i++) {
    clearBoard(i)
  }
  player = 'X'
  winner = null
  setMessage(`It's ${player}'s turn!`)
}

function setMessage(msg) {
  document.getElementById('message').innerText = msg
}

function pickSquare(square) {
  if(winner) setMessage(`${winner} already won!`)
  else if(checkForTie()) {
    setMessage('Game ended in a tie.')
  }
  else if(square.innerText === '') {
    square.innerText = player
    switchTurn()
  } else {
    setMessage('Pick another square!')
  }
}

function switchTurn() {
  if(checkForWin(player)) {
    winner = player
    setMessage(`Congrats ${winner} you've won!`)
  } else if(checkForTie()) {
    setMessage(`Game is tied.`)
  } else if(player === 'X') {
    player = 'O'
    nextMove()
  } else {
    player = 'X'
    setMessage(`It's ${player}'s turn!`)
  }
}

function checkForWin(person) {
  let result

  if(getRow(0,1,2,person) ||
     getRow(3,4,5,person) ||
     getRow(6,7,8,person) ||
     getRow(0,3,6,person) ||
     getRow(1,4,7,person) ||
     getRow(2,5,8,person) ||
     getRow(0,4,8,person) ||
     getRow(2,4,6,person)) {
       result = true
     }
  return result
}

function getRow(a,b,c,person) {
  let result

  if(getCell(a) === person &&
     getCell(b) === person &&
     getCell(c) === person) {
       result = true
     }
  return result
}

function getCell(id) {
  return document.getElementById(id).innerText
}

function checkForTie() {
  const arr = []
  let result

  for(let i = 0; i < 9; i++) {
    arr.push(getCell(i))
  }

  if(arr.every(cell => cell) && !winner) {
    result = true
  }
  return result
}

function nextMove() {
  for(let i = 0; i < 9; i++) {
    if(getCell(i) === '') {
      document.getElementById(i).innerText = player
      switchTurn()
      break
    }
  }
}

function clearBoard(id) {
  return document.getElementById(id).innerText = ''
}