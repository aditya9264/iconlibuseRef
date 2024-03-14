import AppName from "./components/appname";
import Addtodo from "./components/addtodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";
function App() {
  

  const [todoItems, settodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
   
    
    // settodoItems((currValue) =>{
    //   const newTodoItems = [
    //     ...currValue,
    //     { name: itemName, dueDate: itemDueDate },
    //   ];
    //   return newTodoItems
    // })
     
    settodoItems((currValue) =>
       [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ]); 
  };
  const handleDeleteItem = (todoItemName) =>{
  const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
  settodoItems (newTodoItems)
  }


  return (
    <center className="todo-container">
      <AppName></AppName>
      <Addtodo onNewItem={handleNewItem}></Addtodo>
     {todoItems.length === 0 && <Welcomemsg ></Welcomemsg>}
      <Todoitems onDeleteClick = {handleDeleteItem} todoItems={todoItems}></Todoitems>
    </center>
  );
}
export default App;
