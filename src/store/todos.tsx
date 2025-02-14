import React, { createContext } from "react";

export const todosContext = createContext<TodosContextType | undefined>(undefined);

export type TodosProviderProps = {
  children: React.ReactNode;
}

export type Todo = {
    id: number;
    task: string;
    completed: boolean;
    createAt: Date;
    }

export type TodosContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};


export const TodosProvider = ({children}:TodosProviderProps) => {
  const [todos, setTodos] = React.useState<Todo[]>(()=>{
    try{
        const newTodos = localStorage.getItem("todos") || "[]" ;
        return JSON.parse(newTodos);
    }catch(e) {
      console.error(e);
    }
  });
  const handleAddTodo = (task: string) => {
      setTodos((prev) => {
        const newTodos: Todo[] = [
          {
            id: Math.floor(Math.random() * 1000000),
            task: task,
            completed: false,
            createAt: new Date()
          },
          ...prev
        ];
        // console.log("Previous todos:", prev);
        // console.log(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
      });
  }
 const toggleTodoAsCompleted = (id: number) => {
    setTodos((prev) => {  
      let newTodos = prev.map((todo) => { 
          if(todo.id === id) {
              return {
                  ...todo,
                  completed: !todo.completed
              }
          }
          return todo;
      })
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

 const handleDeleteTodo = (id: number) => {
    setTodos((prev) => { 
        let newTodos = prev.filter((todo) => todo.id !== id)
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
    });
};

  return (
    <todosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted , handleDeleteTodo}}>
      {children}
    </todosContext.Provider>
  );
}



export const useTodos = () => {
  const todosConsumer = React.useContext(todosContext); 
    if(!todosConsumer) 
        throw new Error("useTodos must be used within a Todos")
  return todosConsumer;
}