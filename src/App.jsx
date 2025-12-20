import React from 'react'
import College from './College'

const App = () => {
  
  const collegeData = [
    {
      name: 'IET Alwar',
      city : 'Alwar',
      website : 'www.ietalwar.ac.in',
      student : [
        {
          name : 'Naman',
          age  : 21,
          email : 'naman@gmail.com'
        }
      ]
    },
    {
      name: 'IIT Delhi',
      city : 'Delhi',
      website : 'www.iitdelhi.ac.in',
      student : [
        {
          name : 'Rohan',
          age  : 22,
          email : 'rohan@gmail.com'
        }
      ]
    },
    {
      name: 'DAE Karachi',
      city : 'Karachi',
      website : 'www.daekarachi.ac.in',
      student : [
        {
          name : 'Ali',
          age  : 20,
          email : 'ali@gmail.com'
        }
      ]
    }
  ]
  
  
  return (
    <div>

      <h1>Nested Looping with components</h1>
      {
        collegeData.map((elem,index)=>(
          <div key={index}>
          <College college={elem} />
          </div>
        ))
      }
    </div>
  )
}

export default App