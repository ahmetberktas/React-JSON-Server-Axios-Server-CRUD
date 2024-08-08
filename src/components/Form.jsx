import axios from "axios";
import { v4 } from "uuid";

const Form = ({ setTodos }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const status = e.target[1].value;

    if (!title) {
      return alert("Lütfen Formu Doldurun");
    }

    const newTodo = {
      id: v4(),
      title,
      status,
      date: new Date().toLocaleDateString(),
      isDone: false,
    };

    axios.post("http://localhost:3000/todos", newTodo)
    .then(() => {
        setTodos((todos) => [...todos, newTodo]);
    })
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        className="form-control shadow"
        placeholder="ör: React Projesi"
        type="text"
      ></input>
      <select className="form-select w-50" name="" id="">
        <option value="Important">Önemli</option>
        <option value="Daily">Günlük</option>
        <option value="Job">İş</option>
      </select>
      <button type="submit" className="btn btn-primary shadow">
        Gönder
      </button>
    </form>
  );
};

export default Form;
