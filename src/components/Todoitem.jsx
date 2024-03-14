import { MdAutoDelete } from "react-icons/md";

function Todoitem({ todoName, todoDate, onDeleteClick }) {
    return (
      <div className="container">
        <div className="row first-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger button1" 
            onClick= { () =>onDeleteClick(todoName)}>
            <MdAutoDelete/>

            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Todoitem;
  