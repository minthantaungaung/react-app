import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

function Book() {
    const{id} = useParams()
    const obj = useOutletContext()
  return (
    <>
    <h2>Book {id} | Genere : {obj.genere}</h2>
    </>
  )
}

export default Book