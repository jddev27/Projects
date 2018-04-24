var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var reset = document.querySelector("#reset");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var playingDisplay = document.querySelector("p span");
var numberInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var gameWinner = 5;

p1Button.addEventListener("click",function(){
	if(!gameOver)
	{
		p1Score++;
		if(p1Score === gameWinner)
		{
			gameOver = true;
			p1.classList.add("winner");
		}
		p1.textContent = p1Score;
	}
});

p2Button.addEventListener("click",function(){
	if(!gameOver)
	{
		p2Score++;
		if(p2Score === gameWinner)
		{
			gameOver = true;
			p2.classList.add("winner");
		}
		p2.textContent = p2Score;
	}
});

reset.addEventListener("click", function(){
	resetGame();

});



numberInput.addEventListener("change",function(){
	playingDisplay.textContent = this.value;
	gameWinner = Number(this.value);
	resetGame();
});


function resetGame()
{
	p1Score = 0;
	p2Score = 0;
	p1.textContent = 0;
	p2.textContent = 0;
	gameOver = false;
	p1.classList.remove("winner");
	p2.classList.remove("winner");
}