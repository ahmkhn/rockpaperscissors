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
const userRoundTracker = document.createElement('div');
const botRoundTracker = document.createElement('div');

roundTrackerMainDiv.appendChild(resultsDiv); // round tracker
userChoiceMainDiv.appendChild(userChoiceDiv);
botChoiceMainDiv.appendChild(botChoiceDiv);
resultsMainDiv.appendChild(divRoundResult);
roundTrackerMainDiv.appendChild(userRoundTracker);
roundTrackerMainDiv.appendChild(botRoundTracker);
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
    if(winner=="user")
    {
        userNum++;
    } else if(winner=="bot"){
        botNum++;
    }
    userRoundTracker.textContent=("User Score: " + userNum);
    botRoundTracker.textContent=("Bot Score: " +botNum);
    resultsDiv.textContent=("Current Round: "+rounds);
    if(rounds>5)
    {
        if(userNum==5)
        {
            messageDisplay="You have won the 5 rounds! I lost miserably... Congratulations :)";
            resultsDiv.textContent=(messageDisplay);
            resetBoard();
            return true;
        }
        if(botNum==5)
        {
            messageDisplay="I have won the 5 rounds! Better luck next time ! :)";
            resultsDiv.textContent=(messageDisplay);
            resetBoard();
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
            gameEnded = roundSetter("");
            break;
        }
        if(botChoice=="paper"&&userInput=="paper")
        {
            divRoundResult.textContent=("Draw! Let's go again!");
            draw=true;
            gameEnded = roundSetter("");
            break;
        }
        if(botChoice=="scissors"&&userInput=="scissors")
        {
            divRoundResult.textContent=("Draw! Let's go again!");
            draw=true;
            gameEnded = roundSetter("");
            break; 
        }
        if(botChoice=="paper"&&userInput!="scissors"&&draw==false)
        {
            divRoundResult.textContent=("I win! :D");
            gameEnded = roundSetter("bot");
            break; 
        } else if(botChoice=="paper"){
            divRoundResult.textContent=("I lost... you won.");
            gameEnded = roundSetter("user");
            break; 
        }
        if(botChoice=="rock"&&userInput!=="paper"&&draw==false)
        {
            divRoundResult.textContent=("I win! :D");
            gameEnded = roundSetter("bot");
            break; 
        } else if(botChoice=="rock"){
            divRoundResult.textContent=("I lost... you won.");
            gameEnded = roundSetter("user");
            break; 
        }
        if(botChoice=="scissors"&&userInput!="rock"&&draw==false)
        {
            divRoundResult.textContent=("I win! :D");
            gameEnded = roundSetter("bot");
            break; 
        } else{
            divRoundResult.textContent=("I lost... you won.");
            gameEnded = roundSetter("user");
            break; 
        }
    }
}

