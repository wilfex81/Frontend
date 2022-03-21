function rpsGame(yourChoice){
    let humanChoice, botChoice;
    console.log(yourChoice);
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randomToRpsInt());
    console.log('Computer choice:', botChoice);
    //alert(botChoice)

    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    
    message = finalMessage(results);
    console.log(message);
    //{'message': 'you won!!', 'color': 'green'}
    rpsFrontend(yourChoice.id, botChoice, message)
}

function randomToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    let rpsDatabase = {
        'rock': { 'scissors': 1, 'rock':0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper' :1, 'scissors': 0.5, 'rock':0}
    };

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];
    
    return(yourScore, computerScore);
}

function finalMessage(yourScore, computerScore){
    if (yourScore == 0 ) {
        return{'message': 'You lost!','color': 'red'};
    }else if (yourScore == 0.5 ) {
        return{'message': 'You tied!','color': 'yellow'};
    }else{
        return{'message': 'You won!','color': 'green'};
    }
}

function rpsFrontend(humanImageChoice, botImageChoice, finalMessage ){
    let imagesDatabase = {
        'rock': document.getElementById('rock').src, 
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //removes all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let imageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src= '" + imagesDatabase[humanImageChoice] + "' height = 150 width = 150 style = box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);>"
    botDiv.innerHTML = "<img src= '" + imagesDatabase[botImageChoice] + "' height = 150 width = 150 style = box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

    }
