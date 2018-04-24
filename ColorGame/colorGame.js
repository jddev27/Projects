numSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	setupModeBtns();
	setupSquares();
	reset();
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].addEventListener("click",function()
		{
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor)
			{
				message.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetBtn.textContent = "Play again?";
			}
			else
			{
				message.textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function setupModeBtns(){
	for (var i = 0; i < modeBtn.length; i++) 
	{
		modeBtn[i].addEventListener("click", function()
		{
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares =3 : numSquares = 6;
			reset();
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	message.textContent ="";
	resetBtn.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
		
	}
}


resetBtn.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var randomNumber = Math.floor((Math.random()*colors.length));
	return colors[randomNumber];
}

function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i < num; i++) {
		var randomColor = getRandomColor();
		arr.push(randomColor);
	}
	return arr;
}

function getRandomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random()* 256);

	return "rgb(" +red+ ", " + green + ", " + blue + ")";
}