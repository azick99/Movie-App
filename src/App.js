import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import movies from './data/movies.data'
import Download from './routes/download/Download'
import ErrorPage from './routes/home/ErrorPage'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import New from './routes/new/New'

function App() {
 
  const [onSearchHanlder, setOnSearchHandler] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  const handleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setOnSearchHandler(searchFieldString)
  }

  useEffect(() => {
    const newFilteredMovies = movies.filter((movie) =>
      movie.name.toLocaleLowerCase().includes(onSearchHanlder)
    )
    setFilteredMovies(newFilteredMovies)
  }, [onSearchHanlder])
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation  handleChange={handleChange}/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home filteredMovies={filteredMovies}/>,
        },
        {
          path: '/new',
          element: <New />,
        },
        {
          path: '/download',
          element: <Download />,
        },
      ],
    },
  ])

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
