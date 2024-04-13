let img1 = document.querySelectorAll(".img");
let you_score = document.querySelector("#you-score");
let comp_score = document.querySelector("#comp-score");
let btn = document.querySelector("button");


 let user_count = 0;
 let comp_count = 0;
 
img1.forEach((img) => {
    img.addEventListener("click",() =>{
        //userChoice
        let userChoice = img.getAttribute("id");
        console.log(userChoice);
        //computerChioce
        let choices =["rock","paper","scissors"];
        let index = Math.floor(Math.random() *3);
        let computerChoice = choices[index];
        console.log(computerChoice);
        //DRAW
        if(userChoice === computerChoice){
            btn.innerText = "It was Draw / Play Again";
            btn.style.backgroundColor = "rgba(7, 16, 34, 0.973)";
        }
        //User-Winner
        else if(
        (userChoice === "paper" && computerChoice === "rock")||
        (userChoice === "rock" && computerChoice === "scissors")||
        (userChoice === "scissors" && computerChoice === "paper"))
        {
            btn.innerText = "You win!";
            btn.style.backgroundColor = "green";
            you_score.innerText = ++user_count;
        }
        //comp_winner
        else{
            comp_score.innerText = ++comp_count;
            btn.innerText = " You lose.";
            btn.style.backgroundColor = "red";
        }
    })
})


