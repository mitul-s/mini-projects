var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById('message');

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
            changeColors(clickedColor);
        }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = 'Try again.';
        }
    });
};

function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }   
}

function pickedColor() {
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