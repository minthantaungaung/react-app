import React from 'react'
import Book from './components/Book';
import NewBook from './components/NewBook';
import BookList from './components/BookList';
import BookLayout from './BookLayout'

import { Route, Routes } from 'react-router-dom'
function BookRoutes() {
    return (
        <>
            <Routes >
                <Route element={<BookLayout />}>
                    <Route index element={<BookList />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>
            </Routes>
        </>
    )
}

export default BookRoutes