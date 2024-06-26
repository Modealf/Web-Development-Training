const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const yellowButton = document.getElementById("yellow");
const levelTitle = document.getElementById("level-title");
alert("hello")


  function startGame() {
    level += 1;
    levelTitle.textContent = concat("level " + level);
  }
