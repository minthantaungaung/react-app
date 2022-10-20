import React, { useState } from 'react'
import { Outlet,Link } from 'react-router-dom'

function BookLayout() {
    const [number,setNumber] = useState(3)
    return (
        <>
            <ul style={{paddingLeft:"5em"}} >
                <li>
                    <Link to="/books/1">Book 1</Link>
                </li>
                <li>
                    <Link to="/books/2">Book 2</Link>
                </li>
                <li>
                    <Link to={`/books/${number}`}>Book {number}</Link>
                </li>
                <li>
                    <Link to="/books/new">New Book</Link>
                </li>
            </ul>
            <Outlet context={{genere:"Horror"}}/>
            <input type="number" value={number} onChange={e=> setNumber(e.target.value)} />
        </>     
    )
}

export default BookLayout