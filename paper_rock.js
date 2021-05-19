const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput ==='rock' || userInput ==='paper' || userInput ==='scissors' || userInput ==='bomb'){
      return userInput;
    } else {
      console.log('Error!');
    }
  };//fiz até o primeiro if 
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
      switch (randomNumber) {
        case 0:
          return 'rock';
        case 1: 
          return 'paper';
        case 2:
          return 'scissors';
      }
  };//não entendi 
  
  const determineWinner = (userChoice, computerChoice) => {//errei na abertura parentese
    if(userChoice === 'bomb'){
      return 'Finish to all';
    }
    if(userChoice === computerChoice)
      return 'The game is a tie!';
    if(userChoice === 'rock'){
      if(computerChoice==='paper'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'The computer won';
      } else {
        return 'You won';
      }
    }
    if(userChoice ==='scissors'){
      if(computerChoice === 'rock'){
        return 'The computer won';
      } else {
        return 'Congratulation you won';
      }
    }
  };
  //console.log(determineWinner('paper', 'rock'));//verificando o jogo! 
  //console.log(determineWinner('paper', 'scissors'));
  //console.log(determineWinner('paper', 'paper'));
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice(); 
    console.log('You threw:' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    
  };
  playGame();
  //entender o item 14