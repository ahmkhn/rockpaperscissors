function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
const userChoiceMainDiv = document.querySelector(".user-choice")
const botChoiceMainDiv=document.querySelector(".bot-choice");
const resultsMainDiv=document.querySelector(".result");
const roundTrackerMainDiv=document.querySelector(".round-tracker");


const userChoiceDiv=document.createElement('div');
const botChoiceDiv=document.createElement('div');
const divRoundResult = document.createElement('div');
const resultsDiv = document.createElement('div');

roundTrackerMainDiv.appendChild(resultsDiv); // round tracker
userChoiceMainDiv.appendChild(userChoiceDiv);
botChoiceMainDiv.appendChild(botChoiceDiv);
resultsMainDiv.appendChild(divRoundResult);
var userInput;
var rounds =0;
var userNum=0;
var botNum=0;
var messageDisplay="";
function setScissors()
{
    userInput="scissors";
    return userInput;
}
function setRock()
{
    userInput="rock";
    return userInput;
}
function setPaper()
{
    userInput="paper";
    return userInput;
}
function resetBoard()
{
    rounds=0;
    userNum=0;
    botNum=0;
    messageDisplay="";
}
function roundSetter(winner)
{
    rounds++;
    if(winner="user")
    {
        userNum++;
    } else{
        botNum++;
    }
    if(rounds>4)
    {
        if(userNum==5)
        {
            messageDisplay="You have won the 5 rounds! I lost miserably... Congratulations :)";
            resultsDiv.textContent=(messageDisplay);
            return true;
        }
        if(botNum==5)
        {
            messageDisplay="I have won the 5 rounds! Better luck next time buddy! :)";
            resultsDiv.textContent=(messageDisplay);
            return true;
        }
    }
}
function playRound()
{
    let botOption = ["rock","paper","scissors"];
    let botChoice = botOption[getRndInteger(0,3)];
    userChoiceDiv.textContent=("User choice: " + userInput);
    botChoiceDiv.textContent=("Bot choice: "+ botChoice);
    var draw=false;
    var gameEnded=false;

    while(gameEnded==false)
    {
            if(botChoice=="rock" && userInput=="rock")
        {
            divRoundResult.textContent=("Draw! Let's go again!");
            draw=true;
            break;
        }
        if(botChoice=="paper"&&userInput=="paper")
        {
            divRoundResult.textContent=("Draw! Let's go again!");
            draw=true;
            break;
        }
        if(botChoice=="scissors"&&userInput=="scissors")
        {
            divRoundResult.textContent=("Draw! Let's go again!");
            draw=true;
            break; 
        }
        if(botChoice=="paper"&&userInput!="scissors"&&draw==false)
        {
            divRoundResult.textContent=("I win! Better luck next time!");
            gameEnded = roundSetter("bot");
            break; 
        } else if(botChoice=="paper"){
            divRoundResult.textContent=("I lost... you won.");
            gameEnded = roundSetter("user");
            break; 
        }
        if(botChoice=="rock"&&userInput!=="paper"&&draw==false)
        {
            divRoundResult.textContent=("I win! Better luck next time!");
            gameEnded = roundSetter("bot");
            break; 
        } else if(botChoice=="rock"){
            divRoundResult.textContent=("I lost... you won.");
            gameEnded = roundSetter("user");
            break; 
        }
        if(botChoice=="scissors"&&userInput!="rock"&&draw==false)
        {
            divRoundResult.textContent=("I win! Better luck next time!");
            gameEnded = roundSetter("bot");
            break; 
        } else{
            divRoundResult.textContent=("I lost... you won.");
            gameEnded = roundSetter("user");
            break; 
        }
    }
}

