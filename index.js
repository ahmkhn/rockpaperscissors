function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
const body = document.body;
const userChoiceDiv=document.createElement('div');
const botChoiceDiv=document.createElement('div');
const div = document.createElement('div');
body.appendChild(userChoiceDiv);
body.appendChild(botChoiceDiv);
body.appendChild(div);
var userInput;
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
function playRound()
{
    let botOption = ["rock","paper","scissors"];
    let botChoice = botOption[getRndInteger(0,3)];
    userChoiceDiv.textContent=("User choice: " + userInput);
    botChoiceDiv.textContent=("Bot choice: "+ botChoice);
    botChoiceDiv.setAttribute('class','bot-choice');
    userChoiceDiv.setAttribute('class','user-choice');
    div.setAttribute('class','win-loss');
    var draw=false;

    while(true)
    {
            if(botChoice=="rock" && userInput=="rock")
        {
            div.textContent=("Draw!");
            draw=true;
            break;
        }
        if(botChoice=="paper"&&userInput=="paper")
        {
            div.textContent=("Draw!");
            draw=true;
            break;
        }
        if(botChoice=="scissors"&&userInput=="scissors")
        {
            div.textContent=("Draw!");
            draw=true;
            break; 
        }
        if(botChoice=="paper"&&userInput!="scissors"&&draw==false)
        {
            div.textContent=("I win");
            break; 
        } else if(botChoice=="paper"){
            div.textContent=("I lose...");
            break; 
        }
        if(botChoice=="rock"&&userInput!=="paper"&&draw==false)
        {
            div.textContent=("I win");
            break; 
        } else if(botChoice=="rock"){
            div.textContent=("I lose...");
            break; 
        }
        if(botChoice=="scissors"&&userInput!="rock"&&draw==false)
        {
            div.textContent=("I win");
            break; 
        } else{
            div.textContent=("I lose...");
            break; 
        }
    }
}

