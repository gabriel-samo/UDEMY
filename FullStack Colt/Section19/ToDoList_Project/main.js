const todoList = [];
let action;

while(action !== 'quit' && action !== 'q'){
    action = prompt("What would you like to do?").toLowerCase();
    if(action === 'new'){
        let newTodo = prompt("Enter a new todo");
        todoList.push(newTodo);
        console.log(`${newTodo} Added to the list`) 
    } 
    else if(action === 'list' ){
        console.log("**********");
        // You can do the loop in two ways, the first way is with "for..of":
        //------------------------------------------------------------------
        for(let todo of todoList){
            console.log(`${todoList.indexOf(todo)}: ${todo}`);
        }
        // The second way is with reuglar "for":
        //--------------------------------------
        // for(let i = 0; i < todoList.length; i++){
        //     console.log(`${i}: ${todoList[i]}`);
        // }
        console.log("**********");
    } 
    else if(action === 'delete'){
        let indexDelete = parseInt(prompt("Enter index of todo to delete"));
        todoList.splice(indexDelete, 1);
        console.log("Todo Removed"); 
    }
}
console.log("OK, YOU QUIT THE APP.");