import { useEffect, useState } from "react"
import Form from "./components/Form"
import ListItem from "./components/ListItem"
import axios from "axios"
import Loading from "./components/Loading"

function App() {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:3000/todos")
      .then(res => setTodos(res.data))
  }, [])

  return (
    <>
      <div className="container p-5">
        <h2 className="text-center">Server <span className="text-warning">CRUD</span></h2>
        <Form setTodos={setTodos}></Form>
        <ul className="list-group">
          {!todos && <Loading></Loading>}
          {todos?.map((todo) => <ListItem key={todo.id} todo={todo} setTodos={setTodos}></ListItem>)}
        </ul>
      </div>
    </>
  )
}

export default App
