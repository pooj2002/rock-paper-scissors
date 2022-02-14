const handOptions = {
    "rock": "images/Rock.png",
    "paper": "images/Paper.png",
    "scissors": "images/Scissors.png"
  }

let SCORE = 0;

const pickUserHand = (hand) => {
    //hide the options
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //display the contest
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //display the image user picked
    let userpick = document.getElementById("userPickImage");
    userpick.src = handOptions[hand];

    let cpHand = pickComputerHand();
    refree(hand,cpHand);
}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let compHand = hands[Math.floor(Math.random()*3)];

     //display the image computer picked
     let compPick = document.getElementById("compPickImage");
     compPick.src = handOptions[compHand];
 
     return compHand;   
}

const refree = (userHand,cpHand) => {

    if(userHand === cpHand)
    {
        setDecision("It's a tie!");   
    }
    if (userHand == "paper" && cpHand == "scissors")
    {
        setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "rock")
    {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "scissors") 
    {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") 
    {
        setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "rock")
    {
        setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper")
    {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }

};
const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
  }
const setDecision = (decision) => {
    
    document.querySelector(".decision h1").innerText = decision;
  }

const restartGame = () => {

    //displaying choice div
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    //hide contest div
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}

const rulesDisplay = () =>
{
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("ruleimg");
    var modalImg = document.getElementById("img01");
   
    modal.style.display = "block";
    modalImg.src = "images/image-rules.svg";
   
   

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
}
}