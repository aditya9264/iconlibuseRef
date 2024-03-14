import { useState, useRef } from "react";
import { MdOutlineAddAlarm } from "react-icons/md";
import styles from "./Addtodo.module.css";

function Addtodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are : ${noOfUpdates.current}`)
  // };
  const handleAddButtonClicked = (event) => {
    
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = ""
   dueDateElement.current.value =""
     onNewItem(todoName, dueDate);
    //  setDueDate("");
    //  setTodoName("");
  };

  return (
    <div className="container text-center">
      
      <form className="row first-row"
      onSubmit={handleAddButtonClicked}>
      
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"
          ref={dueDateElement} 
          // value={dueDate} 
          // onChange={handleDateChange}
           />
        </div>
        <div className="col-2">
          <button
          
            // type="button"
            className="btn btn-success button1"
            // onClick={handleAddButtonClicked}
          >
            <MdOutlineAddAlarm />
          </button>
        </div>
       
      </form>
    </div>
  );
}
export default Addtodo;
