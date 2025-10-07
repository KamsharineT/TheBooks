import { useEffect, useState } from 'react'
import './App.css'

const Card = ({title}) =>{
  // Manage component state (data that changes)
  // const [variableName,setVariableName] = useState() --- Common practice
  // state is persistent accross the browser, if you reload the component will be returned to the initial value
  const [count,setCount] = useState(0)
  const [hasLiked,setHasLiked] = useState(false)

  useEffect(() => {
    console.log(`${title} has been liked :${hasLiked}`)
  }, [hasLiked]);

  return(
    <div className='card' onClick={() => setCount((prevState) => prevState + 1)}>
      <h2>{title} <br/> {count} </h2>
      <button onClick={() => {setHasLiked(!hasLiked)}}>
        {hasLiked ? '❤️' : 'Like🤍'}
      </button>
    </div>
  )
}
const App = () =>{
  
  return (
    <div className='card-container'>
      <Card title={"Book Thief"}/>
      <Card title={"Mid Night Library"}/>
      <Card title={"Ikigai"}/>
    </div>
  )
}

export default App
