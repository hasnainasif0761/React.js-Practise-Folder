import React from 'react'

const College = ({ college }) => {
    return (
        <div>
            <h3>{college.name}</h3>
            <ul>
                <li>{college.student.map((elem,idx)=>(
                    <div key={idx}>
                    <h3>{elem.name}</h3>
                    <h3>{elem.age}</h3>
                    <h3>{elem.email}</h3>
                    </div>
                ))}</li>
            </ul>
            <br />
            <hr /><br />
        </div>
    )
}

export default College