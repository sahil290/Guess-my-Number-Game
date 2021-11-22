"use Strict";
//Generating Random Numbers from 1 to 20//
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".secretNumber").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guessNumber").value);
  console.log(guess);
  //If there is no guess number//
  if (!guess) {
    document.querySelector(".message").textContent = "Not a Number!";
    //If the guess NUmber is correct//
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".container").style.backgroundColor = "green";
    //If guess number is greater //
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
    //If the number is Less//
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
