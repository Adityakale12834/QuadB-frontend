import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, updateTodo } from '../redux/slices/todoSlice'; // Adjust with your actual action imports
import CardContent from '@mui/material/CardContent'; // Adjust the import based on your setup

function TaskList() {
  const todos = useSelector(state => state.todos);
  const [update, setUpdate] = useState("");
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = () => {
    dispatch(updateTodo({
      id: currentTodoId,
      text: update,
    }));
  };

  const toggleReadStatus = (id) => {
    dispatch(toggleComplete(id)); // Assuming toggleComplete accepts todo id
  };

  return (
    <>
      <ul className="overflow-y-scroll">
        {todos.map((todo) => (
          <li key={todo.id} className="bg-slate-600 w-[50vw] m-2">
            <CardContent className="flex items-center justify-between">
              <h1 className="w-auto">{todo.text}</h1>
              <div className="flex gap-3">
                <button className="btn btn-outline-danger" onClick={() => handleDelete(todo.id)}>delete</button>
                <button
                  className="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${todo.id}`}
                  onClick={() => {
                    setCurrentTodoId(todo.id);
                    setUpdate(todo.text);
                  }}
                >
                  update
                </button>
                <button className="btn btn-outline-info" onClick={() => toggleReadStatus(todo.id)}>
                  {todo.read ? 'Mark as unread' : 'Mark as read'}
                </button>
              </div>
              <div className="modal fade" id={`exampleModal${todo.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className='modal-header'>
                      <h1>Update todo</h1>
                    </div>
                    <div className="modal-body">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={update}
                        onChange={(e) => setUpdate(e.target.value)}
                      />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
