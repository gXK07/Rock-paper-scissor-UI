

const Rock = document.querySelector('#Rock');
const Paper = document.querySelector('#Paper');
const Scissor = document.querySelector('#Scissor');
const result = document.querySelector('#result');
const toPrint = document.querySelector('#toPrint');

// function that randomly return  "Rock" "paper" or "scissor".
function computerplay() {
    let result = "";
    let choices = ["rock","paper","scissor"];
    result = choices[Math.floor(Math.random()* 3)];
    return result;
}

// function that compare the 2 anwers and return a string with a message in fonction of who win, who loose and with what selection.
function Round(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection){
        if (playerSelection.toLowerCase() === "rock"){
            return "Equality, Rock and Rock";
        }
        if (playerSelection.toLowerCase() === "paper"){
            return "Equality, paper and paper";
        }
        if (playerSelection.toLowerCase() === "scissor"){
            return "Equality, scissor and scissor";
        }
    }
    else if(playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "paper"){
            return "Loose ! Paper takes Rock";
        }
        if (computerSelection === "scissor"){
            return "Win ! Rock takes scissor";
        }
    }
    else if(playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "rock"){
            return "Win ! Paper takes Rock";
        }
        if (computerSelection === "scissor"){
            return "Loose ! scissor takes paper";
        }
    }
    else if(playerSelection.toLowerCase() === "scissor"){
        if (computerSelection === "paper"){
            return "Win ! Scissor takes paper";
        }
        if (computerSelection === "rock"){
            return "Loose ! Rock takes scissor";
        }
    }
    else{
        return "Choose between the 3 choices";
    }


}
//function that determine who win in fonction of the string return by the Round() function.
function WinLoose(string){
    if (string === "Win ! Scissor takes paper" ||
             string === "Win ! Paper takes Rock" ||
             string === "Win ! Rock takes scissor"){
        return "win";
    }
    if (string === "Loose ! Rock takes scissor" ||
            string === "Loose ! scissor takes paper" ||
            string === "Loose ! Paper takes Rock"){
        return "loose";
    }
    if (string === "Equality, Rock and Rock" ||
            string === "Equality, paper and paper" ||
            string === "Equality, scissor and scissor"){
    return "equal";
    }
    if(string === "Choose between the 3 choices"){
        return "choices";
    }
    else {
    return 0;
    }
}



/*
function game(playerSelection){  
    toPrint.textContent = Round(playerSelection, computerplay());
}


Rock.addEventListener('click', () => {game("Rock")});
Paper.addEventListener('click', () => {game("Paper")});
Scissor.addEventListener('click', () => {game("Scissor")});
*/








function game(){ 
    let scorePlayer = 0;
    let scoreComp = 0;

        Rock.addEventListener('click', () => {
            let buffer = Round("Rock", computerplay());
            if (WinLoose(buffer) === "win"){
                scorePlayer++;
            }
            else if (WinLoose(buffer) === "loose"){
                scoreComp++;
            }
            else if (WinLoose(buffer) !== "equal"){
                alert("something went wrong");
                return 0;
            }
            toPrint.textContent = buffer + "\nThe score is : " + scorePlayer + "/" + scoreComp;
            if(scorePlayer === 5){
                alert("Victory !");
                return 0;
                }
                else if(scoreComp === 5){
                alert("Game over");
                return 0;
                }
        });




        Paper.addEventListener('click', () => {
            let buffer = Round("Paper", computerplay());
            if (WinLoose(buffer) === "win"){
                scorePlayer++;
            }
            else if (WinLoose(buffer) === "loose"){
                scoreComp++;
            }
            else if (WinLoose(buffer) !== "equal"){
                alert("something went wrong");
                return 0;
            }
            toPrint.textContent = buffer + "\nThe score is : " + scorePlayer + "/" + scoreComp;
            if(scorePlayer === 5){
                alert("Victory !");
                return 0;
                }
                else if(scoreComp === 5){
                alert("Game over");
                return 0;
                }
        });






        Scissor.addEventListener('click', () => {
            let buffer = Round("Scissor", computerplay())
            if (WinLoose(buffer) === "win"){
                scorePlayer++;
            }
            else if (WinLoose(buffer) === "loose"){
                scoreComp++;
            }
            else if (WinLoose(buffer) !== "equal"){
                alert("something went wrong");
                return 0;
            }
            toPrint.textContent = buffer + "\nThe score is : " + scorePlayer + "/" + scoreComp;
            if(scorePlayer === 5){
                alert("Victory !");
                return 0;
                }
                else if(scoreComp === 5){
                alert("Game over");
                return 0;
                }
        });


}

game();
