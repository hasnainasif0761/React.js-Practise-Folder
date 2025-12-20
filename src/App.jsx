import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h2>Simple Counter </h2><br /><br />
      <h3>{num}</h3>
      <button onClick={()=>{
        setNum(num + 1)
      }} style={{marginTop:10,marginRight:10,padding:2,cursor:'pointer'}}>Increment Number</button>
      <button onClick={()=>{
        setNum(num == 0 ? 0 : num - 1)
      }} style={{marginTop:10,padding:2,cursor:'pointer'}}>Decrement Number</button>
    </div>
  )
}

export default App