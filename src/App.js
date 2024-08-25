 
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import './App.css';

function App() {
  const id = useSelector(state=>state.id)
  const password = useSelector(state=>state.password)
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()

  const increase=()=>{
    dispatch({type:"INCREMENT", payload:{num:5}}) 
  }
  const decrement=()=>{
    dispatch({type:"DECREMENT", payload:{num:5}}) 
  }
  const login=()=>{
    dispatch({type:"LOGIN", payload:{id:"ming", password:"10"}}) 
  }
  return (
    <div className='count_box'> 
      <h1>{id}, {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrement}>감소</button>     
      <button onClick={login}>로그인</button>
      <Box/>
    </div>
  );
}

export default App;
