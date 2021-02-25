import React from 'react'
const Notes = () => {
    const myNotes = new Array(3)
        .fill('')
        .map((_, i) => {
            return (
                <li key={i} className='list-group-item'>
                    <div>
                       Notes{i}
                    <small>{new Date().toLocaleDateString()}</small>  
                    </div>
                   
                    <button className='btn btn-outline-danger'>&times;</button>
                </li>
            )
        })
    return (
        <div>
            <ul className='list-group'>
                {myNotes}
            </ul>
        </div>
    )
}

export default Notes