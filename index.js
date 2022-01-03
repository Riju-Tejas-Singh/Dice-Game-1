var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1) + 1;
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2) + 1;
document.querySelectorAll("img")[0].setAttribute("src","dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src","dice" + randomNumber2 + ".png");
if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}else{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
