import { useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
    const {todos,toggleTodoAsCompleted,handleDeleteTodo} = useTodos();
    const [searchParams] = useSearchParams();
    let todosdata = searchParams.get("todos");

    let filterData = todos ;

    if(todosdata === "active") {
        filterData = todos.filter((todo) => !todo.completed);
    }
    if(todosdata === "completed") {
        filterData = todos.filter((todo) => todo.completed);
    }
    console.log("filter", filterData)
  return (
    <ul>
        {
            filterData.map((todo) => {
                return <li key={todo.id}>
                    <input type="checkbox" id={`todo-${todo.id}`} 
                    checked={todo.completed} onChange={()=>{toggleTodoAsCompleted(todo.id)}}/>
                    <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                    {
                        todo.completed && 
                        <button type="button" onClick={()=>{handleDeleteTodo(todo.id)}}>Delete</button>
                    }
                    </li>
            }) 
        }
      
    </ul>
  )
}

export default Todos
