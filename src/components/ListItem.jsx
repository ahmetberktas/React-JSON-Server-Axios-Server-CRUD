import axios from "axios";
import { types } from "../constants";
import { formatDate } from "../helpers";
import { useState, useRef } from "react";

const ListItem = ({ setTodos, todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const titleRef = useRef();
  const selectRef = useRef();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      .then(() => setTodos((todos) => todos.filter((i) => i.id !== todo.id)));
  };

  const handleEdit = () => {
    const newValues = {
      title: titleRef.current.value,
      status: selectRef.current.value,
    };
    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, newValues)
      .then(() => {
        const updated = { ...todo, ...newValues };
        setTodos((todos) =>
          todos.map((i) => (i.id === updated.id ? updated : i))
        );
      });
      setIsEdit(false);
  };

  return (
    <li className="relative px-3 py-3 list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isEdit ? (
          <select ref={selectRef} defaultValue={todo.status}>
            <option value="Important">Önemli</option>
            <option value="Daily">Günlük</option>
            <option value="Job">İş</option>
          </select>
        ) : (
          <span className={`badge ${types[todo.status]?.color}`}>
            {types[todo.status]?.text}
          </span>
        )}
      </div>
      {isEdit ? (
        <input ref={titleRef} type="text" defaultValue={todo.title}></input>
      ) : (
        <span>{todo.title}</span>
      )}
      <div className="btn-group">
        {isEdit ? (
          <>
            <button onClick={handleEdit} className="btn btn-sm btn-success">
              Kaydet
            </button>
            <button
              onClick={() => setIsEdit(false)}
              className="btn btn-sm btn-danger"
            >
              İptal
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEdit(true)}
              className="btn btn-sm btn-warning"
            >
              Edit
            </button>
            <button onClick={handleDelete} className="btn btn-sm btn-danger">
              Delete
            </button>
          </>
        )}
      </div>
      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
