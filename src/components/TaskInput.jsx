import React from 'react'
import { addTodo } from '../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import { useEffect } from 'react'
function TaskInput() {
  const dispatch = useDispatch();
  const [task, setTask] = React.useState('');
  const handleAdding = () => {
    if(task){
      dispatch(addTodo(task));
    }
  }
  return (
    <div className="card bg-sky-900  h-24 w-full lg:w-[1000px] sm:w-[600px] max-w-full m-2" >
        <div className="card-body flex">
          <input placeholder="Enter your todo" className="form-control rounded-2xl " onChange={(e) => setTask(e.target.value)} />
          <button className="btn btn-outline-success w-auto mx-4  rounded-full" onClick={handleAdding}><AddCircleOutlineIcon /></button>
        </div>
      </div>
  )
}

export default TaskInput