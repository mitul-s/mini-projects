
var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easy-btn');
var hardBtn = document.querySelector('#hard-btn');





easyBtn.addEventListener('click', function() {
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener('click', function() {
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener('click', function(){
   //new colors
    colors = generateRandomColors(numOfSquares);
    // pick color
    pickedColor = pickColor();
    // change colorDisplay
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    //change square colors
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "lightseagreen";
    resetButton.textContent = 'New colors';
});

colorDisplay.textContent = pickedColor;



for(var i = 0; i < squares.length; i++) {
    // add initial colors to squares 
    
    squares[i].style.background = colors[i];
    
    //add click listeners to squares 
    squares[i].addEventListener("click", function(){
       // get color of clicked sq
    var clickedColor = this.style.background;
        // compare to pickedcolor
        if(pickedColor === clickedColor) {
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'PLAY AGAIN?'
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else {
            this.style.background = "#2c3e50";
            messageDisplay.textContent = 'Try again.';
        }
    });
};

function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }   
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make array 
    var arr = [];
    // add num random colors to array
    for(var i = 0; i < num; i++) {
        arr.push(randomColor())
        // get random color and push into arr
        
    }
    // return array
    return arr;
}


function randomColor() {
    // red
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
