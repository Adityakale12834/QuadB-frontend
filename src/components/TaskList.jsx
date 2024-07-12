import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, updateTodo } from '../redux/slices/todoSlice';
import CardContent from '@mui/material/CardContent';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckIcon from '@mui/icons-material/Check';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

function TaskList() {
  const todos = useSelector(state => state.todos);
  const [update, setUpdate] = useState("");
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    localStorage.removeItem(id);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({
      id: currentTodoId,
      text: update,
    }));
  };

  const toggleReadStatus = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <>
      <ul className="overflow-y-scroll ">
        {todos.map((todo) => (
          <li key={todo.id} className="bg-slate-800 text-white font-medium w-full lg:w-[1000px] sm:w-[600px] max-w-full rounded-lg shadow-xl my-2" style={{background:!todo.read ? "#1e293b" :  "#075985"}} >

            <CardContent className="flex items-center justify-between">
              <h1 className="w-full mx-4">{todo.text}</h1>
              <div className="flex gap-3">
                <button className="btn btn-outline-danger" onClick={() => handleDelete(todo.id)}><ClearIcon/></button>
                <button
                  className="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${todo.id}`}
                  onClick={() => {
                    setCurrentTodoId(todo.id);
                    setUpdate(todo.text);
                  }}
                >
                  <EditNoteIcon/>
                </button>
                <button className="btn btn-outline-info" onClick={() => toggleReadStatus(todo.id)}>
                  {todo.read ? <RemoveDoneIcon/> : <CheckIcon/>}
                </button>
              </div>
              <div className="modal fade" id={`exampleModal${todo.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className='modal-header'>
                      Update todo
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
