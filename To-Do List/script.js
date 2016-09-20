var todos = [];
var input = prompt("What would you like to do?");


while(input !== "quit") {
    //handle the inputs
if (input === "list") {
    console.log(todos);
}
else if (input === "new") {
    //ask for a new to-do
    var newTodo = prompt("Enter your new To-do!");
    //add to-do to the array
    todos.unshift(newTodo);
}
    //ask for input
    input = prompt("What would you like to do?");
}
console.log("Alright, you quit the app! :)");