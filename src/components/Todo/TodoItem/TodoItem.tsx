import { faCheck, faCircle, faEyeSlash, faPenToSquare, faSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TodoItem = (props) => {
    const handleUpdate = () => {
        const newTitle = prompt("Update Todo:", props.item.todo);
        if (newTitle) {
            props.updateTodoItem(props.item.id, newTitle);
        }
    };

    const handleDelete = () => {
        props.deleteTodoItem(props.item.id);
    };

    const handleToggleComplete = () => {
        props.updateTodoState(props.item.id, props.item.complete= !props.item.complete );
        console.log(props.item.complete);
    };
    const priorityColors = {
        P1: 'primary',
        P2: 'success',
        P3: 'danger',
        P4: 'warning'
    };
    
        return(
            <>       
             <li className="list-group-item d-flex justify-content-between align-items-center">
               <span><span className={`badge bg-${priorityColors[props.item.priority]} me-2`}>{props.item.priority}</span>{props.item.todo}</span>
                <div>
                <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={props.item.complete ? faCheck : faEyeSlash}
                        className={"pointer"}
                        onClick={handleToggleComplete}
                    />
                    <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={faPenToSquare}
                        className="pointer"
                        onClick={handleUpdate} />
                    <FontAwesomeIcon icon={faTrashAlt}
                        className="pointer"
                        onClick={handleDelete} />
                </div>
            </li></>      
    )
}

export default TodoItem;