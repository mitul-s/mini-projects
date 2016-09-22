var todos = [];
var input = prompt("What would you like to do?");


while(input !== "quit") {
    //handle the inputs
if (input === "list") {
    listTodos();
}
else if (input === "new") {
    newTodo();
}
else if (input === "delete") {
    deleteTodo();
}
    //ask for input
    input = prompt("What would you like to do?");
}
console.log("Alright, you quit the app! :)");


//running functions 

function listTodos() {
    console.log("~~~~~~~~~~~");
    todos.forEach(function(todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("~~~~~~~~~~~")
}

function newTodo() {
    //ask for a new to-do
    var newTodo = prompt("Enter your new To-do!");
    //add to-do to the array
    todos.unshift(newTodo);
    console.log("Added new to-do!");
}

function deleteTodo(){
    //index of todo to delete
    var index = prompt("Enter index to delete");
    //delete todo
    //splice() 
    todos.splice(index, 1);
    console.log("To-do has been deleted.");
}