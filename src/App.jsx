import React, { useEffect, useState } from 'react'
const App = () => {

    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)
    
    function logMessage(message){
      console.log(message)
    }
    useEffect(()=>{
      logMessage("useEffect chal rha hai Ake bar");
    },[])
    function loginMessage(){
      console.log("dubara function chal rhi hai")
    }
    loginMessage();






  return (
    <div>
      <h1>Introduction UseEffect</h1>
      <button onClick={()=>{setCounter(counter+1)}}>Counter{counter}</button>
      <button onClick={()=>{setData(data+1)}}>Counter{data}</button>
    </div>
  )
}

export default App