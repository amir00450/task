  import { useState } from "react"
  import Counter from "./C/Counter"

function App() {

  const [number,setnumber] = useState(0)
  
  function plus() {
      setnumber(number+1)
  }
  
  function mines() {
    if(number > 0){
      setnumber(number-1)
    }

    if( number == 0 ){
      alert("کمتر از حد ممکن")
    }
      
  }

  function reset() {
      Number(0)
  }
  
  


  return (
    <>
      <Counter  p={plus} m={mines} n={number} r={reset}/>
    </>
  )
}

export default App