import React from 'react'
import { addTodo } from '../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'

function TaskInput() {
  const dispatch = useDispatch();
  const [task, setTask] = React.useState('');
  const handleadding = () => {
    dispatch(addTodo(task));
  }
  return (
    <div className="card bg-sky-900  h-24 w-[50vw] mt-20">
        <div className="card-body flex">
          <input placeholder="Enter your todo" className="form-control rounded-2xl" onChange={(e) => setTask(e.target.value)} />
          <button className="btn btn-outline-success w-28 mx-4 text-4xl rounded-full" onClick={handleadding}>+</button>
        </div>
      </div>
  )
}

export default TaskInput