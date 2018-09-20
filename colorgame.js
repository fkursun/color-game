var numberOfSquares=6;
var body=document.querySelector('body');
var squares= document.querySelectorAll('.square');
var rgbText=document.querySelector('#rgb');
var tryAgain=document.querySelector('#try-again');
var easy=document.querySelector('#easy');
var hard=document.querySelector('#hard');
var topColor=document.querySelector('.asd');
var newGame=document.querySelector('#new-game');

//var selected=document.querySelectorAll('.selected');
var colors=randColor(numberOfSquares);
var pickedColor=colors[getRandomInt(numberOfSquares)];
rgbText.textContent=pickedColor.toUpperCase();
game();
var gameOver=0;

newGame.addEventListener('click', function(e) {
	fadeInn(squares);
	colors=randColor(numberOfSquares);
	pickedColor=colors[getRandomInt(numberOfSquares)];
	rgbText.textContent=pickedColor.toUpperCase();
	newGame.textContent="New Colors";
	topColor.style.backgroundColor="#4286f4";
	tryAgain.textContent=" ";
	game();
	gameOver=0;
});


easy.addEventListener('click', function(e) {

	hard.classList.remove("selected");
	easy.classList.add("selected");
	numberOfSquares=3;
	colors=randColor(numberOfSquares);
	pickedColor=colors[getRandomInt(numberOfSquares)];
	rgbText.textContent=pickedColor.toUpperCase();
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}

	game();
	gameOver=0;
});

hard.addEventListener('click', function(e) {
	fadeInn(squares);
	numberOfSquares=6;
	colors=randColor(numberOfSquares);
	pickedColor=colors[getRandomInt(numberOfSquares)];
	rgbText.textContent=pickedColor.toUpperCase();
	topColor.style.backgroundColor="#4286f4";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	for(var i=0;i<squares.length;i++){
		squares[i].style.display="block";
	}
	game();
	gameOver=0;

});




function fadeOut(sq){
	sq.style.opacity=0;
	sq.style.transition="opacity 0.7s linear";
	

}
function fadeIn(squares,corrColor){
	for(var i=0; i<squares.length;i++){
		squares[i].style.backgroundColor=corrColor.style.backgroundColor;
		squares[i].style.transition="opacity 0.5s linear";
		squares[i].style.opacity=1;
	}
	topColor.style.backgroundColor=corrColor.style.backgroundColor;
}
function fadeInn(squares){
	for(var i=0; i<squares.length;i++){
		squares[i].style.transition="opacity 0.5s linear";
		squares[i].style.opacity=1;
	}
}

function getRandomInt(max){
	return Math.floor(Math.random()*Math.floor(max));
}

function game(){
	for(var i=0; i<squares.length;i++)	{
		squares[i].style.backgroundColor=colors[i];	
		squares[i].addEventListener('click', function(e) {
		if(this.style.backgroundColor===pickedColor){
			console.log("Colors are the same");
			tryAgain.style.color="#226b31";
			tryAgain.textContent="Correct";
			newGame.textContent="Play Again?";
			gameOver=1;
		}
		if(gameOver){
			fadeIn(squares,this);
		}

		else{
			fadeOut(this);
			tryAgain.style.color="red";
			tryAgain.textContent="Try Again";
			}
		});
	}
}

function randColor(length){
	var colors=[];
	for(var i=0;i<length;i++){
		colors[i]="rgb("+getRandomInt(255)+", "+getRandomInt(255)+", "+getRandomInt(255)+")";
	}
	return colors;
}

function addDiv(){
	var div=document.getElementById('container');
	var sqDiv=document.createElement('div');
	var oneSquare=document.querySelectorAll('.square');
	var clr=randColor(3);
	sqDiv.className='square';
	div.appendChild(sqDiv);
	document.getElementsByTagName('body')[0].appendChild(div);

}