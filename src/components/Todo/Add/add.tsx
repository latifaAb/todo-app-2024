import { SetStateAction, useState } from "react";
import todoItems, { addNewTodoItem, generatedId } from "../../Utils";

function Add(props)  {
  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNewTodoItem(newTodo,priority);
    setNewTodo("");
    setPriority("");
  };
  const handleChange = (event)=> {
    setNewTodo(event.target.value);
  };

  return (
    <form className="add text-center my-4" onSubmit={handleSubmit} data-testid="add-form">
      <label htmlFor="add" className="add text-light">
        Add a new todo:
      </label>
      <input
        type="text"
        className="form-control m-auto"
        name="add"
        id="add"
        value={newTodo}
        onChange={handleChange}
      />   
      
    </form>
  );
}
export default Add;
