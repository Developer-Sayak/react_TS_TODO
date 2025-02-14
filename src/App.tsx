import Addtodo from "./components/Addtodo"
import NavBar from "./components/NavBar"
import Todos from "./components/todos"

const App = () => {
  return (
    <div>
      <main>
        <h1> REACT + TYPESCRIPT</h1>
        <NavBar />
        <Addtodo />
        <Todos />
      </main>
    </div>
  )
}

export default App
