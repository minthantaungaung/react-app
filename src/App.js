import './App.css';
import { Route, Routes, Link, NavLink, useRoutes, useLocation } from 'react-router-dom'
import BookList from './components/BookList';
import Home from './components/Home';
import NotFound from './components/NotFound';
import BookRoutes from './BookRoutes';
import './site.css'

function App() {
  const location = useLocation()
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />
  //   },
  // ])
  return (

    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books"  >Books</Link>
          </li>
        </ul>
      </nav>
      {location.state}
      {/*Can use some case like adding different sidebar or something*/}
      <Routes location="/books">
        <Route path="/books" element={<h1>Extra Contents</h1>} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
